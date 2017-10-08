//3.5.1
// var items = ['Shane', 'Sally', 'Isaac'];
//
// items.sort();
//
// console.log(items);

//3.5.2
// var items = [10, 30, 2, 20];
//
// // items.sort();
// items.sort((a, b) => {
//   console.log(a - b);
//   return a - b
// });
//
// console.log(items);

//3.5.3
// var items = ['Shane', 'Kittie', 'Sally', 'Isaac'];
//
// items.sort((a,b) => a.length - b.length);
//
// console.log(items);

//3.5.4

var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1050
    },
    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

var list = lessons
  .sort((a, b) => b.views - a.views)
  .map(x => ` <li>${x.title} (${x.views})</li>`)
  .join('\n');

var output = `<ul>\n${list}\n</ul>`;

console.log(output);
