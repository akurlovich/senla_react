// Выражения и операторы. Преобразование типов.
// Записать в коротком виде:
let a = 0;
a += 5; 
console.log(a)

let b = 5;
b *= 15;
console.log(b)

let c = 0;
c -= 3;
console.log(c)

let d = 20;
d %= 2;
console.log(d)

let k = 11
k += a;
console.log(k)

let l = 5;
l *= b;
console.log(l)

let m = 2;
m *= 3 * k;
console.log(m)
// Возвести переменную в куб, используя краткую запись.
console.log((2 ** 3))

// Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
let strSmall = 'маленький';

if (strSmall == 'маленький') {
  strSmall = 'большой';
} else {
  strSmall = 'маленький'
}
console.log(strSmall)

strSmall == 'маленький' ? strSmall = 'большой' : strSmall = 'маленький';
console.log(strSmall)

// Записать условие, используя условный оператор if: если переменная меньше нуля: присвоить ей строку “меньше нуля” если переменная равна нулю: присвоить 1 если больше нуля: используя краткую запись, умножить переменную на 10 Сделать тоже самое, используя тернарный оператор.

let num = 4;
if (num < 0) num = 'меньше нуля';
  else if (num == 0) num = 1;
    else if (num > 0) num *= 10;

console.log(num)

num < 0 ? num = 'меньше нуля' :
  num == 0 ? num = 1 : num *= 10

console.log(num)

// Используя конструктор switch, записать следующее условие:
// if(a == 'котик') {
//   console.log('котик');
// } else if(a == 'собака') {
//   console.log('собака');
// } else if(a == 'хомячок') {
//   console.log('хомячок');
// } else {
//   console.log('неизвестное науке животное');
// }
// Важно: в консоли вы должны увидеть только одно условие из 4х.
let a = 'хомячок';
switch (a) {
  case 'котик':
    console.log('котик');
    break;
  case 'собака':
    console.log('собака');
    break;
  case 'хомячок':
    console.log('хомячок');
    break;
  default:
    console.log('неизвестное науке животное');
};

// Чему равен x в каждом из примеров, объясните почему:
let x = 0 || 'строка';
console.log(x) 
let x = 1 && 'строка';
console.log(x) 
let x = null || 1;
console.log(x) 
let x = null && 1;
console.log(x) 
let x = 1 && null;
console.log(x) 
let x = null || 0 || 1;
console.log(x) 
let x = null && 0 && 1;
console.log(x) 

// Чему равен x в каждом из примеров, объясните почему:
let x = 1 + 2 + '3';
console.log(x) 
let x = 1 + 2 - '1';
console.log(x)
let x = '1' + 2 - 1;
console.log(x)
let x = true + 1;
console.log(x)
let x = +'1' + 2;
console.log(x)
let x = null + 2;
console.log(x)
let x = undefined + 2;
console.log(x)
let x = true + undefined;
console.log(x)
