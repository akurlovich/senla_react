// Числа
// Получить число Pi из Math и округлить его до двух знаков после точки
console.log((Math.PI).toFixed(2)) 
// Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
console.log(Math.min(10, 17, 5, 12, 15, 99, 1), Math.max(10, 17, 5, 12, 15, 99, 1))

// С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой
console.log(Math.random().toFixed(2))
// получить случайное число от 0 до Х
let x = Number;
console.log(Math.floor(Math.random() * x))
// Получить число из строки '100$' 
let arr = '100$'.split('');
console.log(arr[Math.floor(Math.random() * arr.length)]);

