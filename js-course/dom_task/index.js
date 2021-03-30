document.addEventListener('DOMContentLoaded', function () {
  console.clear();

// Код для задания лежит в папке 'dom_task'

// Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false

  const isParent = (parent, child) => {
    for (let i = 0; i < parent.childNodes.length; i++) {
      console.log(parent.childNodes[i]);
      console.log(child);
      (parent.childNodes[i] == child) ? console.log('True') : console.log('False');
    }
  }
  
  const first = document.querySelector('ul');
  // console.log(first);
  // console.log(first.childNodes);
  const second = document.querySelector('li');
  // console.log(second);
  isParent(first, second);

// Найти элемент который находится перед списком ul
// Найти параграф и получить его текстовые содержимое
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.
// Найти список и добавить ему класс "list"


  
});