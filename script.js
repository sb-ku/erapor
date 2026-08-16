/* =========================================================
   Logic Application eRapor SD Tahfidz Bintang Al-Qur'an
   Inisialisasi Client Database Supabase Safe-Loader
   ========================================================= */
const SUPABASE_URL = "https://hidhczsmctknmrcivveb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZGhjenNtY3Rrbm1yY2l2dmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4MzE1NzgsImV4cCI6MjEwMjQwNzU3OH0.llcQd90L7GVmQAY2mk3B6LkXYi85M1h1Qqc0DZOQWuM";

// Cegah Uncaught SyntaxError karena re-deklarasi variabel
var supabase = supabase || null;

// State Pengaturan Rapor Default
let configRapor = {
  tahunAjaran: "2026/2027",
  semester: "Ganjil (1)",
  tanggalCetak: "14 Agustus 2026",
  namaMudir: "Ust. Khoiruddin, S.Si",
  niyMudir: "201501 001",
};

let currentRole = "walikelas";
let loggedInWaliKelas = null;

// Daftarkan fungsi setRole ke Window secara langsung sebelum eksekusi lain
window.setRole = function (role) {
  currentRole = role;
  const btnWali = document.getElementById("btn-role-walikelas");
  const btnAdmin = document.getElementById("btn-role-admin");

  if (!btnWali || !btnAdmin) return;

  if (role === "walikelas") {
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition cursor-pointer select-none";
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition cursor-pointer select-none";
  } else {
    btnAdmin.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg bg-white shadow text-brand-700 transition cursor-pointer select-none";
    btnWali.className =
      "flex-1 py-2 text-sm font-semibold rounded-lg text-gray-500 hover:text-gray-700 transition cursor-pointer select-none";
  }
};
window.switchRole = window.setRole;

// Registrasi Fungsi Global Lainnya
window.handleLogin = handleLogin;
window.logout = logout;
window.switchTab = switchTab;
window.toggleSubMenuInput = toggleSubMenuInput;
window.simpanSettingRapor = simpanSettingRapor;
window.tambahSiswa = tambahSiswa;
window.hapusSiswa = hapusSiswa;
window.simpanWaliKelas = simpanWaliKelas;
window.hapusWaliKelas = hapusWaliKelas;
window.tambahMapelBaru = tambahMapelBaru;
window.hapusMapel = hapusMapel;
window.updateDropdownSiswa = updateDropdownSiswa;
window.updateTahfidzDropdownSiswa = updateTahfidzDropdownSiswa;
window.updateKehadiranDropdownSiswa = updateKehadiranDropdownSiswa;
window.updateCetakDropdownSiswa = updateCetakDropdownSiswa;
window.simpanCapaianTahfidz = simpanCapaianTahfidz;
window.simpanKehadiranCatatan = simpanKehadiranCatatan;
window.renderPrintableData = renderPrintableData;
window.cetakRaportPDF = cetakRaportPDF;
window.saveDataAlert = saveDataAlert;

document.addEventListener("DOMContentLoaded", () => {
  if (window.supabase && typeof window.supabase.createClient === "function") {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  } else if (!supabase) {
    console.error("SDK Supabase belum terisi di HTML!");
    alert("Gagal memuat SDK Supabase. Pastikan koneksi internet stabil.");
    return;
  }

  // Tambahkan event listener agar saat pilihan Nama Siswa diganti, data langsung diperbarui
  const selectSiswaCetak = document.getElementById("cetak-select-siswa");
  if (selectSiswaCetak) {
    selectSiswaCetak.addEventListener("change", renderPrintableData);
  }

  checkLoginSession();
  loadPengaturanRapor();
});

/* =========================================================
   1. PENGATURAN RAPOR (TABEL: pengaturan_rapor)
   ========================================================= */
async function loadPengaturanRapor() {
  if (!supabase) return;
  const { data, error } = await supabase
    .from("pengaturan_rapor")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (!error && data) {
    configRapor = {
      tahunAjaran: data.tahun_ajaran,
      semester: data.semester,
      tanggalCetak: data.tanggal_cetak,
      namaMudir: data.nama_mudir,
      niyMudir: data.niy_mudir,
    };
  }
  populateFormSetting();
}

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

async function simpanSettingRapor(e) {
  e.preventDefault();
  if (!supabase) return;

  const th = document.getElementById("setting-tahun-ajaran").value.trim();
  const sm = document.getElementById("setting-semester").value;
  const tg = document.getElementById("setting-tanggal-cetak").value.trim();
  const md = document.getElementById("setting-nama-mudir").value.trim();
  const ny = document.getElementById("setting-niy-mudir").value.trim();

  const { data: checkData } = await supabase
    .from("pengaturan_rapor")
    .select("id")
    .limit(1)
    .maybeSingle();

  let res;
  if (checkData) {
    res = await supabase
      .from("pengaturan_rapor")
      .update({
        tahun_ajaran: th,
        semester: sm,
        tanggal_cetak: tg,
        nama_mudir: md,
        niy_mudir: ny,
      })
      .eq("id", checkData.id);
  } else {
    res = await supabase.from("pengaturan_rapor").insert([
      {
        tahun_ajaran: th,
        semester: sm,
        tanggal_cetak: tg,
        nama_mudir: md,
        niy_mudir: ny,
      },
    ]);
  }

  if (res.error) {
    alert(`Gagal menyimpan pengaturan: ${res.error.message}`);
  } else {
    configRapor = {
      tahunAjaran: th,
      semester: sm,
      tanggalCetak: tg,
      namaMudir: md,
      niyMudir: ny,
    };
    alert(
      "Alhamdulillah! Pengaturan umum Rapor berhasil disimpan ke Supabase.",
    );
    renderPrintableData();
  }
}

/* =========================================================
   2. AUTHENTICATION & SESSION MANAGEMENT
   ========================================================= */
function checkLoginSession() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedRole = localStorage.getItem("userRole");
  const savedWaliKelas = localStorage.getItem("loggedInWaliKelas");

  if (isLoggedIn === "true" && savedRole) {
    currentRole = savedRole;
    if (savedWaliKelas) loggedInWaliKelas = JSON.parse(savedWaliKelas);

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
  } else {
    if (adminMenu) adminMenu.classList.remove("hidden");
    if (nameDisplay) nameDisplay.textContent = "Administrator Utama";
    if (roleDisplay) roleDisplay.textContent = "Super Admin System";

    unlockKelasDropdowns();
  }
  switchTab("dashboard");
}

async function handleLogin(e) {
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
    if (!supabase) return;
    const { data: wali, error } = await supabase
      .from("wali_kelas")
      .select("*")
      .or(`username.eq.${usernameInput},nip.eq.${usernameInput}`)
      .eq("password", passwordInput)
      .maybeSingle();

    if (wali && !error) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "walikelas");
      localStorage.setItem("loggedInWaliKelas", JSON.stringify(wali));
      loggedInWaliKelas = wali;

      document.getElementById("login-view").classList.add("hidden");
      document.getElementById("app-view").classList.remove("hidden");
      applyRolePermissions();
    } else {
      alert("Login Wali Kelas Gagal! Kredensial tidak cocok di database.");
    }
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  localStorage.removeItem("loggedInWaliKelas");
  loggedInWaliKelas = null;

  document.getElementById("app-view").classList.add("hidden");
  document.getElementById("login-view").classList.remove("hidden");
}

/* =========================================================
   3. MANAJEMEN DASHBOARD & NAVIGATION
   ========================================================= */
function toggleSubMenuInput() {
  const container = document.getElementById("submenu-input-container");
  const arrow = document.getElementById("icon-submenu-arrow");
  if (container) container.classList.toggle("hidden");
  if (arrow) arrow.classList.toggle("rotate-180");
}

async function renderDashboard() {
  const dashTitle = document.getElementById("dash-title");
  const dashSub = document.getElementById("dash-subtitle");
  const adminContent = document.getElementById("dash-admin-content");
  const waliContent = document.getElementById("dash-wali-content");

  if (currentRole === "admin") {
    if (dashTitle) dashTitle.textContent = "Dashboard Administrator eRapor";
    if (dashSub)
      dashSub.textContent =
        "Ringkasan total siswa, wali kelas, dan statistik database.";

    if (adminContent) adminContent.classList.remove("hidden");
    if (waliContent) waliContent.classList.add("hidden");

    if (!supabase) return;

    const { count: countSiswa } = await supabase
      .from("siswa")
      .select("*", { count: "exact", head: true });
    const { count: countWali } = await supabase
      .from("wali_kelas")
      .select("*", { count: "exact", head: true });

    const elSiswa = document.getElementById("dash-total-siswa");
    const elWali = document.getElementById("dash-total-walikelas");
    if (elSiswa) elSiswa.textContent = countSiswa || 0;
    if (elWali) elWali.textContent = countWali || 0;

    const progressContainer = document.getElementById(
      "dash-progress-kelas-container",
    );
    if (progressContainer) {
      progressContainer.innerHTML = "";
      const { data: listWali } = await supabase.from("wali_kelas").select("*");

      for (let k = 1; k <= 6; k++) {
        const wali = listWali
          ? listWali.find((w) => w.kelas === String(k))
          : null;
        const namaWali = wali ? wali.nama : "Belum ditentukan";

        progressContainer.innerHTML += `
          <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <div class="flex justify-between items-center mb-1">
              <span class="font-bold text-gray-800 text-sm">Kelas ${k}</span>
              <span class="text-xs font-extrabold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">Aktif</span>
            </div>
            <p class="text-xs text-gray-500 mb-2 font-medium">Wali: ${namaWali}</p>
          </div>
        `;
      }
    }
  } else {
    const kelasWali = loggedInWaliKelas ? loggedInWaliKelas.kelas : "5";
    if (dashTitle) dashTitle.textContent = `Dashboard Wali Kelas ${kelasWali}`;
    if (dashSub) dashSub.textContent = `Monitoring data kelas ${kelasWali}.`;

    if (adminContent) adminContent.classList.add("hidden");
    if (waliContent) waliContent.classList.remove("hidden");

    if (!supabase) return;

    const { count: countSiswaKls } = await supabase
      .from("siswa")
      .select("*", { count: "exact", head: true })
      .eq("kelas", kelasWali);
    const { count: countMapelKls } = await supabase
      .from("mapel")
      .select("*", { count: "exact", head: true })
      .eq("kelas", kelasWali);

    const elWaliSiswa = document.getElementById("dash-wali-total-siswa");
    const elWaliMapel = document.getElementById("dash-wali-total-mapel");
    if (elWaliSiswa) elWaliSiswa.textContent = countSiswaKls || 0;
    if (elWaliMapel) elWaliMapel.textContent = countMapelKls || 0;
  }
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
    document.getElementById(`tab-${t}`)?.classList.add("hidden");
  });

  document.getElementById(`tab-${tabName}`)?.classList.remove("hidden");

  if (tabName === "dashboard") renderDashboard();
  else if (tabName === "setting-rapor") populateFormSetting();
  else if (tabName === "kelola-mapel") renderTabelKelolaMapel();
  else if (tabName === "input-siswa") renderTabelSiswa();
  else if (tabName === "input-walikelas") renderTabelWaliKelas();
  else if (tabName === "input-mapel") updateDropdownSiswa();
  else if (tabName === "input-tahfidz") updateTahfidzDropdownSiswa();
  else if (tabName === "input-kehadiran") updateKehadiranDropdownSiswa();
  else if (tabName === "cetak-raport") updateCetakDropdownSiswa();
}

function lockKelasDropdowns(kelas) {
  [
    "select-kelas",
    "tahfidz-select-kelas",
    "kehadiran-select-kelas",
    "cetak-select-kelas",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = kelas;
      el.disabled = true;
      el.classList.add("bg-gray-100");
    }
  });
}

function unlockKelasDropdowns() {
  [
    "select-kelas",
    "tahfidz-select-kelas",
    "kehadiran-select-kelas",
    "cetak-select-kelas",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.disabled = false;
      el.classList.remove("bg-gray-100");
    }
  });
}

/* =========================================================
   4. MANAJEMEN SISWA (TABEL: siswa)
   ========================================================= */
async function renderTabelSiswa() {
  const tbody = document.getElementById("table-siswa-body");
  const selectKelas = document.getElementById("tambah-siswa-kelas");
  if (!tbody || !selectKelas || !supabase) return;

  const kelasVal = selectKelas.value;
  const { data: listSiswa, error } = await supabase
    .from("siswa")
    .select("*")
    .eq("kelas", kelasVal)
    .order("nama", { ascending: true });

  tbody.innerHTML = "";
  if (error || !listSiswa || listSiswa.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="px-4 py-3 text-center text-gray-400">Belum ada data siswa.</td></tr>`;
    return;
  }

  listSiswa.forEach((s) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-mono text-xs font-semibold text-gray-700">${s.nisn}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${s.nama}</td>
        <td class="px-4 py-3 text-center">
          <button type="button" onclick="hapusSiswa('${s.id}')" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded hover:bg-red-50 transition cursor-pointer">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

async function tambahSiswa(e) {
  e.preventDefault();
  if (!supabase) return;

  const kelas = document.getElementById("tambah-siswa-kelas").value;
  const nisn = document.getElementById("tambah-siswa-nisn").value.trim();
  const nama = document.getElementById("tambah-siswa-nama").value.trim();

  const { error } = await supabase
    .from("siswa")
    .insert([{ kelas, nisn, nama }]);

  if (error) {
    console.error("Gagal simpan ke Supabase:", error);
    alert(`Gagal menambah siswa: ${error.message}`);
  } else {
    alert(`Alhamdulillah! Siswa (${nama}) berhasil ditambahkan ke Supabase.`);
    document.getElementById("tambah-siswa-nisn").value = "";
    document.getElementById("tambah-siswa-nama").value = "";

    renderTabelSiswa();
    updateDropdownSiswa();
    updateTahfidzDropdownSiswa();
    updateKehadiranDropdownSiswa();
    updateCetakDropdownSiswa();
  }
}

async function hapusSiswa(id) {
  if (!supabase) return;
  if (confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
    const { error } = await supabase.from("siswa").delete().eq("id", id);
    if (!error) {
      renderTabelSiswa();
      updateDropdownSiswa();
    } else {
      alert(`Gagal menghapus: ${error.message}`);
    }
  }
}

/* =========================================================
   5. MANAJEMEN WALI KELAS (TABEL: wali_kelas)
   ========================================================= */
async function renderTabelWaliKelas() {
  const tbody = document.getElementById("table-walikelas-body");
  if (!tbody || !supabase) return;

  const { data: listWali, error } = await supabase
    .from("wali_kelas")
    .select("*")
    .order("kelas", { ascending: true });

  tbody.innerHTML = "";
  if (error || !listWali || listWali.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="px-4 py-3 text-center text-gray-400">Belum ada data wali kelas.</td></tr>`;
    return;
  }

  listWali.forEach((w, index) => {
    tbody.innerHTML += `
      <tr class="hover:bg-gray-50 transition">
        <td class="px-4 py-3 font-semibold text-gray-500">${index + 1}</td>
        <td class="px-4 py-3 font-bold text-brand-800">Kelas ${w.kelas}</td>
        <td class="px-4 py-3 font-bold text-gray-800">${w.nama}</td>
        <td class="px-4 py-3 text-xs text-gray-600">${w.nip || "-"}</td>
        <td class="px-4 py-3 text-xs font-bold text-brand-700">${w.username}</td>
        <td class="px-4 py-3 text-xs font-mono text-gray-600">${w.password}</td>
        <td class="px-4 py-3 text-center">
          <button type="button" onclick="hapusWaliKelas('${w.id}')" class="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 transition cursor-pointer">
            <i class="fa-solid fa-trash mr-1"></i> Hapus
          </button>
        </td>
      </tr>
    `;
  });
}

async function simpanWaliKelas(e) {
  e.preventDefault();
  if (!supabase) return;

  const kelas = document.getElementById("walikelas-kelas").value;
  const nip = document.getElementById("walikelas-nip").value.trim();
  const nama = document.getElementById("walikelas-nama").value.trim();
  const username = document.getElementById("walikelas-username").value.trim();
  const password = document.getElementById("walikelas-password").value.trim();

  const { error } = await supabase
    .from("wali_kelas")
    .upsert([{ kelas, nip, nama, username, password }], {
      onConflict: "kelas",
    });

  if (error) {
    alert(`Gagal menyimpan wali kelas: ${error.message}`);
  } else {
    alert(`Data Wali Kelas ${kelas} berhasil disimpan.`);
    renderTabelWaliKelas();
  }
}

async function hapusWaliKelas(id) {
  if (!supabase) return;
  if (confirm("Hapus wali kelas ini?")) {
    await supabase.from("wali_kelas").delete().eq("id", id);
    renderTabelWaliKelas();
  }
}

/* =========================================================
   6. MANAJEMEN MAPEL & NILAI (TABEL: mapel & nilai_mapel)
   ========================================================= */
async function renderTabelKelolaMapel() {
  const tbody = document.getElementById("table-kelola-mapel-body");
  const selectKelas = document.getElementById("tambah-mapel-kelas");
  if (!tbody || !selectKelas || !supabase) return;

  const kelasVal = selectKelas.value;
  const { data: listMapel } = await supabase
    .from("mapel")
    .select("*")
    .eq("kelas", kelasVal);

  tbody.innerHTML = "";
  if (!listMapel || listMapel.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="px-4 py-3 text-center text-gray-400">Belum ada mata pelajaran.</td></tr>`;
    return;
  }

  listMapel.forEach((m, index) => {
    tbody.innerHTML += `
      <tr>
        <td class="px-4 py-3">${index + 1}</td>
        <td class="px-4 py-3 font-bold">${m.name}</td>
        <td class="px-4 py-3 text-center">${m.value_default}</td>
        <td class="px-4 py-3 text-xs">${m.desc_default}</td>
        <td class="px-4 py-3 text-center">
          <button onclick="hapusMapel('${m.id}')" class="text-red-600 hover:text-red-800 text-xs font-semibold cursor-pointer">Hapus</button>
        </td>
      </tr>
    `;
  });
}

async function tambahMapelBaru(e) {
  e.preventDefault();
  if (!supabase) return;

  const kelas = document.getElementById("tambah-mapel-kelas").value;
  const name = document.getElementById("tambah-mapel-nama").value.trim();
  const value_default = document.getElementById("tambah-mapel-nilai").value;
  const desc_default = document
    .getElementById("tambah-mapel-desc")
    .value.trim();

  const { error } = await supabase
    .from("mapel")
    .insert([{ kelas, name, value_default, desc_default }]);
  if (error) alert(error.message);
  else {
    renderTabelKelolaMapel();
  }
}

async function hapusMapel(id) {
  if (!supabase) return;
  if (confirm("Hapus mata pelajaran ini?")) {
    await supabase.from("mapel").delete().eq("id", id);
    renderTabelKelolaMapel();
  }
}

/* =========================================================
   7. DROPDOWN SISWA HELPER FUNCTIONS
   ========================================================= */
async function populateSiswaDropdown(selectKelasId, selectSiswaId) {
  const kelasSelect = document.getElementById(selectKelasId);
  const siswaSelect = document.getElementById(selectSiswaId);
  if (!kelasSelect || !siswaSelect || !supabase) return;

  const kelasVal = kelasSelect.value;
  const { data: listSiswa } = await supabase
    .from("siswa")
    .select("*")
    .eq("kelas", kelasVal)
    .order("nama", { ascending: true });

  siswaSelect.innerHTML = "";
  if (listSiswa && listSiswa.length > 0) {
    listSiswa.forEach((s) => {
      siswaSelect.innerHTML += `<option value="${s.id}">${s.nama} (NISN: ${s.nisn})</option>`;
    });
  } else {
    siswaSelect.innerHTML = `<option value="">-- Belum ada data --</option>`;
  }
}

function updateDropdownSiswa() {
  populateSiswaDropdown("select-kelas", "select-siswa");
}
function updateTahfidzDropdownSiswa() {
  populateSiswaDropdown("tahfidz-select-kelas", "tahfidz-select-siswa");
}
function updateKehadiranDropdownSiswa() {
  populateSiswaDropdown("kehadiran-select-kelas", "kehadiran-select-siswa");
}

async function updateCetakDropdownSiswa() {
  await populateSiswaDropdown("cetak-select-kelas", "cetak-select-siswa");
  renderPrintableData(); // Otomatis trigger render rapor saat kelas diganti
}

/* =========================================================
   8. INPUT & CETAK RAPORT OTOMATIS
   ========================================================= */
async function simpanCapaianTahfidz(e) {
  e.preventDefault();
  if (!supabase) return;

  const siswa_id = document.getElementById("tahfidz-select-siswa").value;
  if (!siswa_id) return alert("Pilih siswa terlebih dahulu!");

  const dataInput = {
    siswa_id,
    ujian_tasmi: document.getElementById("tahfidz-ujian-tasmi").value,
    predikat_tasmi: document.getElementById("tahfidz-predikat-tasmi").value,
    capaian_hafalan: document.getElementById("tahfidz-capaian-hafalan").value,
    jilid_ummi: document.getElementById("ummi-jilid").value,
    halaman_ummi: document.getElementById("ummi-halaman").value,
    nilai_tajwid: document.getElementById("ummi-nilai-tajwid").value,
    catatan_ummi: document.getElementById("ummi-catatan").value,
  };

  const { error } = await supabase
    .from("capaian_tahfidz")
    .upsert([dataInput], { onConflict: "siswa_id" });
  if (error) alert(error.message);
  else alert("Alhamdulillah! Data Al-Qur'an tersimpan ke database.");
}

async function simpanKehadiranCatatan(e) {
  e.preventDefault();
  if (!supabase) return;

  const siswa_id = document.getElementById("kehadiran-select-siswa").value;
  if (!siswa_id) return alert("Pilih siswa terlebih dahulu!");

  const dataInput = {
    siswa_id,
    sakit: document.getElementById("kehadiran-sakit").value,
    izin: document.getElementById("kehadiran-izin").value,
    alpa: document.getElementById("kehadiran-alpa").value,
    catatan_wali: document.getElementById("catatan-wali-kelas").value,
  };

  const { error } = await supabase
    .from("kehadiran_catatan")
    .upsert([dataInput], { onConflict: "siswa_id" });
  if (error) alert(error.message);
  else alert("Alhamdulillah! Kehadiran & Catatan berhasil tersimpan.");
}

async function renderPrintableData() {
  if (!supabase) return;

  const kelasVal = document.getElementById("cetak-select-kelas")?.value;
  const siswaId = document.getElementById("cetak-select-siswa")?.value;

  // Reset jika belum ada siswa terdaftar pada kelas tersebut
  if (!siswaId) {
    document.getElementById("print-nama-siswa").textContent = ": -";
    document.getElementById("print-nisn-siswa").textContent = ": -";
    document.getElementById("print-kelas-siswa").textContent =
      `: Kelas ${kelasVal || "-"}`;
    document.getElementById("printable-mapel-body").innerHTML =
      `<tr><td colspan="5" class="border border-gray-400 px-2 py-2 text-center text-gray-500">Belum ada siswa dipilih</td></tr>`;
    return;
  }

  // 1. Ambil Identitas Siswa
  const { data: s } = await supabase
    .from("siswa")
    .select("*")
    .eq("id", siswaId)
    .maybeSingle();

  // 2. Ambil Capaian Tahfidz
  const { data: tf } = await supabase
    .from("capaian_tahfidz")
    .select("*")
    .eq("siswa_id", siswaId)
    .maybeSingle();

  // 3. Ambil Kehadiran & Catatan
  const { data: kh } = await supabase
    .from("kehadiran_catatan")
    .select("*")
    .eq("siswa_id", siswaId)
    .maybeSingle();

  // 4. Ambil Data Wali Kelas
  const { data: wali } = await supabase
    .from("wali_kelas")
    .select("*")
    .eq("kelas", kelasVal)
    .maybeSingle();

  // 5. Ambil Daftar Mata Pelajaran & Nilai Siswa
  const { data: listMapel } = await supabase
    .from("mapel")
    .select("*")
    .eq("kelas", kelasVal);

  const { data: listNilai } = await supabase
    .from("nilai_mapel")
    .select("*")
    .eq("siswa_id", siswaId);

  // --- RENDERING IDENTITAS SISWA ---
  if (s) {
    document.getElementById("print-nama-siswa").textContent = `: ${s.nama}`;
    document.getElementById("print-nisn-siswa").textContent = `: ${s.nisn}`;
  }
  document.getElementById("print-kelas-siswa").textContent =
    `: Kelas ${kelasVal}`;
  document.getElementById("print-tahun-ajaran").textContent =
    `: ${configRapor.tahunAjaran}`;
  document.getElementById("print-semester").textContent =
    `: ${configRapor.semester}`;
  document.getElementById("print-tanggal-cetak").textContent =
    `: ${configRapor.tanggalCetak}`;
  document.getElementById("print-titi-mangsa").textContent =
    `Diberikan di: Jakarta, ${configRapor.tanggalCetak}`;

  // --- RENDERING WALI KELAS & MUDIR ---
  document.getElementById("print-walikelas-nama").textContent = wali
    ? wali.nama
    : "-";
  document.getElementById("print-walikelas-nip").textContent = wali
    ? `NIP. ${wali.nip}`
    : "NIP. -";
  document.getElementById("print-mudir-nama").textContent =
    configRapor.namaMudir;
  document.getElementById("print-mudir-niy").textContent =
    `NIY. ${configRapor.niyMudir}`;

  // --- RENDERING TABEL MAPEL (CAPAIAN AKADEMIK) ---
  const mapelBody = document.getElementById("printable-mapel-body");
  if (mapelBody) {
    mapelBody.innerHTML = "";
    if (listMapel && listMapel.length > 0) {
      listMapel.forEach((m, index) => {
        const nil = listNilai
          ? listNilai.find((n) => n.mapel_id === m.id)
          : null;
        const nilaiAngka = nil ? nil.nilai : m.value_default || 0;
        const deskripsi = nil ? nil.deskripsi : m.desc_default || "-";

        let predikat = "C";
        if (nilaiAngka >= 90) predikat = "A (Sangat Baik)";
        else if (nilaiAngka >= 80) predikat = "B (Baik)";
        else if (nilaiAngka >= 70) predikat = "C (Cukup)";

        mapelBody.innerHTML += `
          <tr>
            <td class="border border-gray-400 px-2 py-1 text-center">${index + 1}</td>
            <td class="border border-gray-400 px-2 py-1 font-semibold">${m.name}</td>
            <td class="border border-gray-400 px-2 py-1 text-center font-bold">${nilaiAngka}</td>
            <td class="border border-gray-400 px-2 py-1 text-center font-medium">${predikat}</td>
            <td class="border border-gray-400 px-2 py-1 text-xs">${deskripsi}</td>
          </tr>
        `;
      });
    } else {
      mapelBody.innerHTML = `<tr><td colspan="5" class="border border-gray-400 px-2 py-2 text-center text-gray-500">Belum ada mata pelajaran terdaftar untuk Kelas ${kelasVal}</td></tr>`;
    }
  }

  // --- RENDERING CAPAIAN TAHFIDZ & UMMI ---
  if (tf) {
    document.getElementById("print-tahfidz-ujian").textContent =
      tf.ujian_tasmi || "-";
    document.getElementById("print-tahfidz-predikat").textContent =
      tf.predikat_tasmi || "-";
    document.getElementById("print-tahfidz-hafalan").textContent =
      tf.capaian_hafalan || "-";
    document.getElementById("print-ummi-jilid-hal").textContent =
      `${tf.jilid_ummi || "-"} (${tf.halaman_ummi || "-"})`;
    document.getElementById("print-ummi-tajwid").textContent =
      tf.nilai_tajwid || "-";
  } else {
    document.getElementById("print-tahfidz-ujian").textContent = "-";
    document.getElementById("print-tahfidz-predikat").textContent = "-";
    document.getElementById("print-tahfidz-hafalan").textContent = "-";
    document.getElementById("print-ummi-jilid-hal").textContent = "-";
    document.getElementById("print-ummi-tajwid").textContent = "-";
  }

  // --- RENDERING ABSENSI & CATATAN WALI KELAS ---
  if (kh) {
    document.getElementById("print-absen-sakit").textContent =
      `${kh.sakit || 0} Hari`;
    document.getElementById("print-absen-izin").textContent =
      `${kh.izin || 0} Hari`;
    document.getElementById("print-absen-alpa").textContent =
      `${kh.alpa || 0} Hari`;
    document.getElementById("print-catatan-wali").textContent =
      `"${kh.catatan_wali || "-"}"`;
  } else {
    document.getElementById("print-absen-sakit").textContent = "0 Hari";
    document.getElementById("print-absen-izin").textContent = "0 Hari";
    document.getElementById("print-absen-alpa").textContent = "0 Hari";
    document.getElementById("print-catatan-wali").textContent = '"-"';
  }
}

function cetakRaportPDF() {
  switchTab("cetak-raport");
  setTimeout(() => window.print(), 300);
}

function saveDataAlert() {
  alert("Alhamdulillah! Data berhasil diperbarui.");
}
