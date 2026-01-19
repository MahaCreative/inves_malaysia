import { Head, router, useForm, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Layout from '../Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import MuiIcon from '../components/MuiIcon';

/* ================= STYLE ================= */
const selectStyle =
    'w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200';

const stepAnim = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 }
};

/* ================= HELPER ================= */
const onlyNumbers = (value) => value.replace(/[^0-9]/g, '');

export default function Pendaftaran({ whatsApp }) {
    const { referal_code } = usePage().props;
    const { data, setData, post, reset, errors, processing } = useForm({
        nama_member: '',

        email: '',
        no_telp: '',
        jenis_kelamin: '',

        provinsi: '',
        kota: '',
        alamat_lengkap: '',
        kode_pos: '',
        pekerjaan: '',

        nama_rekening: '',
        nomor_rekening: '',
        nama_bank: '',
        modal_pelaburan: ''
    });

    /* ================= STATE ================= */
    const [step, setStep] = useState(1);
    const totalStep = 5;

    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [loadingCity, setLoadingCity] = useState(false);
    const [loadingProvince, setLoadingProvince] = useState(true);
    const [jobSearch, setJobSearch] = useState('');

    /* ================= DATA ================= */
    const pekerjaanList = [
        'Pelajar',
        'Pekerja Swasta',
        'Pegawai Kerajaan',
        'BUMN',
        'Wiraswasta',
        'Pedagang',
        'Petani',
        'Nelayan',
        'Guru',
        'Pensyarah',
        'Doktor',
        'Jururawat',
        'Freelancer',
        'Pencipta Kandungan',
        'Penaja',
        'Pelabur',
        'Surirumah',
        'Pencen',
        'Lain-lain'
    ];

    const bankList = [
        'Maybank',
        'CIMB Bank',
        'Public Bank',
        'RHB Bank',
        'Hong Leong Bank',
        'AmBank',
        'Bank Islam Malaysia',
        'Bank Rakyat',
        'Affin Bank',
        'Alliance Bank',
        'Bank Simpanan Nasional (BSN)',
        'OCBC Bank',
        'HSBC Bank',
        'Standard Chartered',
        'United Overseas Bank (UOB)',
        'Bank Lain-lain'
    ];

    const filteredJobs = pekerjaanList.filter((job) => job.toLowerCase().includes(jobSearch.toLowerCase()));

    /* ================= API NEGERI ================= */
    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: 'Malaysia' })
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch states');
                return res.json();
            })
            .then((data) => {
                if (data.data && data.data.states) {
                    setProvinces(data.data.states.map((state, index) => ({ id: index + 1, name: state.name })));
                }
                setLoadingProvince(false);
            })
            .catch((error) => {
                console.error('Error fetching states:', error);
                setLoadingProvince(false);
            });
    }, []);

    /* ================= API BANDAR ================= */
    useEffect(() => {
        if (!data.provinsi) return;

        setLoadingCity(true);
        fetch('https://countriesnow.space/api/v0.1/countries/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: 'Malaysia', state: data.provinsi })
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch cities');
                return res.json();
            })
            .then((data) => {
                if (data.data) {
                    setCities(data.data.map((city, index) => ({ id: index + 1, name: city })));
                }
                setLoadingCity(false);
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
                setLoadingCity(false);
            });
    }, [data.provinsi]);

    /* ================= AUTO STEP ERROR ================= */
    useEffect(() => {
        if (!Object.keys(errors).length) return;

        if (errors.nama_member || errors.email || errors.no_telp || errors.jenis_kelamin || errors.modal_investasi) setStep(1);
        else if (errors.provinsi || errors.kota || errors.alamat_lengkap || errors.pekerjaan) setStep(2);
        else if (errors.nama_rekening || errors.nomor_rekening || errors.nama_bank) setStep(3);
    }, [errors]);

    /* ================= SUBMIT ================= */
    const submitHandler = (e) => {
        e.preventDefault();

        // Buat pesan WhatsApp
        const whatsappMessage = `Halo, saya ingin mendaftar sebagai ahli Luno Malaysia dengan data lengkap berikut:

*DATA PERIBADI*
Nama: ${data.nama_member}
Emel: ${data.email}
No WhatsApp: ${data.no_telp}
Jantina: ${data.jenis_kelamin === 'L' ? 'Lelaki' : 'Perempuan'}
Modal Pelaburan: RM.${onlyNumbers(data.modal_investasi)}

*ALAMAT*
Negeri: ${data.provinsi}
Bandar: ${data.kota}
Alamat Lengkap: ${data.alamat_lengkap}
Poskod: ${data.kode_pos}

*PEKERJAAN*
Pekerjaan: ${data.pekerjaan}

*AKAUN BANK*
Nama Pemilik: ${data.nama_rekening}
Nombor Akaun: ${data.nomor_rekening}
Nama Bank: ${data.nama_bank}\
`;

        // Nomor WhatsApp Admin (ubah sesuai nomor yang benar)
        let adminPhone = whatsApp.whatsapp || '';
        // Jika nomor dimulai dengan 0 (contoh: 085...), ganti leading 0 menjadi +62
        if (adminPhone.startsWith('0')) {
            adminPhone = '+62' + adminPhone.slice(1);
        }
        // Untuk membuka wa.me gunakan nomor tanpa plus
        const adminPhoneForUrl = adminPhone.replace(/^\+/, '');

        // Kirim data ke server
        post(`/${referal_code}/store-pendaftaran-member`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berjaya 🎉',
                    text: 'Pendaftaran ahli berjaya. Mesej telah dihantar ke WhatsApp admin. Sila tunggu pengesahan daripada admin untuk proses selanjutnya',
                    confirmButtonColor: '#2563eb'
                });
                const whatsappUrl = `https://wa.me/${adminPhoneForUrl}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
                reset();
                setStep(1);

                router.get(`/${referal_code}/member-area`);
            },
            onError: (err) => {
                console.log(err.response);

                Swal.fire({
                    icon: 'error',
                    title: 'Gagal ❌',
                    text: 'Periksa kembali data Anda.',
                    confirmButtonColor: '#f97316'
                });
            }
        });
        // Kirim ke WhatsApp

        // Tampilkan loading
        Swal.fire({
            title: 'Mengirim Data',
            text: 'Mohon tunggu...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => Swal.showLoading()
        });
    };

    return (
        <>
            <Head>
                <title>Pendaftaran - Luno Malaysia</title>
                <meta
                    name="description"
                    content="Borang pendaftaran ahli Luno Malaysia. Isi data peribadi dan akaun untuk menyertai sebagai pelabur."
                />
                <meta name="keywords" content="pendaftaran ahli, pendaftaran pelaburan, luno malaysia" />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content="Pendaftaran - Luno Malaysia" />
                <meta property="og:description" content="Daftar menjadi ahli Luno Malaysia. Isi borang pendaftaran dan mula pelaburan anda." />
                <meta property="og:image" content="/image/LOGO PNG.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pendaftaran - Luno Malaysia" />
                <meta name="twitter:description" content="Daftar menjadi ahli Luno Malaysia. Isi borang pendaftaran dan mula pelaburan anda." />
                <meta name="twitter:image" content="/image/LOGO PNG.png" />
            </Head>

            <div className="flex min-h-screen justify-center bg-gray-50 py-12">
                <div className="w-full max-w-4xl">
                    <Card title="Pendaftaran Ahli" subtitle="Isi data secara berperingkat" icon={<MuiIcon name="assignment" />}>
                        {/* ================= STEPPER ================= */}
                        <div className="mb-10 flex justify-between">
                            {[1, 2, 3, 4].map((s) => (
                                <div
                                    key={s}
                                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-bold transition-all ${
                                        step >= s ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-400'
                                    }`}
                                >
                                    {s}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={submitHandler}>
                            <AnimatePresence mode="wait">
                                {/* ================= STEP 1 ================= */}
                                {step === 1 && (
                                    <motion.section key="s1" {...stepAnim}>
                                        <h3 className="mb-4 flex items-center gap-2 border-b-2 border-blue-600 pb-2 text-lg font-semibold">
                                            <MuiIcon name="person" /> Identiti
                                        </h3>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <Input
                                                error={errors.nama_member}
                                                label="Nama Penuh"
                                                value={data.nama_member}
                                                onChange={(e) => setData('nama_member', e.target.value)}
                                            />

                                            <Input
                                                error={errors.email}
                                                label="Emel"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            <Input
                                                type="number"
                                                min="10000000000"
                                                error={errors.no_telp}
                                                label="No WhatsApp"
                                                value={data.no_telp}
                                                onChange={(e) => setData('no_telp', e.target.value)}
                                            />
                                            <Input
                                                type="number"
                                                error={errors.modal_investasi}
                                                label="Modal Pelaburan"
                                                value={data.modal_investasi}
                                                onChange={(e) => setData('modal_investasi', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className={`w-full rounded-lg border-2 px-4 py-2.5 text-sm transition-all ${
                                                    errors.jenis_kelamin
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                                        : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                                                }`}
                                                value={data.jenis_kelamin}
                                                onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                            >
                                                <option value="">-- Jantina --</option>
                                                <option value="L">Lelaki</option>
                                                <option value="P">Perempuan</option>
                                            </select>
                                            {errors.jenis_kelamin && <p className="mt-1 text-xs text-red-500">{errors.jenis_kelamin}</p>}
                                        </div>
                                    </motion.section>
                                )}

                                {/* ================= STEP 2 ================= */}
                                {step === 2 && (
                                    <motion.section key="s2" {...stepAnim}>
                                        <h3 className="mb-4 flex items-center gap-2 border-b-2 border-blue-600 pb-2 text-lg font-semibold">
                                            <MuiIcon name="location_on" /> Alamat
                                        </h3>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <select
                                                    className={`w-full rounded-lg border-2 px-4 py-2.5 text-sm transition-all ${
                                                        errors.provinsi
                                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                                            : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                                                    }`}
                                                    value={data.provinsi}
                                                    onChange={(e) => {
                                                        setData('provinsi', e.target.value);
                                                        setData('kota', '');
                                                    }}
                                                >
                                                    <option value="">{loadingProvince ? 'Memuatkan...' : '-- Negeri --'}</option>
                                                    {provinces.map((p) => (
                                                        <option key={p.id} value={p.name}>
                                                            {p.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.provinsi && <p className="mt-1 text-xs text-red-500">{errors.provinsi}</p>}
                                            </div>
                                            <div>
                                                {data.provinsi && (
                                                    <select
                                                        className={`w-full rounded-lg border-2 px-4 py-2.5 text-sm transition-all ${
                                                            errors.kota
                                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                                                : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                                                        }`}
                                                        value={data.kota}
                                                        onChange={(e) => setData('kota', e.target.value)}
                                                    >
                                                        <option value="">{loadingCity ? 'Memuatkan...' : '-- Bandar --'}</option>
                                                        {cities.map((c) => (
                                                            <option key={c.id} value={c.name}>
                                                                {c.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                                {errors.kota && <p className="mt-1 text-xs text-red-500">{errors.kota}</p>}
                                            </div>
                                        </div>

                                        <Input
                                            label="Alamat Lengkap"
                                            value={data.alamat_lengkap}
                                            error={errors.alamat_lengkap}
                                            onChange={(e) => setData('alamat_lengkap', e.target.value)}
                                        />
                                        <h3 className="mb-4 flex items-center gap-2 border-b-2 border-blue-600 pb-2 text-lg font-semibold">
                                            <MuiIcon name="work" /> Pekerjaan
                                        </h3>

                                        <input
                                            className={`${selectStyle} mb-2`}
                                            placeholder="Cari pekerjaan..."
                                            value={jobSearch}
                                            onChange={(e) => setJobSearch(e.target.value)}
                                        />

                                        <div>
                                            <select
                                                className={selectStyle}
                                                value={data.pekerjaan}
                                                onChange={(e) => setData('pekerjaan', e.target.value)}
                                            >
                                                <option value="">-- Pekerjaan --</option>
                                                {filteredJobs.map((job, i) => (
                                                    <option key={i} value={job}>
                                                        {job}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.pekerjaan && <p className="mt-1 text-xs text-red-500">{errors.pekerjaan}</p>}
                                        </div>
                                    </motion.section>
                                )}

                                {/* ================= STEP 3 ================= */}

                                {/* ================= STEP 4 ================= */}
                                {step === 3 && (
                                    <motion.section key="s4" {...stepAnim}>
                                        <h3 className="mb-4 flex items-center gap-2 border-b-2 border-blue-500 pb-2 text-lg font-semibold">
                                            <MuiIcon name="account_balance" /> Akaun
                                        </h3>

                                        <Input
                                            label="Nama Pemilik Akaun"
                                            error={errors.nama_rekening}
                                            value={data.nama_rekening}
                                            onChange={(e) => setData('nama_rekening', e.target.value)}
                                        />
                                        <Input
                                            type="number"
                                            min="100000"
                                            error={errors.nomor_rekening}
                                            label="Nombor Akaun"
                                            value={data.nomor_rekening}
                                            onChange={(e) => setData('nomor_rekening', e.target.value)}
                                        />

                                        <div>
                                            <select
                                                className={selectStyle}
                                                value={data.nama_bank}
                                                onChange={(e) => setData('nama_bank', e.target.value)}
                                            >
                                                <option value="">-- Nama Bank --</option>
                                                {bankList.map((b, i) => (
                                                    <option key={i} value={b}>
                                                        {b}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.nama_bank && <p className="mt-1 text-xs text-red-500">{errors.nama_bank}</p>}
                                        </div>
                                    </motion.section>
                                )}

                                {/* ================= STEP 5 ================= */}
                                {step === 4 && (
                                    <motion.div key="s5" {...stepAnim} className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                                        <h3 className="flex items-center gap-2 text-lg font-bold text-blue-700">
                                            <MuiIcon name="check_circle" /> Konfirmasi
                                        </h3>
                                        <p className="text-sm text-blue-600">Pastikan semua data sudah betul sebelum dihantar.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* ================= NAV ================= */}
                            <div className="mt-8 flex justify-between border-t pt-6">
                                {step > 1 && (
                                    <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
                                        ⬅ Kembali
                                    </Button>
                                )}

                                {step < totalStep ? (
                                    <Button type="button" variant="primary" onClick={() => setStep(step + 1)}>
                                        Seterusnya
                                    </Button>
                                ) : (
                                    <Button type="submit" variant="primary" disabled={processing}>
                                        {processing ? 'Memproses...' : 'Hantar'}
                                    </Button>
                                )}
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}

Pendaftaran.layout = (page) => <Layout>{page}</Layout>;
