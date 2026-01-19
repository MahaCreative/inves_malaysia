import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Layout from '../Layout';
import Card from '../components/Card';
import MuiIcon from '../components/MuiIcon';

export default function PaketTrading() {
    const packages = [
        { name: 'Pakej Standard', icon: 'chart', color: 'bg-blue-600' },
        { name: 'Pakej Premium', icon: 'star', color: 'bg-blue-500' },
        { name: 'Pakej Eksklusif', icon: 'trophy', color: 'bg-blue-500' }
    ];

    const paketList = [
        {
            kode: 'A',
            title: 'PAKEJ A',
            subtitle: 'Tahap Permulaan Perdagangan',
            gradient: 'bg-blue-700',
            modal: 'RM500.000 – RM5.000.000',
            profitPer2Jam: '15%',
            totalProfit: '45%',
            contohModal: 'RM500.000',
            contohProfit: 'RM75.000',
            totalKeuntungan: 'RM225.000',
            akhirKontrak: 'RM575.000',
            rincian: ['Pengeluaran keuntungan pertama 15%', 'Pengeluaran keuntungan kedua 15%', 'Pengeluaran keuntungan ketiga 15% + Modal Anda'],
            paragraf: (
                <>
                    Contoh jika modal perdagangan <strong>PAKEJ A</strong> RM500.000, proses pengeluaran keuntungannya iaitu 2 jam kemudian
                    mendapatkan keuntungan 15% (RM75.000) dan 2 jam berikutnya mendapatkan lagi keuntungan 15% (RM75.000) dan 2 jam lagi berikutnya
                    kontrak anda berakhir dan di akhir kontrak modal dan keuntungan yang ketiga dikeluarkan bersamaan iaitu RM575.000. Jadi jumlah
                    keuntungan selama 6 jam atau selama masa kontrak dengan modal RM500.000 adalah RM225.000.
                </>
            )
        },
        {
            kode: 'B',
            title: 'PAKEJ B',
            subtitle: 'Profesional Perdagangan',
            gradient: 'bg-blue-600',
            modal: 'RM5.000.000 – RM50.000.000',
            profitPer2Jam: '20%',
            totalProfit: '60%',
            contohModal: 'RM5.000.000',
            contohProfit: 'RM1.000.000',
            totalKeuntungan: 'RM3.000.000',
            akhirKontrak: 'RM6.000.000',
            rincian: ['Pengeluaran keuntungan pertama 20%', 'Pengeluaran keuntungan kedua 20%', 'Pengeluaran keuntungan ketiga 20% + Modal Anda'],
            paragraf: (
                <>
                    Contoh jika modal perdagangan <strong>PAKEJ B</strong> RM5.000.000, proses pengeluaran keuntungannya iaitu 2 jam kemudian
                    mendapatkan keuntungan 20% (RM1.000.000) dan 2 jam berikutnya mendapatkan lagi keuntungan 20% (RM1.000.000) dan 2 jam lagi
                    berikutnya kontrak anda berakhir dan di akhir kontrak modal dan keuntungan yang ketiga dikeluarkan bersamaan iaitu RM6.000.000.
                    Jadi jumlah keuntungan selama 6 jam atau selama masa kontrak dengan modal RM5.000.000 adalah RM3.000.000.
                </>
            )
        },
        {
            kode: 'C',
            title: 'PAKEJ C',
            subtitle: 'Premium Perdagangan',
            gradient: 'bg-blue-600',
            modal: 'RM50.000.000 – RM500.000.000',
            profitPer2Jam: '25%',
            totalProfit: '75%',
            contohModal: 'RM50.000.000',
            contohProfit: 'RM12.500.000',
            totalKeuntungan: 'RM37.500.000',
            akhirKontrak: 'RM87.500.000',
            rincian: ['Pengeluaran keuntungan pertama 25%', 'Pengeluaran keuntungan kedua 25%', 'Pengeluaran keuntungan ketiga 25% + Modal Anda'],
            paragraf: (
                <>
                    Contoh jika modal perdagangan <strong>PAKEJ C</strong> RM50.000.000, proses pengeluaran keuntungannya iaitu 2 jam kemudian
                    mendapatkan keuntungan 25% (RM12.500.000) dan 2 jam berikutnya mendapatkan lagi keuntungan 25% (RM12.500.000) dan 2 jam lagi
                    berikutnya kontrak anda berakhir dan di akhir kontrak modal dan keuntungan yang ketiga dikeluarkan bersamaan iaitu RM87.500.000.
                    Jadi jumlah keuntungan selama 6 jam atau selama masa kontrak dengan modal RM50.000.000 adalah RM37.500.000.
                </>
            )
        },
        {
            kode: 'D',
            title: 'PAKEJ D',
            subtitle: 'Eksklusif Perdagangan',
            gradient: 'bg-blue-700',
            modal: 'RM500.000.000 – Unlimited',
            profitPer2Jam: '30%',
            totalProfit: '90%',
            contohModal: 'RM500.000.000',
            contohProfit: 'RM150.000.000',
            totalKeuntungan: 'RM450.000.000',
            akhirKontrak: 'RM950.000.000',
            rincian: ['Pengeluaran keuntungan pertama 30%', 'Pengeluaran keuntungan kedua 30%', 'Pengeluaran keuntungan ketiga 30% + Modal Anda'],
            paragraf: (
                <>
                    Contoh jika modal perdagangan <strong>PAKEJ D</strong> RM500.000.000, proses pengeluaran keuntungannya iaitu 2 jam kemudian
                    mendapatkan keuntungan 30% (RM150.000.000) dan 2 jam berikutnya mendapatkan lagi keuntungan 30% (RM150.000.000) dan 2 jam lagi
                    berikutnya kontrak anda berakhir dan di akhir kontrak modal dan keuntungan yang ketiga dikeluarkan bersamaan iaitu RM950.000.000.
                    Jadi jumlah keuntungan selama 6 jam atau selama masa kontrak dengan modal RM500.000.000 adalah RM450.000.000.
                </>
            )
        }
    ];
    const [openParagraf, setOpenParagraf] = useState(null);

    return (
        <>
            <Head>
                <title>Pakej Perdagangan - Luno Malaysia</title>
                <meta
                    name="description"
                    content="Lihat pilihan pakej perdagangan kami: Pakej A, B, C, D dengan simulasi keuntungan dan butiran pengeluaran."
                />
                <meta name="keywords" content="pakej perdagangan, pelaburan, luno malaysia, keuntungan, pakej pelaburan" />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content="Pakej Perdagangan - Luno Malaysia" />
                <meta
                    property="og:description"
                    content="Pilih pakej perdagangan yang sesuai: Pakej A, B, C, D. Simulasi keuntungan dan butiran pengeluaran."
                />
                <meta property="og:image" content="/image/LOGO PNG.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pakej Perdagangan - Luno Malaysia" />
                <meta
                    name="twitter:description"
                    content="Pilih pakej perdagangan yang sesuai: Pakej A, B, C, D. Simulasi keuntungan dan butiran pengeluaran."
                />
                <meta name="twitter:image" content="/image/LOGO PNG.png" />
            </Head>

            <div className="space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="mb-3 text-lg font-bold text-white md:text-2xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                        <MuiIcon name="trending" className="mr-3 inline-block align-middle" /> PAKEJ PERDAGANGAN
                    </h1>
                    <p className="text-sm text-gray-200 md:text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        Pilih pakej perdagangan yang sesuai dengan profil dan keperluan pelaburan anda
                    </p>
                </div>
                {/* Packages Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <Card key={index} className={`bg-gradient-to-br ${pkg.color}`}>
                            <div className="space-y-4 text-blue-900">
                                <div className="text-2xl text-blue-500 md:text-5xl">
                                    <MuiIcon name={pkg.icon} fontSize="inherit" />
                                </div>
                                <h2 className="font-oswald text-sm font-bold md:text-xl">{pkg.name}</h2>
                                <p className="font-domine text-xs text-blue-950 md:text-base">Pakej perdagangan dengan keuntungan kompetitif</p>
                            </div>
                        </Card>
                    ))}
                </div>
                {/* Main Chart */}
                <Card title="Carta Analisis Pasaran" subtitle="Carta perdagangan masa nyata untuk instrumen AAPL" icon={<MuiIcon name="chart" />}>
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

                    <div className="overflow-hidden rounded-lg bg-gray-50">
                        <iframe
                            title="advanced chart TradingView widget"
                            lang="en"
                            id="tradingview_d5fde"
                            frameBorder={0}
                            allowTransparency="true"
                            scrolling="no"
                            allowFullScreen="true"
                            src="https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=id#%7B%22symbol%22%3A%22AAPL%22%2C%22frameElementId%22%3A%22tradingview_d5fde%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22ROC%40tv-basicstudies%5Cu001fStochasticRSI%40tv-basicstudies%5Cu001fMASimple%40tv-basicstudies%22%2C%22theme%22%3A%22Light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22exchange%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.dhervainvestindo.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22AAPL%22%2C%22page-uri%22%3A%22www.dhervainvestindo.com%2Fp%2Fpaket-investasi_21.html%22%7D"
                            style={{
                                width: '100%',
                                height: '500px',
                                margin: '0px',
                                padding: '0px'
                            }}
                        />
                    </div>
                </Card>
                {/* Features */}
                <Card title="✨ Ciri-ciri Utama">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                            { icon: 'security', title: 'Keselamatan Dijamin', desc: 'Data dan dana anda dilindungi dengan penyulitan tahap bank' },
                            { icon: 'phone', title: 'Sokongan 24/7', desc: 'Pasukan khidmat pelanggan sedia membantu anda pada bila-bila masa' },
                            { icon: 'bolt', title: 'Proses Cepat', desc: 'Deposit dan pengeluaran dalam hitungan minit' },
                            { icon: 'trending', title: 'Keuntungan Optimum', desc: 'Strategi perdagangan yang terbukti menguntungkan' }
                        ].map((feature, index) => (
                            <div key={index} className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 text-lg text-blue-500 md:text-2xl">
                                        <MuiIcon name={feature.icon} fontSize="inherit" />
                                    </div>
                                    <div>
                                        <h3 className="font-oswald text-sm font-semibold text-blue-900 md:text-base">{feature.title}</h3>
                                        <p className="font-domine text-xs text-blue-950 md:text-base">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
                {/* Proses Transaksi Pakej */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {paketList.map((paket, i) => {
                        const isOpen = openParagraf === paket.kode;

                        return (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Gradient Header */}
                                <div className={`bg-gradient-to-r ${paket.gradient} p-6 text-white`}>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xs font-bold md:text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {paket.title}
                                        </h2>
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {paket.subtitle}
                                        </span>

                                        <div className="mt-4">
                                            <p className="text-xs opacity-80">Total Profit</p>
                                            <p className="text-lg font-bold md:text-lg">{paket.totalProfit}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="space-y-5 p-6">
                                    {/* Info Ringkas */}
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div className="rounded-lg bg-blue-50 p-3 text-center">
                                            <p className="text-blue-700">Modal</p>
                                            <p className="font-semibold">{paket.modal}</p>
                                        </div>
                                        <div className="rounded-lg bg-blue-100 p-3 text-center">
                                            <p className="text-blue-600">Profit / 2 Jam</p>
                                            <p className="text-lg font-semibold md:text-lg">{paket.profitPer2Jam}</p>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 md:text-sm">
                                        <span>⏱ 2 Jam</span>
                                        <span>⏱ 2 Jam</span>
                                        <span>🏁 Akhir</span>
                                    </div>

                                    {/* Rincian */}
                                    <ul className="space-y-2 text-xs text-gray-700">
                                        {paket.rincian.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-blue-950">
                                                <MuiIcon name="check_circle" className="text-blue-950" fontSize="large" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* 🔽 TOGGLE BUTTON */}
                                    <button
                                        onClick={() => setOpenParagraf(isOpen ? null : paket.kode)}
                                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                                    >
                                        <MuiIcon name={isOpen ? 'expand_less' : 'expand_more'} fontSize="large" />
                                        {isOpen ? 'Sembunyikan Simulasi' : 'Lihat Simulasi Perhitungan'}
                                    </button>

                                    {/* 🔍 PARAGRAPH (SHOW / HIDE) */}
                                    <div
                                        className={`overflow-hidden rounded-xl bg-blue-50 text-xs leading-relaxed text-gray-700 transition-all duration-300 ${
                                            isOpen ? 'max-h-[500px] p-4 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        {paket.paragraf}
                                    </div>
                                </div>
                                {/* Hover Glow */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Card className="w-full">
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
                </Card>
            </div>
        </>
    );
}

PaketTrading.layout = (page) => <Layout>{page}</Layout>;
