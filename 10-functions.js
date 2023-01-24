// Functions
function hello() {
  console.log('Hello world');
}

// Function perlu dipanggil untuk dipakai:
hello();

// Function Parameter
function halo(nama) {
  console.log('Halo ' + nama);
}

halo('Tegar'); // Halo Tegar

function hallo(namaDepan, namaBelakang) {
  console.log(`Halo ${namaDepan} ${namaBelakang}`);
}

hallo("Tegar", "Levta"); // Halo Tegar Levta

// nilai return
function convertPercent(num) {
  return num / 100;
}

console.log(convertPercent(50));

// ES6 Arrow Function
// Misal, mengubah function convertPercent menjadi arrow function:

const konversiPersen = (num) => {
  return num / 100;
}

console.log(konversiPersen(50));

// Block fungsi = bagian yang ada di dalam kurawal ({})
// Karna di dalam blok fungsi hanya ada satu line, yang isinya mereturn, maka bisa dihilangkan kurawalnya:

const konversiPersentasi = (num) => num / 100;

// Kemudian karena fungsi tsb. hanya butuh 1 parameter, maka bisa dihilangkan parentheses () nya:

const convertPersen = num => num / 100;