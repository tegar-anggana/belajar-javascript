// DOM (Document Object Model)
// - Cara kita berinteraksi dan memanipulasi webpage.
// - DOM memiliki struktur seperti pohon.

// Di inspector browser, ada di tab "Elements".
// Kita bisa akses struktur DOM ini melalui JavaScript.

// Single Element Selector
const list = document.getElementById('list');
// const listUl = document.querySelector('ul');
// const listUl = document.querySelector('#list');
// const listUl = document.querySelector('.list-item');
console.log(list);

// Perbedaan getElementById
// getElementById >> ID elemen nya
// querySelector >> Bisa tag, ID, class. Dia akan milih item pertama yang ditemuinnya.

// Multiple Element Selector
const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => {
  // console.log(item);
  console.log(item.textContent);
})

// remove item
list.firstElementChild.remove()
list.lastElementChild.remove()
list.firstElementChild.textContent = "New Item"
list.firstElementChild.innerText = "New Item"
list.firstElementChild.innerHTML = "<h1>New Item</h1>"

// style
list.lastElementChild.style.background = 'red'

// Events
const btn = document.getElementById('myBtn');
// btn.addEventListener('click', function(e){
// console.log(e);
// });
btn.addEventListener('click', (e) => {
  console.log(e);
})
btn.addEventListener('mouseover', (e) => {
  btn.style.background = 'blue';
  console.log(e);
})
btn.addEventListener('mouseout', (e) => {
  btn.style.background = 'red';
  console.log(e);
})