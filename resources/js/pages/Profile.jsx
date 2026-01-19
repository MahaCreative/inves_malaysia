import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Layout from '../Layout';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Tentang Luno Malaysia - Bursa Aset Digital Terawal di Malaysia</title>
                <meta
                    name="description"
                    content="Ketahui lebih lanjut tentang Luno Malaysia, Bursa Aset Digital (DAX) pertama yang dikawal selia oleh Suruhanjaya Sekuriti Malaysia. Platform selamat untuk membeli, menjual, dan menyimpan mata wang kripto seperti Bitcoin."
                />
                <meta
                    name="keywords"
                    content="Luno Malaysia, Bursa Aset Digital, DAX, mata wang kripto, Bitcoin, Ethereum, Suruhanjaya Sekuriti Malaysia, pelaburan kripto"
                />
                <meta name="robots" content="index,follow" />
            </Head>

            <div className="bg-gradient-to-b from-white to-slate-50 py-12">
                <div className="mx-auto max-w-5xl px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-blue-700">Tentang Luno Malaysia Sdn Bhd</h1>
                        <p className="text-lg text-slate-600">Entiti Tempatan untuk Platform Pertukaran Mata Wang Kripto Global</p>
                    </motion.div>

                    <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center">
                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                            <img src="/image/luno.jpg" alt="Luno Malaysia" className="h-80 w-full rounded-xl object-cover shadow-lg" />
                        </motion.div>

                        <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6">
                            <p className="leading-relaxed text-slate-700">
                                Luno Malaysia Sdn Bhd merupakan entiti tempatan bagi platform pertukaran mata wang kripto global, Luno. Syarikat ini
                                beroperasi sebagai Bursa Aset Digital (DAX) yang dikawal selia oleh Suruhanjaya Sekuriti Malaysia, serta menyediakan
                                platform yang selamat dan boleh dipercayai untuk membeli, menjual dan menyimpan mata wang kripto di Malaysia.
                            </p>
                            <p className="leading-relaxed text-slate-700">
                                Luno Malaysia menawarkan perkhidmatan sepenuhnya secara digital tanpa menyediakan sokongan bersemuka di pejabat.
                                Platform ini dikenali kerana kemudahan penggunaan, tahap keselamatan yang tinggi dan sokongan pelanggan melalui
                                saluran digital. Luno Malaysia Sdn Bhd mempunyai pejabat di Petaling Jaya, Selangor, namun semua urusan sokongan
                                pelanggan dikendalikan secara dalam talian.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8">
                        <h2 className="mb-6 text-2xl font-semibold text-blue-700">Butiran Perusahaan</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Jenis Syarikat</h3>
                                <p className="text-slate-600">Pertukaran Aset Digital (DAX) / Platform Pengurusan Mata Wang Kripto.</p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Peraturan</h3>
                                <p className="text-slate-600">
                                    Diiktiraf sebagai Pengendali Pasaran Diiktiraf (RMO-DAX) oleh Suruhanjaya Sekuriti Malaysia.
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Perkhidmatan</h3>
                                <p className="text-slate-600">
                                    Membolehkan pengguna membeli, menjual, melabur dan mempelajari tentang mata wang kripto seperti Bitcoin melalui
                                    website rasmi yang intuitif dan selamat.
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Pejabat</h3>
                                <p className="text-slate-600">
                                    Aras 16 & 17, Menara Nukleus, Mutiara Damansara, Petaling Jaya, Selangor, Malaysia, tetapi tidak menyediakan
                                    sokongan pakar di tapak.
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Keselamatan</h3>
                                <p className="text-slate-600">
                                    Menekankan keselamatan berbilang lapisan dan pensijilan standard antarabangsa (ISO/IEC 27001:2022, dsb.).
                                </p>
                            </div>
                            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md">
                                <h3 className="mb-2 text-lg font-medium text-slate-800">Maklumat Tambahan</h3>
                                <p className="text-slate-600">
                                    Luno Malaysia terlibat dalam kes undang-undang yang penting berkenaan liabiliti platform kripto, menunjukkan
                                    landskap kawal selia dan undang-undang yang berkembang dalam sektor ini. Syarikat itu adalah sebahagian daripada
                                    kumpulan Luno yang lebih besar dengan operasi di negara seperti UK, Afrika Selatan, Indonesia dan Australia.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-10">
                        <iframe
                            scrolling="no"
                            allowTransparency="true"
                            frameBorder={0}
                            src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=id#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22OANDA%3ASPX500USD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22OANDA%3ANAS100USD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22www.dhervainvestindo.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.dhervainvestindo.com%2Fp%2Foffice.html%22%7D"
                            title="ticker tape TradingView widget"
                            lang="en"
                            style={{
                                userSelect: 'none',
                                boxSizing: 'border-box',
                                display: 'block',
                                height: 46,
                                width: '100%'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

Profile.layout = (page) => <Layout children={page} />;
