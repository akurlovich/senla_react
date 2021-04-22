'use strict';

let addMessage = document.querySelector('.input-task'),
    addButton = document.querySelector('.task-btn'),
    delButtons = document.querySelectorAll('.del-btn'),
    todo = document.querySelector('.todo-list');

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

addButton.addEventListener('click', () => {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);
  displayMessages();
  // localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
  let displayMessage = '';
  todoList.forEach((item, i) => {
    displayMessage += `
    <div class="item" id='item_${i}'>
      <img class="star ${item.important ? 'star__active' : ''}" id='star-item_${i}' src="./img/star.svg" alt="">
      <p class="task-text">${item.todo}</p>
      <button class="mark-btn ${item.important ? 'btn__none' : ''}" id='mark-item_${i}'>MARK IMPORTANT</button>
      <button class="not-mark-btn ${item.important ? '' : 'btn__none'}" id='not-mark-item_${i}'>not IMPORTANT</button>
      <img class="del-btn" id='btn-item_${i}' src="./img/Delete.svg" alt="">
    </div>
    `; 
    todo.innerHTML = displayMessage;
  })
  localStorage.setItem('todo', JSON.stringify(todoList));
};

// delButtons.forEach((item, index) => {
//   item.addEventListener('click', function(event) {
//     console.log(event.target);
//     console.log(index);
//   });
// });

todo.addEventListener('click', (event) => {
  let targetIndex = event.target.getAttribute('id').slice(-1);
  console.log(event.target.classList);

  if (event.target.classList.contains('del-btn')) {
    todoList.splice(targetIndex, 1);
  }
  
  if (event.target.classList.contains('mark-btn')) {
    // console.log(document.querySelector(`#star-item_${targetIndex}`));
    document.querySelector(`#star-item_${targetIndex}`).classList.toggle('star__active');
    if (todoList[targetIndex].important) {
      todoList[targetIndex].important = false;
    } else {todoList[targetIndex].important = true};

    console.log(todoList);
  }

  if (event.target.classList.contains('not-mark-btn')) {
    // console.log(document.querySelector(`#star-item_${targetIndex}`));
    // document.querySelector(`#star-item_${targetIndex}`).classList.toggle('star__active');
    if (todoList[targetIndex].important) {
      todoList[targetIndex].important = false;
    } else {todoList[targetIndex].important = true};

    console.log(todoList);
  }

  // localStorage.setItem('todo', JSON.stringify(todoList));
  displayMessages();

});
