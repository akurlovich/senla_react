document.addEventListener('DOMContentLoaded', function () {
  console.clear();

// Код для задания лежит в папке 'dom_task'

// Создать функцию которая принимает два. Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false

  const isParent = (parent, child) => {
    let bool = false;
    for (let i = 0; i < parent.childNodes.length; i++) {
      if (parent.children[i] == child) {
        bool = true;
      };
    }
    console.log(bool);
  }
  
  const first = document.querySelector('ul');
  const second = document.querySelector('li');
  
  // isParent(first, second);

// Найти элемент который находится перед списком ul

  // console.log(first.previousElementSibling);


// Найти параграф и получить его текстовые содержимое
  const paragraph = document.querySelector('p');
  // console.log(paragraph.textContent);

// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов.

const objInfo = element => {
  let objectInfo = {};
  objectInfo.type = element.nodeType;
  objectInfo.name = element.nodeName;
  objectInfo.childrens = element.children.length;
  console.log(objectInfo);
}

objInfo(first);

// Найти список и добавить ему класс "list"
first.classList.add('list');


  
});