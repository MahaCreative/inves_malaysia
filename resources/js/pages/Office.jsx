import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Layout from '../Layout';

export default function Office() {
    return (
        <>
            <Head>
                <title>Pejabat dan Gambaran Syarikat - Luno Malaysia</title>
                <meta
                    name="description"
                    content="Ketahui lebih lanjut tentang Luno Malaysia, Bursa Aset Digital (DAX) pertama yang dikawal selia di Malaysia. Kami menjadikan mata wang kripto seperti Bitcoin mudah dan selamat untuk semua."
                />
                <meta
                    name="keywords"
                    content="Luno Malaysia, mata wang kripto, Bitcoin, Ethereum, Bursa Aset Digital, DAX, Suruhanjaya Sekuriti Malaysia, pelaburan kripto"
                />
                <meta name="robots" content="index,follow" />
            </Head>

            <div className="bg-gradient-to-b from-white to-slate-50 py-12">
                <div className="mx-auto max-w-5xl px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-blue-700">Pejabat dan Gambaran Syarikat</h1>
                        <p className="text-lg text-slate-600">Mengenai Luno Malaysia dan Komitmen Kami dalam Revolusi Kewangan Digital</p>
                    </motion.div>

                    <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                            <img
                                src="/image/pejabat_luno.jpg"
                                alt="Pejabat Luno Malaysia"
                                className="h-80 w-full rounded-xl object-cover shadow-lg"
                            />
                        </motion.div>

                        <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6">
                            <div>
                                <h2 className="mb-4 text-2xl font-semibold text-blue-700">Maklumat Pejabat</h2>
                                <p className="text-slate-700">
                                    Luno Malaysia Sdn Bhd beroperasi dari pejabat di Aras 16 & 17, Menara Nukleus, Mutiara Damansara, Petaling Jaya,
                                    Selangor, Malaysia. Walaupun kami tidak menyediakan sokongan pakar di tapak, semua perkhidmatan pelanggan
                                    dikendalikan secara digital untuk kemudahan anda.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Hubungi Kami</h3>
                                <p className="text-slate-600">
                                    Untuk sebarang pertanyaan, sila lawati laman web rasmi kami atau hubungi sokongan pelanggan melalui saluran
                                    digital.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-12">
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
                            <h3 className="mb-4 text-xl font-semibold text-blue-700">Lokasi Pejabat</h3>
                            <div className="aspect-video w-full overflow-hidden rounded-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAx7NwqSnIRQ9U22sZLd5rMIfWf5J4YmEk&amp;q=3.160611+101.6121892"
                                    className="border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl border border-slate-200 bg-white p-8 shadow-lg"
                    >
                        <h2 className="mb-6 text-center text-3xl font-bold text-blue-700">Gambaran Syarikat</h2>

                        <div className="space-y-6 leading-relaxed text-slate-700">
                            <p>
                                Mata wang kripto sedang mengubah landskap kewangan global dengan pantas, dan pasukan Luno berada di barisan hadapan
                                revolusi ini. Jika anda ingin terlibat dalam sesuatu yang benar-benar berskala global dan bersifat disruptif bersama
                                pasukan yang berpandangan jauh serta bercita-cita tinggi, yang sangat menghargai kepelbagaian, kerjasama dan usaha
                                berterusan ke arah kecemerlangan, maka inilah peluang untuk anda.
                            </p>

                            <p>
                                Menaik taraf seluruh dunia kepada sistem kewangan baharu merupakan satu cabaran berskala besar. Seperti pendaratan
                                pertama manusia di bulan, ia memerlukan individu istimewa yang mampu bekerjasama dengan kemahiran luar biasa, fokus
                                yang tinggi dan keazaman yang kuat. Kami sedang mengubah dunia, dan untuk merealisasikannya, kami memerlukan pasukan
                                terbaik bagi menjayakan misi ini. Ringkasnya, untuk mencapai matlamat kami, kami memerlukan individu yang luar biasa.
                            </p>

                            <p>
                                Kami menjadikan proses membeli, menyimpan dan mempelajari mata wang kripto seperti Bitcoin, Ethereum, XRP dan Litecoin
                                selamat serta mudah. Pada masa ini, kami mempunyai lebih daripada 5 juta pelanggan di lebih 40 buah negara.
                            </p>

                            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                                <p className="mb-2 font-semibold text-blue-800">Pembiayaan dan Pengiktirafan</p>
                                <p>
                                    Luno merupakan syarikat yang menerima pembiayaan Siri B, disokong oleh Balderton Capital dan Kumpulan Naspers,
                                    serta telah diambil alih oleh Digital Currency Group (DCG) pada tahun 2020.
                                </p>
                            </div>

                            <p>
                                Kami juga merupakan Bursa Aset Digital (DAX) pertama yang dikawal selia dan diluluskan oleh Suruhanjaya Sekuriti
                                Malaysia sejak Oktober 2019.
                            </p>

                            <div className="rounded-lg bg-slate-100 p-4">
                                <p className="mb-2 font-semibold text-slate-800">Kepelbagaian Pasukan</p>
                                <p>
                                    Kami berbangga menjadi salah satu pasukan mata wang kripto paling antarabangsa di dunia, terdiri daripada lebih 26
                                    kewarganegaraan, yang beroperasi merentasi Afrika Selatan, Indonesia, United Kingdom, Malaysia, Nigeria dan
                                    Singapura.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

Office.layout = (page) => <Layout children={page} />;
