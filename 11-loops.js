// While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  // i = i + 1; // bisa disingkat menjadi i++
  i++;
}

// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

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
  }
]

for (let i = 0; i < people.length; i++) {
  // console.log(people[i]);
  console.log(people[i].nama);
}

for (let person of people) {
  console.log(person.kelas);
}

// high order array methods
people.forEach(function (person) {
  console.log(person.nama);
});

people.forEach(person => console.log(person.age));

const personName = people.map(person => person.nama);

const personClassF = people.filter(person => person.kelas === 'F');

console.log(personName);