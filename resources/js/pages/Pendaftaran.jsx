import { Head, router, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import Layout from '../Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import MuiIcon from '../components/MuiIcon';

/* ================= STYLE ================= */
const selectStyle =
    'w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 text-sm transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200';

/* ================= HELPER ================= */
const onlyNumbers = (value) => value.replace(/[^0-9]/g, '');

export default function Pendaftaran({ whatsApp }) {
    const { referal_code } = usePage().props;
    const { data, setData, post, reset, errors, processing } = useForm({
        nama_member: '', // NAMA LENGKAP (MALAYSIA)
        email: '', // E-MEL
        no_telp: '', // no whatsapp
        jenis_kelamin: '',
        alamat_lengkap: '',
        modal_investasi: '',
        pekerjaan: '',
        nama_rekening: '', // Nama pada akaun
        nomor_rekening: '', // Nomor akaun
        nama_bank: ''
    });

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
Alamat Lengkap: ${data.alamat_lengkap}
Modal Pelaburan: RM.${onlyNumbers(data.modal_investasi)}

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
            adminPhone = '+60' + adminPhone.slice(1);
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

                router.get(`/${referal_code}/ahli-area`);
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
                    <Card title="Pendaftaran Ahli" subtitle="Isi semua data di bawah ini" icon={<MuiIcon name="assignment" />}>
                        <form onSubmit={submitHandler}>
                            {/* ================= PROFILE ================= */}
                            <div className="mb-6">
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

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Jantina</label>
                                        <select
                                            className={`w-full rounded-lg border-2 px-4 py-2.5 text-sm transition-all ${
                                                errors.jenis_kelamin
                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                                    : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                                            }`}
                                            value={data.jenis_kelamin}
                                            onChange={(e) => setData('jenis_kelamin', e.target.value)}
                                        >
                                            <option value="">-- Pilih Jantina --</option>
                                            <option value="L">Lelaki</option>
                                            <option value="P">Perempuan</option>
                                        </select>
                                        {errors.jenis_kelamin && <p className="mt-1 text-xs text-red-500">{errors.jenis_kelamin}</p>}
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Pekerjaan</label>
                                        <select className={selectStyle} value={data.pekerjaan} onChange={(e) => setData('pekerjaan', e.target.value)}>
                                            <option value="">-- Pilih Pekerjaan --</option>
                                            {pekerjaanList.map((job, i) => (
                                                <option key={i} value={job}>
                                                    {job}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.pekerjaan && <p className="mt-1 text-xs text-red-500">{errors.pekerjaan}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        error={errors.alamat_lengkap}
                                        label="Alamat Lengkap"
                                        value={data.alamat_lengkap}
                                        onChange={(e) => setData('alamat_lengkap', e.target.value)}
                                    />
                                </div>
                                <div className="my-2">
                                    <h3 className="mb-4 border-b border-blue-500 text-lg font-semibold text-gray-800">INFORMASI AKUN BANK</h3>
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

                                    <div className="md:col-span-2">
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Nama Bank</label>
                                        <select className={selectStyle} value={data.nama_bank} onChange={(e) => setData('nama_bank', e.target.value)}>
                                            <option value="">-- Pilih Nama Bank --</option>
                                            {bankList.map((b, i) => (
                                                <option key={i} value={b}>
                                                    {b}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.nama_bank && <p className="mt-1 text-xs text-red-500">{errors.nama_bank}</p>}
                                    </div>
                                </div>
                            </div>
                            {/*=============== SUBMIT ================= */}
                            <div className="mt-8 flex justify-start border-t pt-6">
                                <Button
                                    type="submit"
                                    variant="success"
                                    disabled={processing}
                                    className="flex gap-2 bg-green-600 text-white hover:bg-green-700"
                                >
                                    <img src="/image/wa.png" alt="" className="w-5" />
                                    {processing ? 'Memproses...' : 'Kirim di WhatsApp'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}

Pendaftaran.layout = (page) => <Layout>{page}</Layout>;
