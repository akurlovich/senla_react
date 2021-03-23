// Строки
let string = 'string test example'

// Получить первую и последнюю букву строки

console.log(string[0]) 
console.log(string[string.length - 1])

// Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase()) 

// Найти положение слова string в строке
console.log(string.indexOf('string'))

// Найти положение второго пробела
console.log(string.split('').lastIndexOf(' '))

// Получить строку со 2-ого символа длинной 6 букв
console.log(string.slice(1, 7))

// Получить строку с 1 по 7 символ
console.log(string.slice(0, 6))

// Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
let x = 20,
    y = 21;

console.log(x.toString() + y.toString())