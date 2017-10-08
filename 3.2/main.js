//3.2.1
// var names = ['Shane', 'Osbourne'];
//
// // console.log(names[0] + ' ' + names[1]);
// console.log(names.join(' '));

//3.2.2
// var help = [
//   'Usage',
//   '    foo-app <input>'
// ];
//
// if (process.argv[2] === 'help') {
//   console.log(help.join('\n'));
// }

//3.2.3
var name = 'shane osbourne';

var upper = name.split(' ')
  .map(x => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ');

console.log(upper);
