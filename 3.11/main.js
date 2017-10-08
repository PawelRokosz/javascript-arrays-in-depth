//3.11.1
// const items = [1, 2, 3, 4, 5];
// const sum = items.reduce((prev, item) => {
//   console.log('prev', prev, 'item', item);
//   return prev + item;
// }, 0);
//
// console.log(sum);

//3.11.2
// const albums = [
//   {
//     title: 'Holiday in Spain',
//     images: ['01.jpg', '02.jpg']
//   },
//   {
//     title: 'House renovation',
//     images: ['03.jpg', '04.jpg', '05.jpg']
//   }
// ];
//
// const numImages = albums.reduce((prev, album) => {
//   return prev + album.images.length;
// }, 0);
//
// console.log(numImages);

//3.11.3
// const albums = [
//   {
//     title: 'Holiday in Spain',
//     images: ['01.jpg', '02.jpg']
//   },
//   {
//     title: 'House renovation',
//     images: ['03.jpg', '04.jpg', '05.jpg']
//   }
// ];
//
// const images = albums.reduce((prev, album) => {
//   return prev.concat(album.images);
// }, []);
//
// console.log(images);

//3.11.4
const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
  obj[user.id] = user
  return obj;
}, {})

console.log(newUsers);
console.log(newUsers['02'].name);
