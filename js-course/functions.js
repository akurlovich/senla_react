// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

const multiplay = (...numbers) => {
  let arr = numbers,
      result;
  // console.log(arr);
  if (arr.length == 0) {
    result = 0;
  } else {
    result = arr.reduce((sum, item) => sum * item);
    // console.log(result)
  }
  
  return result;
}

console.log(multiplay(1, 2, 3))


// С помощью рикурсе вычислить факториал числа 10.

const factorial = (num) => {
  return (num != 1) ? num * factorial(num - 1) : 1;
};
console.log(factorial(10))


// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.

const strReverse = str => str.split('').reverse().join('');

console.log(strReverse('tests'));

// Написать функцию, которая проверяет является ли слово палиндромом

const palindrom = str => {
  let newStr = str.split('').reverse().join(''); 
  (newStr == str) ? console.log('This is palindrom') : console.log('Is not palindrom');
}

palindrom('helleh')

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")

const unicodeStr = str => {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    newStr.push(str.charCodeAt(i));
  }
  return newStr.join(' ');
}
console.log(unicodeStr('hello'))

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

const strRec = str => {
  if (str.length != 0) {
    console.log(str[0]);
    return strRec(str.slice(1));
  } else {return str}
};

strRec('test')


// Создать две функции и дать им осмысленные названия:

// первая функция принимает массив и callback, возвращая строку из обработанного массива.
// вторая функция (callback) обрабатывает каждый элемент массива 

function funStr(str) {
  return str.reverse().join('');
}

function arrayToString(arr, callback) {
  // let arrStr = arr.split('');
  console.log(callback(arr))
}

arrayToString(['a', 1, '4'], funStr);
