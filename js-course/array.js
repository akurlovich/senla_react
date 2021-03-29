// Используя функцию, найти последний элемент массива, не изменяя его.

const lastIndex = (arr) => console.log(arr[arr.length - 1]);

lastIndex([1,3,6]);

// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

const doubleArg = (arr) => {
  let newArr = [];
  for (let n = 1; n <= 2; n++) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
} 

doubleArg([1,3,6]);

// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
const arrNumbers = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr);
}

arrNumbers(10);

// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

const sliceFirst = (...arrs) => {
  let arrays = arrs,
      newArrays = [];

  newArrays = arrays.map(item => item.slice(1))

  // for (let i = 0; i < arrays.length; i++) {
  //   newArrays.push(arrays[i].slice(1));
  // }
  console.log(newArrays);
}
sliceFirst([1, 2, 3], ["x", "y", "z"])


// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

const stringReverse = (str) => {
  console.log(str.split('').sort((a, b) => a.localeCompare(b)).reverse().join(''));
}
stringReverse('екважбигёзд')

// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.

const numSortReverse = (arr) => {
  console.log(arr.sort((a, b) => b - a));
}
numSortReverse([5, 2, -1, 6, 9, -9, 3])

// Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер

// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.

const getNewArray = (arr, start, finish) => {
  console.log(arr.slice(start, finish + 1));
}
getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1, 3);

// Удвоить элементы массива, не используя циклы.,

const doubleItems = (arr) => console.log(arr.map(item => item * 2));
doubleItems([2, 4, 5, 8]);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.

const delItems = (arr) => {
  arr.splice(3, 1);
  arr.splice(2, 1);
  console.log(arr);
}
delItems([1, 2, 3, 4, 5]);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
const changeItems = (arr) => {
  arr.splice(3, 1, 'четвертый');
  arr.splice(2, 1, 'третий');
  console.log(arr);
}
changeItems([1, 2, 3, 4, 5]);

// Вставить в произвольный массив любое значение после второго элемента.

const addNewItem = (arr, start, item) => {
  arr.splice(start, 0, item);
  console.log(arr);
}
addNewItem(['а', 'б', 'в', 'г', 'д', 'е'], 2, 'hi');


// Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

const sortArrays = (...arrs) => {
  let arrays = arrs,
      newArrays = [];

  for (let i = 0; i < arrays.length; i++) {
    newArrays.push(arrays[i]);
  }
  newArrays.sort((a, b) => a.length - b.length);

  console.log(arrays);
  console.log(newArrays);
}
sortArrays([1, 8, 3, 4, 6], ["x", "y", "z"], [2, 10])

// Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},
// ]

let animals = [ 
  {
    kind: "tarantula", 
    info: {legs: 8, eyes: 8}
  }, 
  {
    kind: "french bulldog", 
    info: {legs: 4, eyes: 2}
  }, 
  {
    kind: "human", 
    info: {legs: 2, eyes: 2}
  }, 
  {
    kind: "lobster", 
    info: {legs: 10, eyes: 2}
  },
];

animals.sort((a, b) => a.info.legs - b.info.legs);
console.log(animals);

// Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]
// Например, filterServices(services, 20, 60).

const services = [ 
  {service: "service1", executionTime: 56}, 
  {service: "service2", executionTime: 97}, 
  {service: "service3", executionTime: 23}, 
  {service: "service4", executionTime: 65}, 
  {service: "service5", executionTime: 2}, 
  {service: "service6", executionTime: 73}, 
  {service: "service7", executionTime: 82}, 
  {service: "service8", executionTime: 19}, 
  {service: "service9", executionTime: 33}, 
  {service: "service10", executionTime: 42}, 
];

let arr = [];

const filterServices = (obj, start, finish) => {
  obj.sort((a, b) => a.executionTime - b.executionTime);
  for (let i = 0; i < obj.length; i++) {
    // console.log(obj[i].executionTime)
    if (obj[i].executionTime >= start && obj[i].executionTime <= finish) {
      arr.push(obj[i]);
    }
  }
  console.log(arr);
}

filterServices(services, 20, 60);
