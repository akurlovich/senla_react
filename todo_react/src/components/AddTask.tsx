import React, { Component } from 'react'

export default class AddTask extends Component {
  render() {
    return (
      <div className="add-tasks">
        <p>New task</p>
        <textarea className="input-task"></textarea>
        <button className="task-btn">ADD</button>
      </div>
    )
  }
}
