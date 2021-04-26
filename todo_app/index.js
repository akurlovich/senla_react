'use strict';

const addMessage = document.querySelector('.input-task'),
    addButton = document.querySelector('.task-btn'),
    search = document.querySelector('.input-search'),
    delButtons = document.querySelectorAll('.del-btn'),
    todo = document.querySelector('.todo-list'),
    nav = document.querySelector('.navigation');

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

addButton.addEventListener('click', () => {
  if (!addMessage.value) return;
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList)); //!---------
  addMessage.value = '';
});

function displayMessages() {
  let displayMessage = '';
  if (todoList.length > 0) {
    todoList.forEach((item, i) => {
      displayMessage += `
      <div class="item" id='item_${i}'>
        <img class="star ${item.important ? 'star__active' : ''}" id='star-item_${i}' src="./img/star.svg" alt="">
        <p class="task-text ${item.checked ? 'task-checked' : ''}" id='task-item_${i}'>${item.todo}</p>
        <button class="mark-btn ${item.important ? 'btn__none' : ''}" id='mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">MARK IMPORTANT</button>
        <button class="not-mark-btn ${item.important ? '' : 'btn__none'}" id='not-mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">not IMPORTANT</button>
        <img class="del-btn" id='btn-item_${i}' src="./img/Delete.svg" alt="">
      </div>
      `; 
      todo.innerHTML = displayMessage;
    })
  } else todo.innerHTML = '';
  // localStorage.setItem('todo', JSON.stringify(todoList));
};

function displayActive() {
  let displayMessage = '';
  todo.innerHTML = '';
  console.log(todoList);
  todoList.forEach((item, i) => {
    if (item.important) {
      console.log(item);
      displayMessage += `
      <div class="item" id='item_${i}'>
        <img class="star ${item.important ? 'star__active' : ''}" id='star-item_${i}' src="./img/star.svg" alt="">
        <p class="task-text ${item.checked ? 'task-checked' : ''}" id='task-item_${i}'>${item.todo}</p>
        <button class="mark-btn ${item.important ? 'btn__none' : ''}" id='mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">MARK IMPORTANT</button>
        <button class="not-mark-btn ${item.important ? '' : 'btn__none'}" id='not-mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">not IMPORTANT</button>
        <img class="del-btn" id='btn-item_${i}' src="./img/Delete.svg" alt="">
      </div>
      `;
      todo.innerHTML = displayMessage;
    };
    // else todo.innerHTML += '';
  })
  // localStorage.setItem('todo', JSON.stringify(todoList));
};

function displayDone() {
  let displayMessage = '';
  todo.innerHTML = '';
  console.log(todoList);
  todoList.forEach((item, i) => {
    if (item.checked) {
      displayMessage += `
      <div class="item" id='item_${i}'>
        <img class="star ${item.important ? 'star__active' : ''}" id='star-item_${i}' src="./img/star.svg" alt="">
        <p class="task-text ${item.checked ? 'task-checked' : ''}" id='task-item_${i}'>${item.todo}</p>
        <button class="mark-btn ${item.important ? 'btn__none' : ''}" id='mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">MARK IMPORTANT</button>
        <button class="not-mark-btn ${item.important ? '' : 'btn__none'}" id='not-mark-item_${i}' style="display: ${item.checked ? 'none' : ''}">not IMPORTANT</button>
        <img class="del-btn" id='btn-item_${i}' src="./img/Delete.svg" alt="">
      </div>
      `; 
      todo.innerHTML = displayMessage;
    };
    // else todo.innerHTML = '';
  })
  // localStorage.setItem('todo', JSON.stringify(todoList));
};

function chooseDisplayTasks() {
  const liAll = document.querySelector('.li-all').classList.contains('active'),
        liActive = document.querySelector('.li-about').classList.contains('active'),
        liDone = document.querySelector('.li-done').classList.contains('active');
  
  if (liAll) displayMessages();
  if (liActive) displayActive();
  if (liDone) displayDone();
  localStorage.setItem('todo', JSON.stringify(todoList));

}

todo.addEventListener('click', (event) => {
  let targetIndex = event.target.getAttribute('id').slice(-1);

  if (event.target.classList.contains('del-btn')) {
    todoList.splice(targetIndex, 1);
    // localStorage.setItem('todo', JSON.stringify(todoList));
    chooseDisplayTasks();
  }
  
  if (event.target.classList.contains('mark-btn')) {
    // console.log(document.querySelector(`#star-item_${targetIndex}`));
    document.querySelector(`#star-item_${targetIndex}`).classList.toggle('star__active');
    if (todoList[targetIndex].important) {
      todoList[targetIndex].important = false;
    } else {todoList[targetIndex].important = true};

    chooseDisplayTasks();
  }

  if (event.target.classList.contains('not-mark-btn')) {
    // console.log(document.querySelector(`#star-item_${targetIndex}`));
    // document.querySelector(`#star-item_${targetIndex}`).classList.toggle('star__active');
    if (todoList[targetIndex].important) {
      todoList[targetIndex].important = false;
    } else {todoList[targetIndex].important = true};

    chooseDisplayTasks();
  }

  if (event.target.classList.contains('task-text')) {
    // console.log(document.querySelector(`#star-item_${targetIndex}`));
    // document.querySelector(`#star-item_${targetIndex}`).classList.toggle('star__active');
    if (todoList[targetIndex].checked) {
      todoList[targetIndex].checked = false;
    } else {todoList[targetIndex].checked = true};

    chooseDisplayTasks();
  }

  // localStorage.setItem('todo', JSON.stringify(todoList));
  // displayMessages();//!-------

});

nav.addEventListener('click', function(event) {
  if (event.target.classList.contains('li-all')) {
    document.querySelector('.li-all').classList.add('active');
    document.querySelector('.li-about').classList.remove('active');
    document.querySelector('.li-done').classList.remove('active');
    document.querySelector('.add-tasks').classList.remove('add-none');
    chooseDisplayTasks();

  }
  if (event.target.classList.contains('li-about')) {
    document.querySelector('.li-about').classList.add('active');
    document.querySelector('.li-all').classList.remove('active');
    document.querySelector('.li-done').classList.remove('active');
    document.querySelector('.add-tasks').classList.remove('add-none');
    console.log(todoList);
    console.log(document.querySelector('.li-about').classList.contains('active'));
    chooseDisplayTasks();

  }
  if (event.target.classList.contains('li-done')) {
    document.querySelector('.li-done').classList.add('active');
    document.querySelector('.li-all').classList.remove('active');
    document.querySelector('.li-about').classList.remove('active');
    document.querySelector('.add-tasks').classList.add('add-none');
    chooseDisplayTasks();

  }
})

search.oninput = function() {
  let value = this.value.trim(),
      list = document.querySelectorAll('.task-text');
      // console.log(list.parentNode);
      if (value != '') {
        list.forEach(elem => {
          // console.log(elem.parentNode);
          if (elem.innerHTML.search(value) == -1) {
            elem.parentNode.classList.add('text-none')
          }
        });
      } else {
        list.forEach(elem => {
          elem.parentNode.classList.remove('text-none')
        })
      }
      // console.log(this.value);
}

search.addEventListener("focusout", () => {
  search.value = '';
});