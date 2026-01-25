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

const paketList = [
    {
        kode: 'A',
        title: 'PAKEJ A',
        modal: 'RM 500 – RM 5.000'
    },
    {
        kode: 'B',
        title: 'PAKEJ B',
        modal: 'RM 5.000 – RM 20.000'
    },
    {
        kode: 'C',
        title: 'PAKEJ C',
        modal: 'RM21.000 – RM50.000'
    },
    {
        kode: 'D',
        title: 'PAKEJ D',
        modal: 'RM50.000 – Unlimited'
    }
];

export default function Pendaftaran({ whatsApp }) {
    const { referal_code } = usePage().props;
    const { data, setData, post, reset, errors, processing } = useForm({
        nama_member: '', // NAMA LENGKAP (MALAYSIA)
        ic_number: '', // Num Ic
        email: '', // E-MEL
        no_telp: '', // no telefon
        pekerjaan: '',
        nama_rekening: '', // Nama pada akaun
        nomor_rekening: '', // Num akaun
        nama_bank: '',
        alamat_lengkap: '' // Alamat
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
Num Ic: ${data.ic_number}
E-mail: ${data.email}
No. Telefon: +60${data.no_telp}
Pekerjaan: ${data.pekerjaan}
Alamat: ${data.alamat_lengkap}

*AKAUN BANK*
Nama pada akaun: ${data.nama_rekening}
Num akaun: ${data.nomor_rekening}
Nama Bank: ${data.nama_bank}
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
                                        label="Nama"
                                        value={data.nama_member}
                                        onChange={(e) => setData('nama_member', e.target.value)}
                                    />

                                    <Input
                                        error={errors.ic_number}
                                        label="Num Ic"
                                        value={data.ic_number}
                                        onChange={(e) => setData('ic_number', e.target.value)}
                                    />

                                    <Input
                                        error={errors.email}
                                        label="E-mail"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">No. Telefon</label>
                                        <div className="relative">
                                            <span className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500">🇲🇾 +60</span>
                                            <input
                                                type="number"
                                                className={`w-full rounded-lg border-2 px-4 py-2.5 pl-16 text-sm transition-all focus:ring-2 ${
                                                    errors.no_telp
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                                        : 'border-gray-200 focus:border-blue-600 focus:ring-blue-200'
                                                }`}
                                                value={data.no_telp}
                                                onChange={(e) => setData('no_telp', onlyNumbers(e.target.value))}
                                                placeholder="123456789"
                                            />
                                        </div>
                                        {errors.no_telp && <p className="mt-1 text-xs text-red-500">{errors.no_telp}</p>}
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

                                    <Input
                                        error={errors.nama_rekening}
                                        label="Nama pada akaun"
                                        value={data.nama_rekening}
                                        onChange={(e) => setData('nama_rekening', e.target.value)}
                                    />

                                    <Input
                                        type="number"
                                        min="100000"
                                        error={errors.nomor_rekening}
                                        label="Num akaun"
                                        value={data.nomor_rekening}
                                        onChange={(e) => setData('nomor_rekening', e.target.value)}
                                    />

                                    <div>
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

                                    <div className="col-span-2">
                                        <Input
                                            error={errors.alamat_lengkap}
                                            label="Alamat"
                                            value={data.alamat_lengkap}
                                            onChange={(e) => setData('alamat_lengkap', e.target.value)}
                                        />
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
