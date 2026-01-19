import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Layout from '../Layout';

export default function PrivacyPolicy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <Head>
                <title>Dasar Privasi - Luno Malaysia</title>
                <meta name="description" content="Dasar Privasi Luno Malaysia menerangkan cara kami mengumpul, menggunakan, dan melindungi data peribadi anda." />
                <meta name="keywords" content="dasar privasi, luno malaysia, data peribadi, privasi" />
                <meta property="og:title" content="Dasar Privasi - Luno Malaysia" />
                <meta property="og:description" content="Ketahui bagaimana Luno Malaysia melindungi data peribadi anda." />
                <meta property="og:image" content="/image/LOGO PNG.png" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dasar Privasi</h1>
                        <p className="text-lg text-gray-600">Notis Privasi Pelanggan Global Luno</p>
                        <p className="text-sm text-gray-500 mt-2">Kemaskini terakhir: 1 Mac 2025</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pengenalan</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Notis privasi ini menerangkan apa, mengapa dan bagaimana kami memproses data peribadi anda. Ia terpakai kepada data peribadi yang dikumpul apabila anda melayari laman web kami serta apabila anda menggunakan perkhidmatan kami melalui laman web atau aplikasi Luno. Notis ini juga menerangkan hak-hak anda berkaitan data peribadi serta cara untuk menghubungi kami sekiranya anda mempunyai sebarang pertanyaan.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Sila baca notis ini dengan teliti. Notis ini disemak dan dikemas kini secara berkala. Versi terkini akan sentiasa diterbitkan di laman ini.
                        </p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hubungan Kami Dengan Anda</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Pelanggan dan Pemohon Akaun Luno</h3>
                                <p className="text-gray-700">Entiti Luno yang menyediakan perkhidmatan kepada anda bertanggungjawab melindungi data peribadi anda dan dikenali sebagai pengawal data atau pihak bertanggungjawab, bergantung kepada lokasi anda.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Akaun Perniagaan</h3>
                                <p className="text-gray-700">Jika anda menggunakan akaun perniagaan Luno, peranan kami bergantung sama ada anda pemilik akaun atau pengguna yang diberi kuasa. Dalam keadaan tertentu, Luno bertindak sebagai pengawal data, khususnya bagi tujuan pengesahan identiti dan pematuhan undang-undang.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Bukan Pelanggan</h3>
                                <p className="text-gray-700">Luno juga boleh mengumpul data peribadi individu bukan pelanggan, contohnya apabila anda melayari laman web kami atau berurusan dengan pelanggan Luno. Pemprosesan ini mematuhi undang-undang tempatan.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Peribadi Yang Kami Proses</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Yang Anda Berikan</h3>
                                <p className="text-gray-700 mb-2">Kami mengumpul data apabila anda:</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Mendaftar akaun</li>
                                    <li>Menggunakan perkhidmatan</li>
                                    <li>Menghubungi kami</li>
                                    <li>Menyertai kaji selidik, promosi atau kempen</li>
                                </ul>
                                <p className="text-gray-700 mt-2"><strong>Kategori Data Termasuk:</strong></p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Maklumat asas: nama, tarikh lahir, kewarganegaraan, emel, nombor telefon</li>
                                    <li>Data identiti: dokumen pengenalan, bukti alamat, status pekerjaan</li>
                                    <li>Data biometrik: imbasan wajah untuk pengesahan identiti</li>
                                    <li>Data kewangan: sumber dana, akaun bank, butiran pembayaran</li>
                                    <li>Data transaksi: nilai transaksi, alamat dompet kripto</li>
                                    <li>Data komunikasi: emel, rakaman panggilan, mesej sokongan</li>
                                    <li>Keutamaan komunikasi</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Yang Dikumpul Secara Automatik</h3>
                                <p className="text-gray-700">Apabila anda menggunakan laman web atau aplikasi:</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Data teknikal (IP, peranti, pelayar)</li>
                                    <li>Data penggunaan</li>
                                    <li>Maklumat lokasi</li>
                                    <li>Data kuki (cookies)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Daripada Pihak Ketiga</h3>
                                <p className="text-gray-700">Kami boleh menerima data daripada:</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Syarikat dalam Kumpulan Luno</li>
                                    <li>Rekod awam</li>
                                    <li>Rantaian blok awam</li>
                                    <li>Penyedia analitik</li>
                                    <li>Penyedia KYC dan AML</li>
                                    <li>Penyedia penyelidikan pasaran</li>
                                    <li>Akaun media sosial (jika anda daftar melalui platform tersebut)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Peribadi Sensitif</h3>
                                <p className="text-gray-700">Kami memproses data sensitif hanya apabila dibenarkan undang-undang, termasuk:</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Data biometrik</li>
                                    <li>Rekod kesalahan jenayah (untuk AML/KYC)</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mengapa Kami Menggunakan Data Peribadi</h2>
                        <p className="text-gray-700 mb-4">Kami menggunakan data peribadi untuk:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                            <li>Membuka dan mengurus akaun anda</li>
                            <li>Menyediakan perkhidmatan perdagangan aset digital</li>
                            <li>Memberi sokongan pelanggan</li>
                            <li>Keselamatan dan pencegahan penipuan</li>
                            <li>Mematuhi keperluan undang-undang dan kawal selia</li>
                            <li>Pemasaran (dengan persetujuan anda)</li>
                            <li>Penyelidikan dan penambahbaikan produk</li>
                        </ul>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Keputusan Automatik</h3>
                                <p className="text-gray-700">Proses pendaftaran akaun mungkin melibatkan keputusan automatik berdasarkan umur, lokasi dan hasil semakan AML/KYC.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Pemasaran</h3>
                                <p className="text-gray-700">Anda boleh memilih untuk tidak menerima komunikasi pemasaran pada bila-bila masa melalui tetapan akaun atau pautan nyahlanggan.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Perkongsian Data Peribadi</h2>
                        <p className="text-gray-700">Kami berkongsi data dengan:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Syarikat dalam Kumpulan Luno</li>
                            <li>Penyedia pengesahan identiti</li>
                            <li>Penyedia pembayaran</li>
                            <li>Penyedia keselamatan dan analitik</li>
                            <li>Pihak berkuasa undang-undang dan pengawal selia (jika diperlukan)</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tempoh Penyimpanan Data</h2>
                        <p className="text-gray-700">Data peribadi disimpan sepanjang hubungan anda dengan kami dan selepas itu mengikut keperluan undang-undang, keselamatan dan operasi.</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pemindahan Data Antarabangsa</h2>
                        <p className="text-gray-700">Data peribadi anda mungkin dipindahkan ke negara lain dengan perlindungan yang sewajarnya selaras undang-undang.</p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Keselamatan Data</h2>
                        <p className="text-gray-700">Luno mengekalkan pensijilan ISO/IEC 27001 dan melaksanakan langkah keselamatan teknikal serta organisasi bagi melindungi data peribadi.</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Privasi & Rantaian Blok</h3>
                            <p className="text-gray-700">Transaksi kripto direkodkan pada rantaian blok awam dan tidak boleh dipadam atau diubah oleh Luno.</p>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hak Anda</h2>
                        <p className="text-gray-700 mb-4">Anda berhak untuk:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Mengakses data peribadi</li>
                            <li>Meminta pembetulan atau pemadaman</li>
                            <li>Membantah pemprosesan</li>
                            <li>Mengehadkan pemprosesan</li>
                            <li>Memindahkan data</li>
                            <li>Membuat aduan kepada pihak berkuasa berkaitan</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeInUp} className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cara Menghubungi Kami</h2>
                        <p className="text-gray-700">Sekiranya anda mempunyai sebarang pertanyaan mengenai dasar privasi ini atau ingin menggunakan hak anda, sila hubungi kami melalui:</p>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-gray-700"><strong>Emel:</strong> privacy@luno.my</p>
                            <p className="text-gray-700"><strong>Alamat:</strong> Luno Malaysia, Kuala Lumpur</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

PrivacyPolicy.layout = (page) => <Layout children={page} />;
