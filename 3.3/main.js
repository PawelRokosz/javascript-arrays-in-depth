//3.3.1
// var family = ['Shane', 'Sally', 'Isaac'];
// var kittieExist = family.indexOf('Kittie') > -1;
//
// // console.log(family.indexOf('Kittie'));
// console.log(kittieExist);
//
// if (!kittieExist) {
//   family.push('Kittie');
// }
//
// console.log(family);

//3.3.2
// var family = ['Shane', 'Kittie', 'Sally', 'Isaac'];
//
// console.log(family.indexOf('Kittie', 2)); //-1
// console.log(family.indexOf('Kittie', 1)); //1

//3.3.3
// var shane = {
//   name: 'Shane'
// }
//
// var sally = {
//   name: 'Sally'
// }
//
// var kittie = {
//   name: 'Kittie'
// }
//
// var family = [shane, sally];
//
// console.log(family.indexOf(kittie)); //-1

//3.3.4
var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event => {
  var ext = require('path').extname(event.file);
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
