/* =========================================================
   Logic Application eRapor SD Tahfidz Bintang Al-Qur'an
   ========================================================= */

// Database Pengaturan Rapor
let configRapor = {
  tahunAjaran: "2026/2027",
  semester: "Ganjil (1)",
  tanggalCetak: "14 Agustus 2026",
  namaMudir: "Ust. Khoiruddin, S.Si",
  niyMudir: "201501 001",
};

// Database Persentase Input Nilai Default (Untuk Admin Dashboard)
const progressNilaiKelas = {
  1: 100,
  2: 85,
  3: 90,
  4: 75,
  5: 95,
  6: 100,
};

// Database Mata Pelajaran Berdasarkan Tingkat Kelas (1 s.d. 6 SD)
const mapelByKelas = {
  1: [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      value: 90,
      desc: "Sangat baik dalam mengenal rukun iman dan doa harian.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 88,
      desc: "Mampu mengenal simbol-simbol Pancasila dan bersikap santun.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia (Membaca & Menulis)",
      value: 85,
      desc: "Lancar membaca kata sederhana dan mengeja huruf fonik.",
    },
    {
      id: 4,
      name: "Matematika Dasar",
      value: 84,
      desc: "Mengenal angka 1-50 dan penjumlahan sederhana.",
    },
    {
      id: 5,
      name: "Seni Budaya & Prakarya (SBdP)",
      value: 92,
      desc: "Sangat kreatif menggambar pola garis dan mewarnai.",
    },
    {
      id: 6,
      name: "PJOK",
      value: 89,
      desc: "Aktif dan lincah dalam senam kesegaran jasmani.",
    },
    {
      id: 7,
      name: "Bahasa Arab Dasar",
      value: 90,
      desc: "Mengenal kosa kata huruf hijaiyah dan benda di kelas.",
    },
    {
      id: 8,
      name: "Bahasa Inggris Fun & Songs",
      value: 86,
      desc: "Mengenal warna, angka, dan nama hewan dalam bahasa Inggris.",
    },
    {
      id: 9,
      name: "Adab & Kebiasaan Positif",
      value: 94,
      desc: "Selalu merapikan perlengkapan sekolah dan bersikap ramah.",
    },
    {
      id: 10,
      name: "Pengenalan Al-Qur'an",
      value: 91,
      desc: "Mengenal harakat dasar dan melafalkan surah pendek.",
    },
  ],
  2: [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      value: 91,
      desc: "Sangat baik memahami gerakan dan bacaan shalat.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 87,
      desc: "Memahami aturan di rumah dan di sekolah dengan disiplin.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia",
      value: 86,
      desc: "Mampu membaca kalimat panjang dan menuliskan pengalaman.",
    },
    {
      id: 4,
      name: "Matematika",
      value: 83,
      desc: "Memahami pengurangan dan perkalian dasar 1-5.",
    },
    {
      id: 5,
      name: "Seni Budaya & Prakarya",
      value: 90,
      desc: "Terampil membuat karya kerajinan tangan sederhana.",
    },
    {
      id: 6,
      name: "PJOK",
      value: 88,
      desc: "Menguasai teknik permainan bola kecil dan melatih keseimbangan.",
    },
    {
      id: 7,
      name: "Bahasa Arab",
      value: 89,
      desc: "Hafal anggota tubuh dan kosa kata keluarga.",
    },
    {
      id: 8,
      name: "Bahasa Inggris",
      value: 85,
      desc: "Mampu merespons sapaan harian dan menyebutkan benda sekitar.",
    },
    {
      id: 9,
      name: "Bahasa Daerah / Muatan Lokal",
      value: 88,
      desc: "Mengenal lagu dan bahasa daerah dasar.",
    },
    {
      id: 10,
      name: "Kerapian & Kebersihan",
      value: 93,
      desc: "Sangat menjaga kebersihan diri dan ruang kelas.",
    },
  ],
  3: [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      value: 92,
      desc: "Sangat baik memahami syarat sah shalat dan kisah para nabi.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 89,
      desc: "Aktif menceritakan keberagaman suku dan budaya Indonesia.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia",
      value: 87,
      desc: "Mampu membuat paragraf teks narasi dan cerita pendek.",
    },
    {
      id: 4,
      name: "Matematika",
      value: 85,
      desc: "Memahami pecahan sederhana dan pembagian angka dua digit.",
    },
    {
      id: 5,
      name: "IPAS Dasar (IPA & IPS)",
      value: 88,
      desc: "Memahami wujud benda dan kenampakan alam di lingkungan.",
    },
    {
      id: 6,
      name: "Seni Budaya & Prakarya",
      value: 89,
      desc: "Mampu menyanyikan lagu nasional dengan nada tepat.",
    },
    {
      id: 7,
      name: "PJOK",
      value: 87,
      desc: "Menunjukkan sportivitas dalam olahraga kasti dan lari.",
    },
    {
      id: 8,
      name: "Bahasa Arab",
      value: 90,
      desc: "Memahami ucapan salam dan struktur kalimat sederhana.",
    },
    {
      id: 9,
      name: "Bahasa Inggris",
      value: 86,
      desc: "Mampu menyusun kalimat perintah dan percakapan singkat.",
    },
    {
      id: 10,
      name: "Informatika Dasar",
      value: 91,
      desc: "Terampil menyalakan komputer dan menggunakan mengetik dasar.",
    },
  ],
  4: [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      value: 93,
      desc: "Sangat memahami zakat, puasa, dan tata cara thaharah.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 88,
      desc: "Memahami norma masyarakat dan penerapan sila Pancasila.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia",
      value: 86,
      desc: "Memahami ide pokok paragraf dan membuat surat sederhana.",
    },
    {
      id: 4,
      name: "Matematika",
      value: 81,
      desc: "Memahami FPB, KPK, dan pengukuran bangun datar.",
    },
    {
      id: 5,
      name: "IPAS (Ilmu Pengetahuan Alam & Sosial)",
      value: 86,
      desc: "Memahami bagian tumbuhan dan wujud zat benda.",
    },
    {
      id: 6,
      name: "Seni Budaya & Musik",
      value: 89,
      desc: "Mampu memainkan alat musik ritmis dengan harmonis.",
    },
    {
      id: 7,
      name: "PJOK",
      value: 88,
      desc: "Menguasai variasi gerak dasar atletik dan senam lantai.",
    },
    {
      id: 8,
      name: "Bahasa Arab",
      value: 92,
      desc: "Sangat baik mempraktikkan mufradat profesi dan sekolah.",
    },
    {
      id: 9,
      name: "Bahasa Inggris",
      value: 87,
      desc: "Memahami tenses sederhana (Present Tense) dalam dialog.",
    },
    {
      id: 10,
      name: "Informatika / Digital Literacy",
      value: 90,
      desc: "Terampil menggunakan Microsoft Word untuk tugas cerita.",
    },
  ],
  5: [
    {
      id: 1,
      name: "Pendidikan Agama Islam & Budi Pekerti",
      value: 92,
      desc: "Sangat baik dalam memahami kisah nabi dan praktik ibadah wudhu/shalat.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 88,
      desc: "Sangat santun dan memahami aturan hak serta kewajiban di sekolah.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia",
      value: 86,
      desc: "Mampu membaca cerita dengan lancar dan menulis karangan sederhana.",
    },
    {
      id: 4,
      name: "Bahasa Arab SD",
      value: 95,
      desc: "Sangat baik mempraktikkan mufradat kosakata benda di sekitar kelas.",
    },
    {
      id: 5,
      name: "Bahasa Inggris SD",
      value: 87,
      desc: "Aktif dan percaya diri dalam dialog menyapa harian.",
    },
    {
      id: 6,
      name: "Matematika SD",
      value: 82,
      desc: "Memahami konsep operasi hitung pecahan dan perkalian dasar.",
    },
    {
      id: 7,
      name: "Ilmu Pengetahuan Alam & Sosial (IPAS)",
      value: 85,
      desc: "Memahami bagian tubuh tumbuhan dan daur hidup hewan.",
    },
    {
      id: 8,
      name: "Seni Budaya & Prakarya (SBdP)",
      value: 90,
      desc: "Kreatif membuat kerajinan origami dan gambar imajinatif.",
    },
    {
      id: 9,
      name: "Informatika & Koding Dasar",
      value: 89,
      desc: "Mengenal operasi komputer dasar dan logika Scratch visual.",
    },
    {
      id: 10,
      name: "PJOK (Olah Raga SD)",
      value: 88,
      desc: "Memiliki kelincahan fisik yang baik dan semangat sportif.",
    },
  ],
  6: [
    {
      id: 1,
      name: "Pendidikan Agama Islam",
      value: 94,
      desc: "Sangat mahir memahami fiqih muamalah dan sejarah Islam.",
    },
    {
      id: 2,
      name: "Pendidikan Pancasila",
      value: 90,
      desc: "Memiliki kepemimpinan dan jiwa gotong royong yang tinggi.",
    },
    {
      id: 3,
      name: "Bahasa Indonesia",
      value: 88,
      desc: "Terampil pidato singkat dan menganalisis karya sastra anak.",
    },
    {
      id: 4,
      name: "Matematika Lanjutan",
      value: 85,
      desc: "Memahami pengolahan data rata-rata, modus, dan bangun ruang.",
    },
    {
      id: 5,
      name: "IPAS Terpadu",
      value: 89,
      desc: "Memahami sistem tata surya dan kelestarian ekosistem bumi.",
    },
    {
      id: 6,
      name: "Seni Budaya & Pameran Karya",
      value: 91,
      desc: "Terampil pameran seni rupa 3 dimensi dan batik piring.",
    },
    {
      id: 7,
      name: "PJOK & Kesehatan Usia Dini",
      value: 90,
      desc: "Memahami pola hidup sehat dan kebugaran jasmani mandiri.",
    },
    {
      id: 8,
      name: "Bahasa Arab Terapan",
      value: 94,
      desc: "Mampu menterjemahkan teks bacaan pendek secara tartil.",
    },
    {
      id: 9,
      name: "Bahasa Inggris",
      value: 89,
      desc: "Mampu presentasi singkat menceritakan cita-cita (Future Plan).",
    },
    {
      id: 10,
      name: "Informatika & Dasar Koding/Robotik",
      value: 92,
      desc: "Mampu membuat animasi Scratch interaktif dan mengolah data.",
    },
  ],
};

// Database Siswa Berdasarkan Kelas
const dataSiswaByKelas = {
  1: [
    { nisn: "0181110001", name: "Ananda Rayyan" },
    { nisn: "0181110002", name: "Aisha Humaira" },
  ],
  2: [
    { nisn: "0172220001", name: "Bilal Ibnu Rabah" },
    { nisn: "0172220002", name: "Khadijah Maryam" },
  ],
  3: [
    { nisn: "0163330001", name: "Fathir Ahmad" },
    { nisn: "0163330002", name: "Zahra Salsabila" },
  ],
  4: [
    { nisn: "0154440001", name: "Ibrahim Al-Ghazi" },
    { nisn: "0154440002", name: "Amina Hafizhah" },
  ],
  5: [
    { nisn: "0158293041", name: "Muhammad Azzam" },
    { nisn: "0158293042", name: "Fatima Az-Zahra" },
  ],
  6: [
    { nisn: "0146660001", name: "Zaid Bin Tsabit" },
    { nisn: "0146660002", name: "Siti Aisyah" },
  ],
};

// Database Wali Kelas Per Kelas
let dataWaliKelas = [
  {
    kelas: "1",
    nama: "Ustadzah. Fatimah, S.Pd",
    nip: "19900115 202101 2 001",
    username: "wali1",
    password: "walibintang123",
  },
  {
    kelas: "2",
    nama: "Ustadzah. Yuni, S.Pd.I",
    nip: "19880512 202101 1 001",
    username: "wali2",
    password: "walibintang123",
  },
  {
    kelas: "3",
    nama: "Ust. Ahmad Syauqi, M.Pd",
    nip: "19850320 202001 1 002",
    username: "wali3",
    password: "walibintang123",
  },
  {
    kelas: "4",
    nama: "Ustadzah. Maryam, S.Hum",
    nip: "19920810 202201 2 003",
    username: "wali4",
    password: "walibintang123",
  },
  {
    kelas: "5",
    nama: "Ust. Husen, S.Pd.I",
    nip: "19880512 202101 1 002",
    username: "walikelas",
    password: "walibintang123",
  },
  {
    kelas: "6",
    nama: "Ust. Abdullah, S.S",
    nip: "19830411 201901 1 004",
    username: "wali6",
    password: "walibintang123",
  },
];

let currentRole = "walikelas";
let loggedInWaliKelas = null;

document.addEventListener("DOMContentLoaded", () => {
  checkLoginSession();
  populateFormSetting();
});

function populateFormSetting() {
  const thInput = document.getElementById("setting-tahun-ajaran");
  const smSelect = document.getElementById("setting-semester");
  const tgInput = document.getElementById("setting-tanggal-cetak");
  const mdInput = document.getElementById("setting-nama-mudir");
  const nyInput = document.getElementById("setting-niy-mudir");

  if (thInput) thInput.value = configRapor.tahunAjaran;
  if (smSelect) smSelect.value = configRapor.semester;
  if (tgInput) tgInput.value = configRapor.tanggalCetak;
  if (mdInput) mdInput.value = configRapor.namaMudir;
  if (nyInput) nyInput.value = configRapor.niyMudir;
}

function simpanSettingRapor(e) {
  e.preventDefault();
  configRapor.tahunAjaran = document
    .getElementById("setting-tahun-ajaran")
    .value.trim();
  configRapor.semester = document.getElementById("setting-semester").value;
  configRapor.tanggalCetak = document
    .getElementById("setting-tanggal-cetak")
    .value.trim();
  configRapor.namaMudir = document
    .getElementById("setting-nama-mudir")
    .value.trim();
  configRapor.niyMudir = document
    .getElementById("setting-niy-mudir")
    .value.trim();

  alert("Alhamdulillah! Pengaturan umum Rapor berhasil disimpan.");
  renderPrintableData();
}

function checkLoginSession() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedRole = localStorage.getItem("userRole");
  const savedWaliKelas = localStorage.getItem("loggedInWaliKelas");

  if (isLoggedIn === "true" && savedRole) {
    currentRole = savedRole;
    if (savedWaliKelas) {
      loggedInWaliKelas = JSON.parse(savedWaliKelas);
    }

    document.getElementById("login-view")?.classList.add("hidden");
    document.getElementById("app-view")?.classList.remove("hidden");

    applyRolePermissions();
  } else {
    document.getElementById("login-view")?.classList.remove("hidden");
    document.getElementById("app-view")?.classList.add("hidden");
  }
}

function applyRolePermissions() {
  const adminMenu = document.getElementById("admin-only-menu");
  const nameDisplay = document.getElementById("user-display-name");
  const roleDisplay = document.getElementById("user-display-role");

  if (currentRole === "walikelas" && loggedInWaliKelas) {
    if (adminMenu) adminMenu.classList.add("hidden");
    if (nameDisplay) nameDisplay.textContent = loggedInWaliKelas.nama;
    if (roleDisplay)
      roleDisplay.textContent = `Wali Kelas ${loggedInWaliKelas.kelas}`;

    lockKelasDropdowns(loggedInWaliKelas.kelas);
    switchTab("dashboard");
  } else {
    if (adminMenu) adminMenu.classList.remove("hidden");
    if (nameDisplay) nameDisplay.textContent = "Administrator Utama";
    if (roleDisplay) roleDisplay.textContent = "Super Admin System";

    unlockKelasDropdowns();
    switchTab("dashboard");
  }
}

function renderDashboard() {
  const dashTitle = document.getElementById("dash-title");
  const dashSub = document.getElementById("dash-subtitle");
  const adminContent = document.getElementById("dash-admin-content");
  const waliContent = document.getElementById("dash-wali-content");

  if (currentRole === "admin") {
    if (dashTitle) dashTitle.textContent = "Dashboard Administrator eRapor";
    if (dashSub)
      dashSub.textContent =
        "Ringkasan total siswa, wali kelas, dan statistik pengisian nilai per kelas.";

    if (adminContent) adminContent.classList.remove("hidden");
    if (waliContent) waliContent.classList.add("hidden");

    let totalSiswa = 0;
    Object.keys(dataSiswaByKelas).forEach((k) => {
      totalSiswa += dataSiswaByKelas[k].length;
    });

    const elTotalSiswa = document.getElementById("dash-total-siswa");
    const elTotalWali = document.getElementById("dash-total-walikelas");
    if (elTotalSiswa) elTotalSiswa.textContent = totalSiswa;
    if (elTotalWali) elTotalWali.textContent = dataWaliKelas.length;

    const progressContainer = document.getElementById(
      "dash-progress-kelas-container",
    );
    if (progressContainer) {
      progressContainer.innerHTML = "";
      for (let k = 1; k <= 6; k++) {
        const persentase = progressNilaiKelas[k] || 0;
        const wali = dataWaliKelas.find((w) => w.kelas === String(k));
        const namaWali = wali ? wali.nama : "Belum ditentukan";

        progressContainer.innerHTML += `
          <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <div class="flex justify-between items-center mb-1">
              <span class="font-bold text-gray-800 text-sm">Kelas ${k}</span>
              <span class="text-xs font-extrabold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">${persentase}% Terisi</span>
            </div>
            <p class="text-xs text-gray-500 mb-2 font-medium">Wali: ${namaWali}</p>
            <div class="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div class="bg-brand-600 h-2.5 rounded-full transition-all duration-500" style="width: ${persentase}%"></div>
            </div>
          </div>
        `;
      }
    }
  } else {
    const kelasWali = loggedInWaliKelas ? loggedInWaliKelas.kelas : "5";
    if (dashTitle) dashTitle.textContent = `Dashboard Wali Kelas ${kelasWali}`;
    if (dashSub)
      dashSub.textContent = `Monitoring kelengkapan berkas nilai murid Kelas ${kelasWali}.`;

    if (adminContent) adminContent.classList.add("hidden");
    if (waliContent) waliContent.classList.remove("hidden");

    const listSiswa = dataSiswaByKelas[kelasWali] || [];
    const listMapel = mapelByKelas[kelasWali] || [];

    const elWaliSiswa = document.getElementById("dash-wali-total-siswa");
    const elWaliMapel = document.getElementById("dash-wali-total-mapel");

    if (elWaliSiswa) elWaliSiswa.textContent = listSiswa.length;
    if (elWaliMapel) elWaliMapel.textContent = listMapel.length;

    const statusContainer = document.getElementById(
      "dash-wali-status-container",
    );
    if (statusContainer) {
      statusContainer.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Nilai Mapel</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">${listMapel.length} Mapel Terisi</p>
          <span class="text-[11px] text-emerald-700">Lengkap 100%</span>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Ujian Tasmi'</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">Ujian Tasmi' Terdata</p>
          <span class="text-[11px] text-emerald-700">Mumtaz / Jayyid</span>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Tahfidz Qur'an</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">Mutqin Juz 29 & 30</p>
          <span class="text-[11px] text-emerald-700">Terisi</span>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Metode Ummi</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">Jilid & Halaman Active</p>
          <span class="text-[11px] text-emerald-700">Siap Munaqosah</span>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Kehadiran Siswa</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">Rekap Absensi</p>
          <span class="text-[11px] text-emerald-700">Sakit, Izin, Alpa Terisi</span>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-emerald-800 uppercase">Catatan Wali Kelas</span>
            <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i>
          </div>
          <p class="text-sm font-bold text-emerald-900">Catatan Perkembangan</p>
          <span class="text-[11px] text-emerald-700">Selesai Ditulis</span>
        </div>
      `;
    }
  }
}

function lockKelasDropdowns(kelas) {
  const ids = [
    "select-kelas",
    "tahfidz-select-kelas",
    "kehadiran-select-kelas",
    "cetak-select-kelas",
  ];

  ids.forEach((id) => {
    const select = document.getElementById(id);
    if (select) {
      select.value = kelas;
      select.disabled = true;
      select.classList.add("bg-gray-100", "cursor-not-allowed");
    }
  });

  updateDropdownSiswa();
  updateTahfidzDropdownSiswa();
  updateKehadiranDropdownSiswa();
  updateCetakDropdownSiswa();
}

function unlockKelasDropdowns() {
  const ids = [
    "select-kelas",
    "tahfidz-select-kelas",
    "kehadiran-select-kelas",
    "cetak-select-kelas",
  ];

  ids.forEach((id) => {
    const select = document.getElementById(id);
    if (select) {
      select.disabled = false;
      select.classList.remove("bg-gray-100", "cursor-not-allowed");
    }
  });

  updateDropdownSiswa();
  updateTahfidzDropdownSiswa();
  updateKehadiranDropdownSiswa();
  updateCetakDropdownSiswa();
}

function setRole(role) {
  currentRole = role;
  const btnWali = document.getElementById("btn-role-walikelas");
  const btnAdmin = document.getElementById("btn-role-admin");

  if (role === "walikelas") {
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition";
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition";
  } else {
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition";
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition";
  }
}

function handleLogin(e) {
  e.preventDefault();

  const usernameInput = document.getElementById("login-username")?.value.trim();
  const passwordInput = document.getElementById("login-password")?.value;

  if (currentRole === "admin") {
    if (usernameInput === "admin" && passwordInput === "adminbintang123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");
      localStorage.removeItem("loggedInWaliKelas");
      loggedInWaliKelas = null;

      document.getElementById("login-view").classList.add("hidden");
      document.getElementById("app-view").classList.remove("hidden");
      applyRolePermissions();
    } else {
      alert("Login Administrator Gagal! Username / Password salah.");
    }
  } else {
    const waliAcc = dataWaliKelas.find(
      (w) =>
        (w.username === usernameInput || w.nip === usernameInput) &&
        w.password === passwordInput,
    );

    if (waliAcc) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "walikelas");
      localStorage.setItem("loggedInWaliKelas", JSON.stringify(waliAcc));
      loggedInWaliKelas = waliAcc;

      document.getElementById("login-view").classList.add("hidden");
      document.getElementById("app-view").classList.remove("hidden");
      applyRolePermissions();
    } else {
      alert("Login Wali Kelas Gagal! Username atau password salah.");
    }
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  localStorage.removeItem("loggedInWaliKelas");
  loggedInWaliKelas = null;

  const loginForm = document.querySelector("#login-view form");
  if (loginForm) loginForm.reset();

  document.getElementById("app-view").classList.add("hidden");
  document.getElementById("login-view").classList.remove("hidden");
}

function toggleSubMenuInput() {
  const container = document.getElementById("submenu-input-container");
  const arrow = document.getElementById("icon-submenu-arrow");

  if (container) container.classList.toggle("hidden");
  if (arrow) arrow.classList.toggle("rotate-180");
}

function switchTab(tabName) {
  const tabs = [
    "dashboard",
    "setting-rapor",
    "input-mapel",
    "kelola-mapel",
    "input-siswa",
    "input-walikelas",
    "input-tahfidz",
    "input-kehadiran",
    "cetak-raport",
  ];

  tabs.forEach((t) => {
    const tabElement = document.getElementById(`tab-${t}`);
    const navElement = document.getElementById(`nav-${t}`);

    if (tabElement) tabElement.classList.add("hidden");
    if (navElement) {
      if (["input-mapel", "input-tahfidz", "input-kehadiran"].includes(t)) {
        navElement.className =
          "w-full flex items-center px-3 py-2 text-xs font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition";
      } else {
        navElement.className =
          "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition";
      }
    }
  });

  const targetTab = document.getElementById(`tab-${tabName}`);
  const targetNav = document.getElementById(`nav-${tabName}`);

  if (targetTab) targetTab.classList.remove("hidden");

  if (targetNav) {
    if (["input-mapel", "input-tahfidz", "input-kehadiran"].includes(tabName)) {
      targetNav.className =
        "w-full flex items-center px-3 py-2 text-xs font-bold rounded-lg text-brand-700 bg-brand-50 shadow-sm transition";
    } else {
      targetNav.className =
        "w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg text-brand-700 bg-brand-50 shadow-sm transition";
    }
  }

  if (["input-mapel", "input-tahfidz", "input-kehadiran"].includes(tabName)) {
    const submenuContainer = document.getElementById("submenu-input-container");
    const arrow = document.getElementById("icon-submenu-arrow");

    if (submenuContainer) submenuContainer.classList.remove("hidden");
    if (arrow) arrow.classList.add("rotate-180");
  }

  if (tabName === "dashboard") renderDashboard();
  else if (tabName === "setting-rapor") populateFormSetting();
  else if (tabName === "kelola-mapel") renderTabelKelolaMapel();
  else if (tabName === "input-siswa") renderTabelSiswa();
  else if (tabName === "input-walikelas") renderTabelWaliKelas();
  else if (tabName === "input-tahfidz") updateTahfidzDropdownSiswa();
  else if (tabName === "input-kehadiran") updateKehadiranDropdownSiswa();
  else if (tabName === "cetak-raport") updateCetakDropdownSiswa();
}

/* =========================================================
   FUNGSI MANAJEMEN DATA SISWA (BARU & PERBAIKAN)
   ========================================================= */

/**
 * Render Tabel Data Siswa Berdasarkan Kelas yang Dipilih
 */
function renderTabelSiswa() {
  const tbody = document.getElementById("table-siswa-body");
  const selectKelas = document.getElementById("tambah-siswa-kelas");
  if (!tbody || !selectKelas) return;

  const kelasVal = selectKelas.value;
  const listSiswa = dataSiswaByKelas[kelasVal] || [];

  tbody.innerHTML = "";
  if (listSiswa.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="px-4 py-3 text-center text-gray-400">Belum ada data siswa di kelas ini.</td></tr>`;
    return;
  }

  listSiswa.forEach((s) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-mono text-xs font-semibold text-gray-700">${s.nisn}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${s.name}</td>
        <td class="px-4 py-3 text-center">
          <button type="button" onclick="hapusSiswa('${kelasVal}', '${s.nisn}')" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

/**
 * Memproses Form Tambah Siswa Baru
 */
function tambahSiswa(e) {
  e.preventDefault();
  const kelasSelect = document.getElementById("tambah-siswa-kelas");
  const nisnInput = document.getElementById("tambah-siswa-nisn");
  const namaInput = document.getElementById("tambah-siswa-nama");

  if (!kelasSelect || !nisnInput || !namaInput) return;

  const kelas = kelasSelect.value;
  const nisn = nisnInput.value.trim();
  const name = namaInput.value.trim();

  if (!dataSiswaByKelas[kelas]) {
    dataSiswaByKelas[kelas] = [];
  }

  // Cek jika NISN sudah ada
  const exists = dataSiswaByKelas[kelas].some((s) => s.nisn === nisn);
  if (exists) {
    alert(`NISN ${nisn} sudah terdaftar di Kelas ${kelas}!`);
    return;
  }

  dataSiswaByKelas[kelas].push({ nisn, name });

  alert(
    `Alhamdulillah! Siswa (${name}) berhasil ditambahkan ke Kelas ${kelas}.`,
  );

  // Reset Input Form
  nisnInput.value = "";
  namaInput.value = "";

  // Update Tampilan Seluruh Komponen Terkait
  renderTabelSiswa();
  updateDropdownSiswa();
  updateTahfidzDropdownSiswa();
  updateKehadiranDropdownSiswa();
  updateCetakDropdownSiswa();
  renderDashboard();
}

/**
 * Menghapus Data Siswa dari Kelas
 */
function hapusSiswa(kelas, nisn) {
  if (confirm(`Apakah Anda yakin ingin menghapus siswa dengan NISN ${nisn}?`)) {
    if (dataSiswaByKelas[kelas]) {
      dataSiswaByKelas[kelas] = dataSiswaByKelas[kelas].filter(
        (s) => s.nisn !== nisn,
      );
      renderTabelSiswa();
      updateDropdownSiswa();
      updateTahfidzDropdownSiswa();
      updateKehadiranDropdownSiswa();
      updateCetakDropdownSiswa();
      renderDashboard();
    }
  }
}

function updateDropdownSiswa() {
  const selectKelas = document.getElementById("select-kelas");
  const selectSiswa = document.getElementById("select-siswa");
  if (!selectKelas || !selectSiswa) return;

  const kelasVal = selectKelas.value;
  const daftarSiswa = dataSiswaByKelas[kelasVal] || [];

  selectSiswa.innerHTML = "";
  daftarSiswa.forEach((s) => {
    selectSiswa.innerHTML += `<option value="${s.nisn}">${s.name} (NISN: ${s.nisn})</option>`;
  });

  renderMapelTable();
}

function updateTahfidzDropdownSiswa() {
  const kelasSelect = document.getElementById("tahfidz-select-kelas");
  const siswaSelect = document.getElementById("tahfidz-select-siswa");
  if (!kelasSelect || !siswaSelect) return;

  const kelasVal = kelasSelect.value;
  const listSiswa = dataSiswaByKelas[kelasVal] || [];

  siswaSelect.innerHTML = "";
  listSiswa.forEach((s) => {
    siswaSelect.innerHTML += `<option value="${s.nisn}">${s.name} (NISN: ${s.nisn})</option>`;
  });
}

function updateKehadiranDropdownSiswa() {
  const kelasSelect = document.getElementById("kehadiran-select-kelas");
  const siswaSelect = document.getElementById("kehadiran-select-siswa");
  if (!kelasSelect || !siswaSelect) return;

  const kelasVal = kelasSelect.value;
  const listSiswa = dataSiswaByKelas[kelasVal] || [];

  siswaSelect.innerHTML = "";
  listSiswa.forEach((s) => {
    siswaSelect.innerHTML += `<option value="${s.nisn}">${s.name} (NISN: ${s.nisn})</option>`;
  });
}

function updateCetakDropdownSiswa() {
  const kelasSelect = document.getElementById("cetak-select-kelas");
  const siswaSelect = document.getElementById("cetak-select-siswa");
  if (!kelasSelect || !siswaSelect) return;

  const kelasVal = kelasSelect.value;
  const listSiswa = dataSiswaByKelas[kelasVal] || [];

  siswaSelect.innerHTML = "";
  listSiswa.forEach((s) => {
    siswaSelect.innerHTML += `<option value="${s.nisn}">${s.name}</option>`;
  });

  renderPrintableData();
}

function renderPrintableData() {
  const kelasSelect = document.getElementById("cetak-select-kelas");
  const siswaSelect = document.getElementById("cetak-select-siswa");
  if (!kelasSelect || !siswaSelect) return;

  const kelasVal = kelasSelect.value;
  const nisnVal = siswaSelect.value;
  const listSiswa = dataSiswaByKelas[kelasVal] || [];
  const selectedSiswa =
    listSiswa.find((s) => s.nisn === nisnVal) || listSiswa[0];

  const printNama = document.getElementById("print-nama-siswa");
  const printNisn = document.getElementById("print-nisn-siswa");
  const printKelas = document.getElementById("print-kelas-siswa");
  const printThn = document.getElementById("print-tahun-ajaran");
  const printSmt = document.getElementById("print-semester");
  const printTgl = document.getElementById("print-tanggal-cetak");
  const printTiti = document.getElementById("print-titi-mangsa");

  if (printNama)
    printNama.textContent = `: ${selectedSiswa ? selectedSiswa.name : "-"}`;
  if (printNisn)
    printNisn.textContent = `: ${selectedSiswa ? selectedSiswa.nisn : "-"}`;
  if (printKelas) printKelas.textContent = `: Kelas ${kelasVal}`;
  if (printThn) printThn.textContent = `: ${configRapor.tahunAjaran}`;
  if (printSmt) printSmt.textContent = `: ${configRapor.semester}`;
  if (printTgl) printTgl.textContent = `: ${configRapor.tanggalCetak}`;
  if (printTiti)
    printTiti.textContent = `Diberikan di: Jakarta, ${configRapor.tanggalCetak}`;

  const printWaliNama = document.getElementById("print-walikelas-nama");
  const printWaliNip = document.getElementById("print-walikelas-nip");
  const waliAktif = dataWaliKelas.find((w) => w.kelas === kelasVal);

  if (printWaliNama)
    printWaliNama.textContent = waliAktif
      ? waliAktif.nama
      : "( .................................... )";
  if (printWaliNip)
    printWaliNip.textContent = waliAktif ? `NIP. ${waliAktif.nip}` : "NIP. -";

  const printMudirNama = document.getElementById("print-mudir-nama");
  const printMudirNiy = document.getElementById("print-mudir-niy");

  if (printMudirNama) printMudirNama.textContent = configRapor.namaMudir;
  if (printMudirNiy) printMudirNiy.textContent = `NIY. ${configRapor.niyMudir}`;

  const listMapel = mapelByKelas[kelasVal] || [];
  renderPrintableMapel(listMapel);
}

function renderPrintableMapel(listMapel) {
  const printBody = document.getElementById("printable-mapel-body");
  if (!printBody) return;

  printBody.innerHTML = "";
  if (listMapel.length === 0) {
    printBody.innerHTML = `<tr><td colspan="5" class="border border-gray-400 px-2 py-2 text-center text-gray-400">Belum ada data mata pelajaran.</td></tr>`;
    return;
  }

  listMapel.forEach((m, index) => {
    let predikat = "B";
    if (m.value >= 90) predikat = "A";
    else if (m.value < 80) predikat = "C";

    printBody.innerHTML += `
      <tr>
        <td class="border border-gray-400 px-2 py-1 text-center">${index + 1}</td>
        <td class="border border-gray-400 px-2 py-1 font-semibold">${m.name}</td>
        <td class="border border-gray-400 px-2 py-1 text-center font-bold">${m.value}</td>
        <td class="border border-gray-400 px-2 py-1 text-center">${predikat}</td>
        <td class="border border-gray-400 px-2 py-1">${m.desc}</td>
      </tr>
    `;
  });
}

function renderMapelTable() {
  const tbody = document.getElementById("table-mapel-body");
  const selectKelas = document.getElementById("select-kelas");
  if (!tbody) return;

  const kelasVal = selectKelas ? selectKelas.value : "5";
  const listMapel = mapelByKelas[kelasVal] || mapelByKelas["5"];

  tbody.innerHTML = "";
  listMapel.forEach((m, index) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
          <td class="px-4 py-3 font-semibold text-gray-500">${index + 1}</td>
          <td class="px-4 py-3 font-bold text-gray-800">${m.name}</td>
          <td class="px-4 py-3 text-center">
              <input type="number" value="${m.value}" min="0" max="100" class="w-16 px-2 py-1 text-center border border-gray-300 rounded font-bold text-brand-700 focus:ring-2 focus:ring-brand-500 outline-none">
          </td>
          <td class="px-4 py-3">
              <input type="text" value="${m.desc}" class="w-full px-3 py-1 border border-gray-300 rounded text-xs bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none">
          </td>
      </tr>
    `;
  });
}

function renderTabelWaliKelas() {
  const tbody = document.getElementById("table-walikelas-body");
  if (!tbody) return;

  tbody.innerHTML = "";
  if (dataWaliKelas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="px-4 py-3 text-center text-gray-400">Belum ada data wali kelas.</td></tr>`;
    return;
  }

  dataWaliKelas.sort((a, b) => a.kelas - b.kelas);

  dataWaliKelas.forEach((w, index) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-semibold text-gray-500">${index + 1}</td>
        <td class="px-4 py-3 font-bold text-brand-800">Kelas ${w.kelas}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${w.nama}</td>
        <td class="px-4 py-3 text-xs text-gray-600">${w.nip}</td>
        <td class="px-4 py-3 text-xs font-bold text-brand-700">${w.username || "-"}</td>
        <td class="px-4 py-3 text-xs font-mono text-gray-600">${w.password || "-"}</td>
        <td class="px-4 py-3 text-center space-x-1">
          <button type="button" onclick="editWaliKelas('${w.kelas}')" class="text-blue-600 hover:text-blue-800 text-xs font-semibold px-2 py-1 rounded hover:bg-blue-50 transition">
            <i class="fa-solid fa-pen-to-square mr-1"></i> Edit
          </button>
          <button type="button" onclick="hapusWaliKelas('${w.kelas}')" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

function simpanWaliKelas(e) {
  e.preventDefault();
  const kelas = document.getElementById("walikelas-kelas").value;
  const nip = document.getElementById("walikelas-nip").value.trim();
  const nama = document.getElementById("walikelas-nama").value.trim();
  const username = document.getElementById("walikelas-username").value.trim();
  const password = document.getElementById("walikelas-password").value.trim();

  const index = dataWaliKelas.findIndex((w) => w.kelas === kelas);

  if (index !== -1) {
    dataWaliKelas[index] = { kelas, nama, nip, username, password };
  } else {
    dataWaliKelas.push({ kelas, nama, nip, username, password });
  }

  alert(
    `Alhamdulillah! Data Wali Kelas ${kelas} dan Akun Login berhasil disimpan.`,
  );

  document.getElementById("walikelas-nip").value = "";
  document.getElementById("walikelas-nama").value = "";
  document.getElementById("walikelas-username").value = "";
  document.getElementById("walikelas-password").value = "";

  renderTabelWaliKelas();
  renderDashboard();
  renderPrintableData();
}

function editWaliKelas(kelas) {
  const data = dataWaliKelas.find((w) => w.kelas === kelas);
  if (data) {
    document.getElementById("walikelas-kelas").value = data.kelas;
    document.getElementById("walikelas-nip").value = data.nip;
    document.getElementById("walikelas-nama").value = data.nama;
    document.getElementById("walikelas-username").value = data.username || "";
    document.getElementById("walikelas-password").value = data.password || "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function hapusWaliKelas(kelas) {
  if (confirm(`Apakah Anda yakin ingin menghapus data Wali Kelas ${kelas}?`)) {
    dataWaliKelas = dataWaliKelas.filter((w) => w.kelas !== kelas);
    renderTabelWaliKelas();
    renderDashboard();
    renderPrintableData();
  }
}

function cetakRaportPDF() {
  switchTab("cetak-raport");
  setTimeout(() => {
    window.print();
  }, 300);
}

function saveDataAlert() {
  alert("Alhamdulillah! Data berhasil disimpan ke sistem eRapor.");
}
