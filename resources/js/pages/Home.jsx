import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Layout from '../Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import MuiIcon from '../components/MuiIcon';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};
export default function Home() {
    const { referal_code } = usePage().props;
    return (
        <>
            <Head>
                <title>Laman Utama - Luno Malaysia</title>
                <meta
                    name="description"
                    content="Luno Malaysia — platform pelaburan yang dipercayai untuk perdagangan forex dengan keuntungan bertahap dan diawasi oleh Suruhanjaya Sekuriti Malaysia."
                />
                <meta name="keywords" content="Luno Malaysia, pelaburan, perdagangan forex, pengurus pelaburan, Suruhanjaya Sekuriti Malaysia" />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content="Luno Malaysia - Pelaburan Pintar" />
                <meta
                    property="og:description"
                    content="Platform pelaburan yang dipercayai, keuntungan bertahap, selamat dan diawasi oleh Suruhanjaya Sekuriti Malaysia."
                />
                <meta property="og:image" content="/image/LOGO PNG.png" />
            </Head>

            <div className="space-y-12">
                {/* Hero Section */}
                <div className="mb-12 text-center text-blue-800">
                    <h1 className="mb-4 font-oswald text-xl font-bold text-white md:text-3xl">Pelaburan Bijak Untuk Masa Hadapan Cerah</h1>
                    <p className="mx-auto mb-8 max-w-2xl font-domine text-sm text-blue-700 text-white md:text-xl">
                        Platform pelaburan yang dipercayai dengan keuntungan yang kompetitif dan sistem keselamatan tahap bank
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`${referal_code}/pendaftaran-member`}>
                            <Button variant="primary" size="lg">
                                <MuiIcon name="rocket" className="mr-2 inline-block" /> Daftar Sekarang
                            </Button>
                        </Link>
                        <Link href={`${referal_code}/paket-trading`}>
                            <Button variant="outline" size="lg" className="border-blue-200 text-white hover:bg-blue-500">
                                <MuiIcon name="chart" className="mr-2 inline-block" /> Lihat Pakej
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Promotional Content */}
                <Card title="Persembahan Platform" className="w-full" icon={<MuiIcon name="movie" />}>
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

                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: 0,
                                paddingTop: '56.2500%',
                                paddingBottom: 0,
                                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                                marginTop: '1.6em',
                                marginBottom: '0.9em',
                                overflow: 'hidden',
                                borderRadius: 8,
                                willChange: 'transform'
                            }}
                        >
                            <iframe
                                loading="lazy"
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    border: 'none',
                                    padding: 0,
                                    margin: 0
                                }}
                                src="https://www.canva.com/design/DAG-1Df0wMg/-LjRPvVuvkU1QDF_BGUqng/view?embed"
                                allowFullScreen="allowfullscreen"
                                allow="fullscreen"
                            />
                        </div>
                        <a
                            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAG-1Df0wMg&#x2F;-LjRPvVuvkU1QDF_BGUqng&#x2F;view?utm_content=DAG-1Df0wMg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
                            target="_blank"
                            rel="noopener"
                        >
                            Salinan dari Red and Black Geometric Investment Presentation
                        </a>{' '}
                        oleh Guntur Madjid
                    </div>
                </Card>

                {/* Video Section */}
                {/* <Card title="Video Testimoni" subtitle="Dengarkan kisah sukses para investor kami" icon={<MuiIcon name="movie" />}>
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-black">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="/image/684564549b55b62b5a5358f2.mp4"
                    />
                </div>
            </Card> */}

                {/* Market Ticker */}
                <Card title="Ticker Pasar Realtime" icon={<MuiIcon name="chart" />}>
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

                    <div className="space-y-16">
                        {/* ================= HERO ================= */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.7 }}
                            className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-[0_30px_90px_rgba(0,0,0,0.06)]"
                        >
                            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
                            <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

                            <h1 className="font-oswald text-base leading-tight font-bold text-blue-800 md:text-2xl md:text-5xl">
                                PERNIAGAAN DENGAN KEUNTUNGAN BERJENJANG
                                <br />
                                DAN BERANI TAMPIL BEZA
                            </h1>

                            <div className="mt-6 max-w-4xl space-y-4 font-domine text-sm leading-relaxed text-blue-700 md:text-xl">
                                <p>
                                    Luno Malaysia Sdn Bhd menyediakan platform pertukaran aset digital yang selamat, mudah digunakan dan dipercayai
                                    untuk membeli, menjual serta menyimpan mata wang kripto. Sebagai Bursa Aset Digital (DAX) yang dikawal selia oleh
                                    Suruhanjaya Sekuriti Malaysia, Luno komited untuk menyediakan pengalaman pelaburan aset digital yang telus dan
                                    berintegriti.
                                </p>
                                <p>
                                    Luno Malaysia beroperasi sepenuhnya secara digital dengan sokongan pelanggan melalui saluran dalam talian. Dengan
                                    penekanan terhadap keselamatan berbilang lapisan, pematuhan peraturan dan pendidikan pengguna, Luno berhasrat
                                    untuk memperkasa rakyat Malaysia dalam memahami serta mengakses ekosistem kewangan digital secara
                                    bertanggungjawab.
                                </p>
                            </div>
                        </motion.div>

                        {/* ================= KEUNTUNGAN ================= */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: 'Keuntungan Bertahap',
                                    desc: 'Pengeluaran keuntungan dilakukan secara bertahap setiap 2 jam.',
                                    icon: 'timer'
                                },
                                {
                                    title: 'Modal Selamat',
                                    desc: 'Modal refund bersama keuntungan pada akhir perjanjian sewa',
                                    icon: 'wallet'
                                },
                                {
                                    title: 'Pengeluaran Tepat Masa',
                                    desc: 'Proses pengeluaran cepat sesuai waktu yang telah ditentukan.',
                                    icon: 'bolt'
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    whileHover={{ y: -8 }}
                                    className="relative rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.2)]"
                                >
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                                        <MuiIcon name={item.icon} fontSize="large" />
                                    </div>
                                    <h3 className="font-oswald text-lg font-bold text-blue-900 md:text-2xl">{item.title}</h3>
                                    <p className="mt-2 font-domine text-xs text-blue-950 md:text-lg">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* ================= SKEMA ================= */}
                        <Card
                            title="Skema Pengeluaran"
                            subtitle="Sistem Pengeluaran keuntungan setiap pakej perdagangan"
                            className="rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.3)]"
                        >
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {[
                                    { paket: 'PAKET A', profit: '15%' },
                                    { paket: 'PAKET B', profit: '20%' },
                                    { paket: 'PAKET C', profit: '25%' }
                                ].map((p, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        whileHover={{ y: -10 }}
                                        className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                                    >
                                        <div className="h-2 bg-gradient-to-r from-blue-600 to-orange-500" />

                                        <div className="p-6">
                                            <h3 className="event:text-blue-900 font-oswald text-xl font-bold odd:text-orange-500 md:text-2xl">
                                                {p.paket}
                                            </h3>

                                            <div className="mt-4 space-y-3 font-domine text-base text-blue-700 md:text-xl">
                                                <div className="flex items-center gap-2">
                                                    <MuiIcon fontSize="large" name="trending" className="text-lg text-orange-500 md:text-2xl" />
                                                    Keuntungan {p.profit} tiap 2 jam
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MuiIcon fontSize="large" name="repeat" className="text-lg text-orange-600 md:text-2xl" />
                                                    Maksimum 3 kali Pengeluaran
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MuiIcon fontSize="large" name="wallet" className="text-lg text-orange-700 md:text-2xl" />
                                                    Modal & keuntungan cair di akhir perjanjian sewa
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>

                        {/* ================= CTA ================= */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-3xl bg-blue-50 p-8 text-blue-800 shadow-[0_35px_100px_rgba(0,0,0,0.06)]"
                        >
                            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-400/30 blur-3xl" />

                            <p className="max-w-3xl font-domine text-base leading-relaxed md:text-xl">
                                <strong>Sertai Segera</strong> bersama Luno Malaysia Perdagangan Forex penghasil wang. Anda hanya melakukan deposit
                                dan menunggu per 2 jam pendapatan masuk secara instan ke akaun Anda tanpa melakukan aktiviti apa pun.
                            </p>

                            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-3">
                                    <MuiIcon name="shield" className="text-lg text-orange-400 md:text-2xl" />
                                    <div>
                                        <p className="font-semibold">Berdaftar dan diawasi oleh</p>
                                        <p className="text-lg font-bold">Suruhanjaya Sekuriti Malaysia</p>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-blue-900 px-6 py-3 text-center font-oswald text-xs font-bold text-orange-500 shadow-lg md:text-base">
                                    SEMAKIN BESAR MODAL ANDA
                                    <br />
                                    SEMAKIN BESAR KEUNTUNGAN ANDA TERIMA
                                </div>
                            </div>
                        </motion.div>
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
                </Card>

                {/* Why Choose Us */}
                <div>
                    <h2 className="mb-8 text-center font-oswald text-lg font-bold text-white md:text-2xl"> Mengapa Memilih Kami?</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: 'trophy',
                                title: 'Dipercayai',
                                desc: 'Berdaftar dan diawasi oleh lembaga kewangan rasmi Malaysia'
                            },
                            {
                                icon: 'money',
                                title: 'Keuntungan Tinggi',
                                desc: 'Pulangan pelaburan yang kompetitif dan telus'
                            },
                            {
                                icon: 'security',
                                title: 'Selamat',
                                desc: 'Sistem keselamatan berlapis dengan penyulitan tahap bank'
                            },
                            {
                                icon: 'bolt',
                                title: 'Cepat',
                                desc: 'Proses deposit dan pengeluaran dalam hitungan minit'
                            },
                            {
                                icon: 'phone',
                                title: 'Sokongan Profesional',
                                desc: 'Pasukan perkhidmatan pelanggan sedia membantu 24 jam'
                            },
                            {
                                icon: 'trending',
                                title: 'Telus',
                                desc: 'Laporan lengkap dan masa nyata untuk setiap transaksi anda'
                            }
                        ].map((item, index) => (
                            <Card key={index} className="bg-white">
                                <div className="text-center text-blue-800">
                                    <div className="mb-3 text-lg md:text-2xl">
                                        <MuiIcon name={item.icon} />
                                    </div>
                                    <h3 className="mb-2 font-oswald text-lg font-bold md:text-2xl">{item.title}</h3>
                                    <p className="font-domine text-lg text-blue-600">{item.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="rounded-xl bg-orange-100 p-8 text-center text-blue-800">
                    <h2 className="mb-3 font-oswald text-base font-bold md:text-xl">Bersedia Memulakan Pelaburan Anda?</h2>
                    <p className="mb-6 font-domine text-xs md:text-base">
                        Sertailah bersama ribuan pelabur berjaya dan raih keuntungan konsisten bersama kami
                    </p>
                    <Link href={`${referal_code}/pendaftaran-member`}>
                        <Button variant="secondary" size="lg" className="bg-white hover:bg-blue-500">
                            💎 Daftar Sekarang - Percuma
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

Home.layout = (page) => <Layout>{page}</Layout>;
