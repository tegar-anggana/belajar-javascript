// Array Literals

// const numbers = new Array(1, 2, 3, 4, 5, 6);

// bisa juga ditulis:
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers); // [1, 2, 3, 4, 5, 6]

// index dimulai dari 0
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3

// ubah elemen
numbers[3] = 9; // mengubah isi array
console.log(numbers); // [1, 2, 9, 4, 5, 6]

// Eh tunggu tunggu, kita ngubah isi array yang merupakan constant?
// Well, memang betul, constant tidak bisa di-reassign.
// Yang kita lakukan tadi bukanlah reassign, tetapi memutasi array (mutating)
// Jadi, kita bisa mengubah isi array, tetapi tidak bisa me-reassign array.

const colors = ['red', 'blue', 'green', 'yellow'];

colors[4] = 'black';
console.log(colors); // ['red', 'blue', 'green', 'yellow', 'black']

// jumlah item yang ada di array
console.log(colors.length); // 5

// menambah item terakhir array
colors.push('white');
console.log(colors); // ['red', 'blue', 'green', 'yellow', 'black', 'white']

// menghapus item terakhir array
colors.pop();
console.log(colors); // ['red', 'blue', 'green', 'yellow', 'black']

// dia mereturn color yang diapus;
let lastColor = colors.pop();
console.log(lastColor); // black

// menghapus item pertama array
let firstColor = colors.shift();
console.log(firstColor); // 'red'
console.log(colors); // ['blue', 'green', 'yellow']

// mendapat index
console.log(colors.indexOf('yellow')); // 2

// tipe data campuran
const myArray = ['red', 4, true, null, [1, 2, 3]];
console.log(myArray); // ['red', 4, true, null, Array(3)]

console.log(myArray[4]); // [1, 2, 3];
console.log(myArray[4][0]); // 1