//3.4.1
// var items = [1, 2, 3, 4, 5];
// var copy = items.slice();
//
// copy.push(6);
// copy[0] = 100;
//
// console.log(items);
// console.log(copy);

//3.4.2
// var person = {name: 'Shane'};
// var items = [1, person];
// var copy = items.slice();
//
// copy[1].name = 'Sally';
//
// console.log(items);
// console.log(copy);

//3.4.3
// var items = [1, 2, 3, 4, 5];
// var copy = items.slice(0, 1);
//
// console.log(copy);

//3.4.4

var person = {
  name: 'shane-osbourne'
};

var filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';

var sections = input.split('|').map(x => x.trim());
// console.log(sections);

var ref = person[sections[0]];
// console.log(ref);

var output = sections
  .slice(1)
  .reduce((prev, next) => {
    if (filters[next]) {
      return filters[next].call(null, prev);
    }
    return prev;
  }, ref);

console.log(output);
