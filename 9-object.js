// let firstName = 'John';
// let lastName = 'Smith';
// let age = 30;

// Object >> pasangan <key>: <value>
const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30
}

console.log(person);

// Mengakses object

// Dot Notation
console.log(person.firstName);

// Bracket Notation
console.log(person['lastName']);

// Saat keynya berupa variabel
let key = 'firstName';
console.log(person[key]);

const orang = {
  nama: 'Tegar Levta',
  peliharaan: ['dogs', 'cats'],
  address: {
    street: 'Jalan A.H. Nasution',
    city: 'Bandung',
    state: 'Indonesia'
  }
}

// menambah atribut baru
orang.email = 'tegarla123@gmail.com';

console.log(orang.peliharaan[0]);
console.log(orang.address.state);
console.log(orang.address['state']);
console.log(orang.email);

// menghapus key
delete orang.nama

// Deconstructing
// Menarik value dari object 
const { firstName, lastName } = person
// Agar lebih mudah, cara bacanya: "Ambil key firstName dan lastName dari object person."

console.log(firstName, lastName);

// Menarik city
const { address: { city } } = orang
// Dengan kode tsb. kita hanya menarik city nya, tanpa menarik object address.

console.log(city)

const people = [
  {
    nama: "Tegar",
    kelas: "F"
  },
  {
    nama: "Sharina",
    kelas: "F"
  },
  {
    nama: "Shabiq",
    kelas: "F"
  },
]

// array of objects dapat kita ubah ke JSON untuk keperluan data nantinya.
const peopleJSON = JSON.stringify(people);

// kembalikan ke bentuk object:
const kembaliKeObject = JSON.parse(peopleJSON);

console.log(kembaliKeObject)
console.log(peopleJSON);