const input = "Budi, 17"; 

const [nama, umurStr, uangStr] = input.split(",").map(i => i.trim());
const umur = parseInt(umurStr);
const uang = parseInt(uangStr);

// ===== AGE LOGIC =====
if (umur < 21) {
  const kurangTahun = 21 - umur;
  console.log(`Maaf ${nama}, umur kamu kurang ${kurangTahun} tahun lagi`);
  process.exit();
}

console.log("Umur lolos, mengecek uang...");
