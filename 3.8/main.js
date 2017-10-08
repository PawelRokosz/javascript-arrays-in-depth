//3.8.1
// const pets = ['Cat', 'Dot'];
// const wishlist = ['Hamster', 'Horse', 'Snake'];
//
// pets.push.apply(pets, wishlist);
// // pets.push('Hamster', 'Horse');
//
// console.log(pets);

//3.8.2

const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

const pets = [];

button.addEventListener('click', function(evt) {
  if (input.value.length > 0) {
    pets.push(input.value);
    input.value = '';
    render();
  }
});

function render() {
  list.innerHTML = pets.map(x => `<li>${x}</li>`).join('');
}
