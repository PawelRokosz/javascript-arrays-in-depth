//3.1.1
// var items = [1, 2];
// var newItems = items.concat(3, 4, 5, 'string', undefined, [1, 2, 3, [1, 2]]);
// console.log(newItems);

//3.1.2
var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

people
  .concat(people2)
  .forEach(function(person) {
    console.log(person.name);
  });
