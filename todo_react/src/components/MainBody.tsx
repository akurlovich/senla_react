import React, { Component } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'

export default class MainBody extends Component {
  render() {
    return (
      <main>
       <div className="line"></div>
       <nav>
          <ul className="navigation">
            <li className="li-all active">All</li>
            <li className="li-about">Active</li>
            <li className="li-done">Done</li>
          </ul>
        </nav>
        <AddTask />
        <TodoList /> 
      </main>
    )
  }
}
