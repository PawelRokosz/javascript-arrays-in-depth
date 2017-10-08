//3.10.1
// const items = [5, 1, 2, 3, 4];
// const result = items.every(x => {
//   console.log('Called with', x);
//   return x < 5;
// });
//
// console.log(result);

//3.10.2
// const items = ['01', '02', 3, '04', '05'];
// const result = items.every(x => typeof x === 'string');
//
// console.log(result);

//3.10.3
// const fields = [
//   {
//     filed: 'email',
//     value: 'shane@example.com',
//     errors: []
//   },
//   {
//     filed: 'name',
//     value: '',
//     errors: ['No name provided']
//   }
// ];
//
// const isValid = fields.every(x => x.errors.length === 0);
//
// console.log(isValid);

//3.10.4
var videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
  return x.viewed === x.length;
}

const isComplete = videos.every(complete);
const completed = videos.filter(complete);

console.log(isComplete);
console.log(completed)
