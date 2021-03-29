// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

function firstUppercase(str) {
  let arr = str.split(' '),
      newArr = [],
      newStr = '';
  for (let i = 0; i < arr.length; i++) {
    newStr = arr[i];
    newArr.push(newStr[0].toUpperCase() + newStr.slice(1, newStr.length));
  }

  return newArr.join(' ');
}
console.log(firstUppercase("Я стану крутым программистом"))
// Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

function factorial(num) {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result = result * i;
  };

  return result;
}
console.log(factorial(9))

// Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

function createString(num) {
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return ('Просветление наступит через: ' + arr.join(', '));
}
console.log(createString(10))

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

function oddNumbers(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (!(i % 2 == 0)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(oddNumbers(20))

// На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.

function firstUppercaseSpace(str) {
  let arr = str.split(' '),
      newArr = [],
      newStr = '';
  for (let i = 0; i < arr.length; i++) {
    newStr = arr[i];
    newArr.push(newStr[0].toUpperCase() + newStr.slice(1, newStr.length));
  }

  return newArr.join('');
}
console.log(firstUppercase("теперь я мастер циклов javascript"))