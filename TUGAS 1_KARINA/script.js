const input = "Andi, 25, 100000"; 

const [nama, umurStr, uangStr] = input.split(",").map(i => i.trim());
const umur = parseInt(umurStr);
const uang = parseInt(uangStr);

// AGE LOGIC
if (umur < 21) {
  const kurangTahun = 21 - umur;
  console.log(`Maaf ${nama}, umur kamu kurang ${kurangTahun} tahun lagi`);
  process.exit();
}

// MONEY LOGIC
if (uang < 500000) {
  const kurangUang = 500000 - uang;
  console.log(`Maaf ${nama}, uang kamu cuma ${uang.toLocaleString("id-ID")}, datang lagi lain kali`);
  process.exit();
}

// ALLOWED
console.log(`Selamat datang ${nama}`);