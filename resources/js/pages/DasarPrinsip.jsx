import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Layout from '../Layout';

export default function DasarPrinsip() {
    const principles = [
        {
            title: 'Kepercayaan dan Keselamatan',
            description:
                'Kami mengutamakan kepercayaan pengguna dengan memastikan tahap keselamatan yang tinggi melalui perlindungan berlapis, amalan terbaik industri dan pematuhan kepada piawaian keselamatan antarabangsa. Keselamatan aset dan data pelanggan adalah keutamaan kami.'
        },
        {
            title: 'Pematuhan dan Tadbir Urus',
            description:
                'Kami beroperasi selaras dengan undang-undang dan peraturan yang ditetapkan oleh pihak berkuasa berkaitan. Pematuhan terhadap rangka kerja kawal selia serta amalan tadbir urus yang baik menjadi asas kepada operasi dan perkhidmatan kami.'
        },
        {
            title: 'Ketelusan dan Integriti',
            description:
                'Kami percaya kepada ketelusan dalam setiap aspek perkhidmatan. Maklumat disampaikan secara jelas, tepat dan bertanggungjawab bagi membina hubungan jangka panjang yang berasaskan integriti dan saling percaya.'
        },
        {
            title: 'Fokus kepada Pelanggan',
            description:
                'Kami komited untuk menyediakan pengalaman pengguna yang mudah, selamat dan boleh dipercayai. Keperluan pelanggan menjadi panduan utama dalam pembangunan produk, perkhidmatan dan sokongan digital kami.'
        },
        {
            title: 'Inovasi Berterusan',
            description:
                'Kami sentiasa berusaha untuk berinovasi dan menambah baik teknologi serta perkhidmatan bagi memenuhi keperluan landskap kewangan digital yang sentiasa berkembang.'
        },
        {
            title: 'Akses Kewangan Global',
            description:
                'Kami percaya bahawa setiap individu berhak mendapat akses kepada sistem kewangan yang moden dan inklusif. Melalui teknologi aset digital, kami berusaha membuka peluang kewangan kepada masyarakat global.'
        },
        {
            title: 'Tanggungjawab Sosial',
            description:
                'Kami menjalankan operasi secara bertanggungjawab dengan mengambil kira kesan sosial dan ekonomi. Pendidikan, kesedaran dan penggunaan aset digital secara beretika merupakan sebahagian daripada komitmen kami kepada masyarakat.'
        },
        {
            title: 'Kepelbagaian dan Kerjasama',
            description:
                'Kami menghargai kepelbagaian latar belakang, budaya dan pandangan. Kerjasama yang kukuh dalam pasukan antarabangsa kami membolehkan kami mencapai matlamat bersama dengan lebih berkesan.'
        },
        {
            title: 'Kecemerlangan Profesional',
            description:
                'Kami mengekalkan standard profesionalisme yang tinggi melalui pembelajaran berterusan, peningkatan kemahiran dan usaha tanpa henti untuk mencapai kecemerlangan dalam setiap aspek perkhidmatan.'
        }
    ];

    return (
        <>
            <Head>
                <title>Dasar Prinsip Luno Malaysia - Prinsip dan Nilai Kami</title>
                <meta
                    name="description"
                    content="Ketahui dasar prinsip Luno Malaysia yang menekankan kepercayaan, keselamatan, pematuhan, dan inovasi dalam perkhidmatan mata wang kripto."
                />
                <meta name="keywords" content="Luno Malaysia, dasar prinsip, kepercayaan, keselamatan, pematuhan, inovasi, mata wang kripto" />
                <meta name="robots" content="index,follow" />
            </Head>

            <div className="bg-gradient-to-b from-white to-slate-50 py-12">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-blue-700">Dasar Prinsip Luno</h1>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600">
                            Prinsip-prinsip ini membentuk asas kepada setiap keputusan dan tindakan kami, memastikan kami sentiasa komited kepada
                            kecemerlangan, integriti, dan inovasi dalam dunia mata wang kripto.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-center">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <span className="text-sm font-bold text-blue-700">{index + 1}</span>
                                    </div>
                                    <h3 className="ml-3 text-xl font-semibold text-slate-800">{principle.title}</h3>
                                </div>
                                <p className="leading-relaxed text-slate-600">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

DasarPrinsip.layout = (page) => <Layout children={page} />;
