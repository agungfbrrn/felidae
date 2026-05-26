/**
 * Academic Publications Registry
 * 
 * This data file stores the collection of published research papers.
 * The schema has been designed to be fully modular. To update the website
 * with your own research, simply replace the objects in this array.
 * 
 * Schema:
 * - id: Unique identifier
 * - title: Full title of the paper
 * - authors: Comprehensive list of authors (bolding the main researcher is handled in UI)
 * - journal: Name of the publishing Journal or Conference
 * - date: Month and Year of publication
 * - abstract: Full length abstract text
 * - keywords: Array of keywords or topic tags
 * - coverImageUrl: URL to the paper's graphic representation/cover
 * - journalUrl: External URL redirecting to the official publisher (e.g. IEEE, Nature, etc.)
 */

export const publications = [
  {
    id: "pub-1",
    title: "PENERAPAN MODEL PROPHET UNTUK PERAMALAN JUMLAH DOKTER UMUM DI KOTA BANDUNG",
    authors: "Sigit Pangestu, Agung Febrian, Yayan Cahyan",
    journal: "Jurnal Mahasiswa Teknik Informatika",
    date: "January 2026",
    abstract: "Peramalan (forecasting) merupakan teknik analisis data yang digunakan untuk memprediksi kondisi masa depan berdasarkan pola historis. Dalam konteks kesehatan, kemampuan memprediksi jumlah tenaga medis menjadi penting untuk mendukung perencanaan sumber daya manusia. Penelitian ini bertujuan untuk menerapkan model Prophet dalam melakukan peramalan jumlah dokter umum di Kota Bandung menggunakan data dari portal Open Data Bandung tahun 2015–2022. Proses penelitian meliputi tahapan pengumpulan data, pra-pemrosesan, pelatihan model, evaluasi, dan prediksi. Data difilter untuk kategori “DOKTER UMUM” dan diagregasi berdasarkan tahun. Model Prophet dilatih menggunakan dataset tersebut dan dievaluasi menggunakan metrik Mean Absolute Error (MAE). Hasil evaluasi menunjukkan nilai MAE sebesar 421,15, yang menandakan bahwa model memiliki tingkat kesalahan prediksi yang relatif rendah. Berdasarkan hasil peramalan, jumlah dokter umum di Kota Bandung pada tahun 2025 diperkirakan mencapai 3.322 orang, dengan interval kepercayaan antara 2.690 hingga 3.958 orang. Grafik hasil prediksi memperlihatkan tren peningkatan jumlah dokter umum yang stabil dari tahun ke tahun. Temuan ini diharapkan dapat menjadi bahan pertimbangan dalam perencanaan dan pengambilan keputusan terkait distribusi tenaga medis di wilayah Kota Bandung.",
    keywords: ["Prophet", "peramalan", "tenaga kesehatan", "time series", "MAE"],
    coverImageUrl: "/JATI.png",
    journalUrl: "https://www.ejournal.itn.ac.id/jati/article/view/16619"
  },
  {
    id: "pub-2",
    title: "Public Sentiment Toward RupiahRedenomination on Social Media X",
    authors: "Agung Febrian, Dody Herdiana, M. Agreindra Helmiawan",
    journal: "Journal of Intelligent Systems and Machine Learning",
    date: "May 2026",
    abstract: "This study examines public sentiment toward the proposed Indonesian Rupiah redenomination policy using data collected from Social Media X. The research applies a structured computational sentiment analysis pipeline, beginning with automatic sentiment labeling using a transformer-based language model, followed by classification using a Support Vector Machine with Term Frequency–Inverse Document Frequency feature representation. The dataset was collected over a one-day period from 7 November 2025 to 8 November 2025 to capture immediate public reactions to the policy discourse. Experimental results show that the classification model achieved an accuracy of 0.68 with balanced classification performance. Rather than aiming to optimize predictive accuracy, this study focuses on identifying general sentiment tendencies and patterns of public opinion regarding currency redenomination. The findings indicate that negative sentiment dominates the discourse, reflecting public concern and hesitation toward the policy, while a substantial proportion of neutral sentiment suggests ongoing evaluation and uncertainty among users. These results highlight the complexity of public responses to monetary policy communication and demonstrate the potential of social media analysis to provide an indicative overview of public sentiment in the digital public sphere. The study also acknowledges limitations related to automatic labeling and the inherent ambiguity of social media language, emphasizing that the findings should be interpreted as exploratory insights rather than definitive conclusions.",
    keywords: ["Rupiah redenomination", "sentiment analysis", "Social Media X", "IndoBERT", "Support Vector Machine"],
    coverImageUrl: "/JASMINE.png",
    journalUrl: "https://journals.telkomuniversity.ac.id/jasmine/article/view/10121"
  },
];

export const scholarProfile = {
  name: "Agung Febrian",
  title: "IF22",
  affiliation: "Sebelas April University, Indonesia",
  bio: "Informatics student passionate about UI/UX design and machine learning, focusing on creating user-centered digital solutions.",
  avatarUrl: "/pfp2.png",
  scholarUrl: "https://scholar.google.com/citations?hl=en&user=OYZ1z9oAAAAJ",
  researchGateUrl: "https://www.researchgate.net/profile/Agung-Febrian-3?ev=hdr_xprf",

};
