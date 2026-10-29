/**
 * EPORTFOLIO 1 PPL MANDIRI - FADILATUL FAJRI
 * Data Store: Dokumen Analisis Artefak, Profil Mahasiswa, Refleksi, LPTK & Sekolah PPL, Kontak
 */

const root = typeof window !== 'undefined' ? window : global;
root.PORTFOLIO_DATA = {
  profile: {
    name: "Fadilatul Fajri, S.Pd.",
    status: "Mahasiswa Pendidikan Profesi Guru (PPG) Calon Guru Gelombang 1 Tahun 2026",
    major: "Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
    institution: "Universitas Muhammadiyah Purwokerto",
    school: "SMP Negeri 5 Purwokerto (Kelas VIII D)",
    academicYear: "Tahun Ajaran 2024/2025 — PPL Mandiri 1",
    verifiedStatus: "Terverifikasi DPL & Guru Pamong",
    gradeScore: "Predikat: Sangat Baik (A)",
    
    // Sapaan dan Kata Pengantar resmi
    kataPengantar: `Pendidikan bukan sekadar proses transfer ilmu, tetapi perjalanan membentuk karakter, menanamkan nilai, dan menumbuhkan harapan bagi generasi masa depan. E-portofolio ini menjadi ruang refleksi, dokumentasi, dan perjalanan pengembangan diri sebagai calon guru profesional yang terus belajar dan bertumbuh.`,

    // Inspirasi dan Tujuan resmi
    inspirasiTujuan: `Ketertarikan menjadi guru tumbuh sejak kecil melalui pengalaman menjadi guru ngaji di lingkungan sekitar. Minat tersebut semakin berkembang karena terinspirasi oleh sosok guru PJOK saat SMA yang memberikan motivasi, teladan, dan semangat dalam pembelajaran. Saya memiliki tujuan untuk menjadi guru yang profesional, berkarakter, dan mampu menginspirasi murid agar terus berkembang menjadi pribadi yang lebih baik. Selain itu, saya ingin menciptakan pembelajaran yang tidak hanya berfokus pada pengetahuan, tetapi juga pada pembentukan karakter, kreativitas, dan nilai nasionalisme.`,

    // Pandangan Tentang Pendidikan resmi
    pandanganPendidikan: `Bagi saya, pendidikan merupakan proses belajar sepanjang hayat untuk mencapai tujuan dan menjadi pribadi yang lebih baik. Pendidikan tidak hanya berfokus pada penyampaian materi, tetapi juga membentuk karakter, menanamkan nilai nasionalisme, serta mengembangkan kreativitas dan kolaborasi murid.`,

    metrics: [
      { label: "Total Artefak", value: "Bagian 1–3 Aktif", desc: "Modul Ajar, Media Ajar, & Bahan Ajar" },
      { label: "Jenjang / Rombel", value: "Kelas VIII-D", desc: "Fase D SMP Negeri 5 Purwokerto" },
      { label: "Kurikulum", value: "Merdeka", desc: "Berbasis Diferensiasi & Profil Pelajar" },
      { label: "Program PPG", value: "Gel. 1 2026", desc: "Universitas Muhammadiyah Purwokerto" }
    ]
  },

  // ARTEFAK AKTIF (BAGIAN 1–3) DENGAN BERKAS ASLI & ANALISIS LENGKAP
  artifacts: [
    {
      id: "ART-01",
      code: "ART-01/MA",
      number: "1",
      sectionTitle: "Bagian 1: Modul Ajar",
      title: "Modul Ajar",
      subtitle: "Perancangan Modul Ajar Berdiferensiasi Materi Tata Tertib & Norma Hukum",
      category: "Perencanaan",
      date: "Pertemuan 1 & 2 • Kelas VIII D",
      badge: "Kurikulum Merdeka • UbD & PBL",
      status: "Terverifikasi",
      summary: "Modul ajar dirancang menggunakan model Problem Based Learning (PBL) dengan prinsip Understanding by Design (UbD) dan diferensiasi konten, proses, serta produk sesuai kesiapan belajar murid Kelas VIII D SMPN 5 Purwokerto.",
      realFile: "MODUL%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf",
      fileName: "MODUL AJAR P1 PPLM FADILATUL FAJRI.pdf",
      fileSize: "1.6 MB",
      analysis: {
        konteks: "Diterapkan di ruang Kelas VIII D SMP Negeri 5 Purwokerto yang memiliki karakteristik murid majemuk dengan dominasi gaya belajar audio-visual dan kinestetik. Materi yang diangkat adalah 'Kedudukan Norma dan Aturan dalam Masyarakat' dalam ruang lingkup Kurikulum Merdeka Fase D.",
        tujuan: "Memfasilitasi murid agar mampu mengidentifikasi ragam norma, menganalisis sanksi pelanggaran norma di lingkungan pergaulan remaja, serta merumuskan komitmen kesadaran hukum secara kolaboratif.",
        kelebihan: "Struktur sintaks PBL tertata runtut dengan alur tujuan pembelajaran (ATP) yang jelas; menyajikan diferensiasi bahan bacaan berjenjang dan LKPD berbasis studi kasus kontekstual kehidupan remaja sekolah.",
        kekurangan: "Alokasi waktu pada sintaks presentasi kelompok sempat meleset 10 menit karena antusiasme murid dalam berargumen, sehingga bagian umpan balik penutup berlangsung cukup cepat.",
        kajianTeori: "Mengacu pada prinsip Understanding by Design (Wiggins & McTighe, 2005) pada mata kuliah Prinsip Pengajaran dan Asesmen (PPA), di mana modul dirancang secara backward design (menentukan tujuan dan bukti asesmen terlebih dahulu sebelum merancang kegiatan). Diperkuat filosofi Ki Hadjar Dewantara tentang pembelajaran yang berpihak pada murid dan mengakomodasi kodrat zaman peserta didik."
      },
      evidenceArtifacts: [
        { 
          name: "MODUL AJAR P1 PPLM FADILATUL FAJRI.pdf", 
          file: "MODUL%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf",
          type: "Dokumen Resmi PDF (Perangkat Ajar Utama)", 
          size: "1.6 MB" 
        }
      ]
    },
    {
      id: "ART-02",
      code: "ART-02/MD",
      number: "2",
      sectionTitle: "Bagian 2: Media Ajar",
      title: "Media Ajar",
      subtitle: "Media Interaktif Slide Canva, Video Dilema Moral, & Kartu Peran Konkret",
      category: "Media & TPACK",
      date: "Pertemuan 2 & 3 • Kelas VIII D",
      badge: "Inovasi TPACK Framework",
      status: "Terverifikasi",
      summary: "Pengembangan dual-channel media yang memadukan tayangan slide interaktif Canva, video studi kasus dilema etika remaja, dan kartu peran fisik (role-play cards) untuk mewujudkan zero-exclusion belajar.",
      realFile: null,
      fileName: "Perangkat Media Interaktif & Kartu Peran",
      fileSize: "Multi-Komponen",
      analysis: {
        konteks: "Ruang kelas VIII D dilengkapi proyektor LCD namun konektivitas internet murid dibatasi untuk menjaga fokus belajar. Media dirancang fleksibel dapat dijalankan secara luring (offline presentation) didukung kartu fisik.",
        tujuan: "Meningkatkan atensi dan daya imajinasi kritis murid dalam membedah kasus dilema norma hukum dan kesusilaan melalui visualisasi skenario konkret yang relevan dengan usia mereka.",
        kelebihan: "Visualisasi kasus dalam bentuk komik strip dan video pendek berdurasi 3 menit sangat menarik perhatian murid; kartu peran fisik berhasil mengaktifkan murid yang biasanya pasif di baris meja belakang.",
        kekurangan: "Ukuran font pada beberapa slide infografis kasus terlalu padat saat diproyeksikan di ruang kelas dengan pencahayaan siang hari yang terang dari jendela samping.",
        kajianTeori: "Berpijak pada kerangka kerja TPACK (Mishra & Koehler, 2006) dari mata kuliah Pembelajaran Berbasis Teknologi Informasi dan Komunikasi. Media memadukan Technological Knowledge (slide interaktif) dengan Pedagogical Content Knowledge (pembelajaran dilema moral Kohlberg) untuk menumbuhkan penalaran moral tingkat tinggi peserta didik."
      },
      evidenceArtifacts: [
        { 
          name: "Slide_Presentasi_Interaktif_Canva_Norma.pdf", 
          file: "#",
          type: "Slide Presentasi Interaktif", 
          size: "Arsip Media" 
        },
        { 
          name: "Kartu_Peran_Simulasi_Sidang_Kelas.pdf", 
          file: "#",
          type: "Kartu Fisik Peran Konkret", 
          size: "Arsip Fisik" 
        }
      ]
    },
    {
      id: "ART-03",
      code: "ART-03/BA",
      number: "3",
      sectionTitle: "Bagian 3: Bahan Ajar",
      title: "Bahan Ajar",
      subtitle: "Bahan Bacaan Kontekstual Berbasis Kearifan Lokal Banyumas (Cablaka)",
      category: "Bahan Ajar",
      date: "Pertemuan 1–4 • Kelas VIII D",
      badge: "Kontekstual CRT & Cablaka",
      status: "Terverifikasi",
      summary: "Bahan bacaan modular bergambar yang memuat materi norma hukum, kesopanan, kesusilaan, dan agama, diintegrasikan dengan kearifan lokal falsafah Cablaka dan budaya musyawarah masyarakat Banyumas.",
      realFile: "BAHAN%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf",
      fileName: "BAHAN AJAR P1 PPLM FADILATUL FAJRI.pdf",
      fileSize: "1.1 MB",
      analysis: {
        konteks: "Murid SMPN 5 Purwokerto tumbuh dalam kultur masyarakat Banyumas yang egaliter dan menjunjung nilai kejujuran lugas ('Cablaka/Blakasuta'). Materi dihubungkan dengan realitas lokal agar terhindar dari kesan abstrak.",
        tujuan: "Memberikan bahan bacaan yang mudah dipahami (ramah bacaan remaja), menghubungkan konsep norma hukum dengan kebiasaan bertutur dan berperilaku santun di lingkungan keluarga dan sekolah Purwokerto.",
        kelebihan: "Bahasa komunikatif dan dialogis, menyertakan glosarium istilah hukum sederhana, serta dilengkapi studi kasus nyata perundungan siber (cyberbullying) yang dekat dengan keseharian siswa.",
        kekurangan: "Perlu penambahan variasi cerita bergambar (storytelling) yang lebih banyak untuk mengakomodasi murid dengan tingkat literasi membaca awal yang membutuhkan teks lebih ringkas.",
        kajianTeori: "Mengimplementasikan pendekatan Culturally Responsive Teaching (Gay, 2000; Ladson-Billings, 1995) dari mata kuliah Pemahaman tentang Peserta Didik dan Pembelajarannya (PPDP). Pendekatan CRT memanfaatkan latar belakang budaya murid sebagai jembatan efektif dalam menginternalisasi nilai-nilai karakter Pancasila."
      },
      evidenceArtifacts: [
        { 
          name: "BAHAN AJAR P1 PPLM FADILATUL FAJRI.pdf", 
          file: "BAHAN%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf",
          type: "Dokumen Resmi PDF (Buku Bacaan Murid)", 
          size: "1.1 MB" 
        }
      ]
    }
  ],

  // ARTEFAK 4–9: STATUS DIKOSONGKAN SEMENTARA SESUAI INSTRUKSI
  pendingArtifacts: [
    {
      id: "ART-04",
      number: "4",
      title: "LKM (Lembar Kerja Murid)",
      fileAvailable: "LKM P1 PPLM FADILATUL FAJRI.pdf",
      status: "Berkas Tersedia di Folder — Analisis Dikosongkan Sementara",
      note: "Berkas PDF LKM (229 KB) telah tersimpan di direktori, deskripsi analisis disiapkan pada tahap berikutnya."
    },
    {
      id: "ART-05",
      number: "5",
      title: "Hasil Kerja Murid",
      fileAvailable: null,
      status: "Dikosongkan Sementara",
      note: "Dokumentasi unjuk kerja dan karya poster kesepakatan norma murid sedang dalam proses penghimpunan."
    },
    {
      id: "ART-06",
      number: "6",
      title: "Video Pelaksanaan Praktik",
      fileAvailable: null,
      status: "Dikosongkan Sementara",
      note: "Tautan rekaman video pelaksanaan mengajar siklus 1 & 2 disiapkan pada tahap berikutnya."
    },
    {
      id: "ART-07",
      number: "7",
      title: "Instrumen Penilaian",
      fileAvailable: null,
      status: "Dikosongkan Sementara",
      note: "Rubrik diagnostik, observasi profil pelajar Pancasila, dan kisi-kisi asesmen HOTS disiapkan pada tahap berikutnya."
    },
    {
      id: "ART-08",
      number: "8",
      title: "Penilaian Guru Pamong",
      fileAvailable: null,
      status: "Dikosongkan Sementara",
      note: "Lembar penilaian resmi dan supervisi klinis Guru Pamong menunggu pengesahan akhir."
    },
    {
      id: "ART-09",
      number: "9",
      title: "Kegiatan Non Mengajar",
      fileAvailable: null,
      status: "Dikosongkan Sementara",
      note: "Dokumentasi piket 5S dan kegiatan sekolah disiapkan pada tahap berikutnya."
    }
  ]
};
