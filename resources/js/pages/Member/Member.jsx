import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Layout from '../../Layout';

export default function Member() {
    const { referal_code } = usePage().props;
    const [data, setData] = useState(null);
    const [idmember, setIdMember] = useState('');
    const searchMember = async () => {
        Swal.fire({
            title: 'Melakukan Pencocokan ID Ahli',
            text: 'Sila tunggu...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => Swal.showLoading()
        });

        try {
            const response = await axios.post(`/${referal_code}/get-ahli-area`, {
                search: idmember
            });

            const data = response.data;

            // ===== onSuccess =====
            if (Object.keys(data).length > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ahli ditemui',
                    text: `Ingin Teruskan Ke Halaman Transaksi Ahli?`,
                    showCancelButton: true,
                    confirmButtonText: 'Ya, Teruskan',
                    cancelButtonText: 'Batal'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = `/${referal_code}/ahli-area/${data.id_member}`;
                    }
                });
            }
            // ===== onError (data kosong) =====
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ahli tidak ditemui',
                    text: 'ID Ahli tidak berdaftar'
                });
            }
        } catch (error) {
            // ===== onError (server / validation) =====
            Swal.fire({
                icon: 'error',
                title: 'Berlaku kesilapan',
                text: error.response?.data?.message || 'Ralat pelayan'
            });
        } finally {
            // ===== onFinish =====
            console.log('Request selesai');
        }
    };

    return (
        <>
            <Head>
                <title>Kawasan Ahli - Luno Malaysia</title>
                <meta
                    name="description"
                    content="Masuk ke kawasan ahli Luno Malaysia. Masukkan ID ahli untuk melihat data transaksi dan pencairan."
                />
                <meta name="keywords" content="kawasan ahli, id ahli, luno malaysia" />
                <meta name="robots" content="noindex,nofollow" />
                <meta property="og:title" content="Kawasan Ahli - Luno Malaysia" />
                <meta property="og:description" content="Akses data transaksi dan pencairan ahli Luno Malaysia." />
                <meta property="og:image" content="/image/LOGO PNG.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kawasan Ahli - Luno Malaysia" />
                <meta name="twitter:description" content="Akses data transaksi dan pencairan ahli Luno Malaysia." />
                <meta name="twitter:image" content="/image/LOGO PNG.png" />
            </Head>

            <div className="flex flex-col items-center justify-center gap-y-6 bg-white px-4 py-3 text-2xl">
                <div className="flex flex-col items-center justify-center gap-2 leading-3">
                    <h1 className="font-oswald">KAWASAN AHLI</h1>
                    <h1 className="font-domine text-lg font-light">DATA TRANSAKSI PERDAGANGAN</h1>
                    <p className="text-xs font-extralight">MASUKKAN ID AHLI ANDA DIBAWAH INI</p>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        value={idmember}
                        onChange={(e) => setIdMember(e.target.value)}
                        className="rounded-md border border-b-2 border-blue-200 px-3 py-2 text-xs text-gray-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                        placeholder="ID AHLI ANDA"
                    />
                    <button
                        onClick={() => searchMember()}
                        className="rounded-md border-b border-blue-600 bg-blue-600 px-3 py-2 text-sm text-white shadow-md hover:cursor-pointer hover:shadow-lg"
                    >
                        Log Masuk...
                    </button>
                </div>
                <div className="flex w-full flex-col items-center justify-center rounded-md border border-blue-700 bg-blue-50 px-4 py-3">
                    <h1 className="text-sm font-semibold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        PERHATIAN....!!!
                    </h1>
                    <p className="text-light w-[80%] text-center font-domine text-xs">
                        Untuk Ahli yang belum menerima pencairan komisen/keuntungan segera lakukan pengesahan di bahagian ADMIN LUNO MALAYSIA. agar
                        diikuti secepat mungkin.
                    </p>
                </div>
            </div>
        </>
    );
}

Member.layout = (page) => <Layout>{page}</Layout>;
