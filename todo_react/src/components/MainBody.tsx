import React, { Component, FC, useState } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'
import { ITodo } from '../types/types'
import TodoItem from './TodoItem'

interface ITodosState {
  todos: ITodo[];
}

interface INavLinks {
  allClassLink: string,
  activeClassLink: string,
  doneClassLink: string,
  allLink: boolean,
  aboutLink: boolean,
  doneLink: boolean,
}

const MainBody: React.FC = () => {

  const [links, setLinks] = useState<INavLinks>(
    {
    allClassLink: 'li-all active',
    activeClassLink: 'li-all',
    doneClassLink: 'li-all',
    allLink: true,
    aboutLink: false,
    doneLink: false,
    }
  );
  // useState({ newLinks });

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    if (title === '') return;
    const newTodo: ITodo = {
      todo: title,
      checked: false,
      important: false,
      id: Date.now(),
    };
    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {

  }
  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const allPageHandler = () => {
    setLinks({
      allClassLink: 'li-all active',
      activeClassLink: 'li-all',
      doneClassLink: 'li-all',
      allLink: true,
      aboutLink: false,
      doneLink: false,
    });
  }
  const activePageHandler = () => {
    setLinks({
      allClassLink: 'li-all',
      activeClassLink: 'li-all active',
      doneClassLink: 'li-all',
      allLink: false,
      aboutLink: true,
      doneLink: false,
    });
  }
  const donePageHandler = () => {
    setLinks({
      allClassLink: 'li-all',
      activeClassLink: 'li-all',
      doneClassLink: 'li-all active',
      allLink: false,
      aboutLink: false,
      doneLink: true,
    });
  }

  return (
    <main>
      <div className="line"></div>
      <nav>
        <ul className="navigation">
          <li onClick={allPageHandler} className={links.allClassLink}>All</li>
          <li onClick={activePageHandler} className={links.activeClassLink}>Active</li>
          <li onClick={donePageHandler} className={links.doneClassLink}>Done</li>
          {/* <li className="li-all active">All</li>
          <li onClick={linkHandler} className="li-about">Active</li>
          <li className="li-done">Done</li> */}
        </ul>
      </nav>
      <AddTask onAdd={addHandler} />
      {/* {qqqq && <AddTask onAdd={addHandler} />} */}
      {links.allLink && <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />}
      {links.aboutLink && <AddTask onAdd={addHandler} />}
      {links.doneLink && <TodoItem />}
    </main>
  )
}

export default MainBody;
