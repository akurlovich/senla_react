//   Получить и вывести в консоль:
// head
  const head = document.querySelector('head');
  console.log(head);
// body
  const body = document.querySelector('body');
  console.log(body);
  console.log(body.childNodes)
// все дочерние элементы body
  console.log(body.childNodes)
// первый div и все его дочерние узлы 4.1 вывести все дочерние узлы в консоль 4.2 вывести все дочерние узлы в консоль кроме первого
const div = document.querySelector('div');
console.log(div);
console.log(div.childNodes);
console.log(div.children)
for (let i = 1; i < div.children.length; i++) {
  console.log(div.children[i]);
}
