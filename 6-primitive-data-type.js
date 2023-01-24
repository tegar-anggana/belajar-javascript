let nama = 'Tegar'; // String literal
let usia = 30; // Number literal
let lakiLaki = true; // Boolean literal
let color = null; // Null
let list = undefined; // Undefined
let daftar; // Undefined

console.log(list); // undefined

console.log(nama); // Tegar

nama = 'Gar';

console.log(nama); // Gar

nama = nama + 'Anggana';
console.log(nama); // GarAnggana
nama = nama + ' Anggana';
console.log(nama); // Gar Anggana
nama += ' Levta';
console.log(nama); // Gar Anggana Levta

let pesan = nama + ' berusia ' + usia;
console.log(pesan); // Gar Anggana Levta berusia 30

// escape character : (\)
let message = nama + " \"berusia\" " + usia;

// membungkus dengan kutip satu (')
let informasi = nama + ' "berusia" ' + usia;

// membungkus dengan kutip dua (")
let information = nama + " 'berusia' " + usia;

// membungkus dengan backtick (`)
let infoInfo = nama + ` " 'berusia' " ` + usia; // disebut juga template literal

// template literal dengan variabel
let pesaaan = `${nama} berusia ${usia}`;

usia = usia + 5;
console.log(usia); // 35

usia /= 5;
console.log(usia); // 7

usia *= 5;
console.log(usia); // 35