//3.7.1
// var items = [1, 2, 3, 4, 5];
// var hasThree = items.some(x => x === 3);
//
// console.log(hasThree);

//3.7.2
// var tasks = [
//     {
//         title: 'Do laundry',
//         completed: true
//     },
//     {
//         title: 'Feed the cat',
//         completed: true
//     },
//     {
//         title: 'Watch the array lessons on egghead.io',
//         completed: true
//     }
// ];
//
// var list = document.querySelector('.task-list');
// list.classList.add(
//         tasks.some(task => task.completed === false)
//         ? 'task-list--uncompleted'
//         : 'task-list--completed'
// );
//
// list.innerHTML = tasks
//    .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
//    .map(x => `<li>${x}</li>`)
//    .join('');

//3.7.3
var tasks = [
   {
       title: 'Do laundry',
       completed: true
   },
   {
       title: 'Feed the cat',
       completed: true
   },
   {
       title: 'Watch the array lessons on egghead.io',
       completed: true
   }
];

function addTask(title) {
  if (tasks.some(task => task.title === title)) {
    return;
  }
  tasks.push({title: title, completed: false});
}

addTask('Feed the cat');

console.log(tasks);
