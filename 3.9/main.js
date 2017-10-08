//3.9.1
// const items = [1, 2, 3, 4, 5];
// const mapped = items.map(function(item) {
//   return item * 2;
// });
//
// console.log(items);
// console.log(mapped);

//3.9.2
// const items = ['1', '2', '3', '4', '5'];
// const mapped = items.map(function(item) {
//   return Number(item);
// });
//
// console.log(items);
// console.log(mapped);

//3.9.3
// const items = ['   Shane', 'Sally   '];
// const mapped = items.map(x => x.trim());
//
// console.log(mapped);

//3.9.4
// const names = ['Shane', 'Sally'];
// const mapped = names.map(function(name) {
//   return {
//     firstName: name
//   }
// });
//
// // console.log(mapped);
//
// mapped.forEach(function(person) {
//   console.log(person.firstName);
// });

//3.9.5
// const items = [
//   {
//     firstname: 'Shane',
//     lastname: 'Osbourne'
//   },
//   {
//     firstname: 'Sally',
//     lastname: 'Osbourne'
//   }
// ];
//
// // items.forEach(function(person) {
// //   console.log(person.firstname + ' ' + person.lastname);
// // });
//
// const mapped = items.map(x => {
//   return {
//     firstname: x.firstname,
//     lastname: x.lastname,
//     fullname: x.firstname + ' ' + x.lastname
//   };
// });
//
// mapped.forEach(function(person) {
//   console.log(person.fullname);
// });

//3.9.6
// const items = [
//   {
//     firstname: 'Shane',
//     lastname: 'Osbourne'
//   },
//   {
//     firstname: 'Sally',
//     lastname: 'Osbourne'
//   }
// ];
//
// const mapped = items.map(x => x.firstname);
//
// // console.log(mapped);
//
// function createHtmlList(items) {
//   const listElements = items.map(x => `<li>${x}</li>`).join('');
//   return `<ul>${listElements}</ul>`;
// }
//
// console.log(createHtmlList(mapped));
// console.log(createHtmlList(['Cat', 'Dot']));

//3.9.7
const items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

const mapped = items
  .filter(x => x.active)
  .map(x => x.firstname);

function createHtmlList(items) {
  const listElements = items.map(x => `<li>${x}</li>`).join('');
  return `<ul>${listElements}</ul>`;
}

console.log(createHtmlList(mapped));
