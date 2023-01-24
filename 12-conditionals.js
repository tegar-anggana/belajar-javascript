let color = 'red';

if (color === 'red') {
  console.log(true);
}

let usia = 30;
if (usia === 30) {
  console.log(true);
}

// equal sign (=) / tanda sama dengan
// satu buah (=) berarti meng-assign sesuatu
// dua buah (==) membandingkan nilai tanpa membandingkan tipe data (mencoba mengkonversi kedua nilai agar sama tipe datanya, lalu mengecek apakah sama nilainya).
// tiga buah (===) membandingkan nilai dan tipe data nya (mengecek juga apakah tipe datanya sama).

// ===
// ==
// !=
// !==
// >=
// <=
// <
// >

if (usia !== 30) {
  console.log(true);
} else {
  console.log(false);
}
// Jika (usia !== 30) bernilai false, maka jalankan yang di dalam else.

if (usia < 35) {
  if (usia > 18) {
    console.log(true)
  }
}

// menyederhanakan (jika dibutuhkan):
if (usia < 35 && usia > 18) {
  console.log(true)
}

if (usia > 30) {
  console.log('Lebih dari 30');
} else if (usia > 25) {
  console.log('Lebih dari 25');
} else {
  console.log('Kurang dari 25');
}
// disitu block else if jalan jika (usia > 30) bernilai false.
// disitu block else jalan jika (usia > 25) bernilai false.
// disitu jika (usia > 30) bernilai true maka block else if dan else tidak akan jalan. 

let a = 1;
let b = 2;

function evaluate() {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// lebih ringkas:
function evaluasi() {
  return a < b;
}

console.log(evaluate());

// ternary operator
let animal = 'cat';
const sukaKucing = animal === 'cat' ? true : false;
console.log(sukaKucing);

// Switch case
let binatang = 'anjing';
switch (binatang) {
  case 'anjing':
    console.log('anjing');
    break;
  case 'kucing':
    console.log('kucing');
    break;
  default:
    console.log('bukan anjing bukan kucing')
    break;
}
// break untuk mengakhiri jika case nya true.
// kalo tidak ada break maka akan lanjut menjalankan case berikutnya.
// default jalan jika tidak ada case yang cocok.

// Multiple parameter
switch (binatang) {
  case 'anjing':
  case 'kucing':
    console.log('antara anjing atau kucing');
    break;
  default:
    console.log('bukan anjing bukan kucing')
    break;
}