import React, { Component, ReactElement } from 'react';
import { ThisTypeNode } from 'typescript';
import TodoItem from './TodoItem';
import starSvg from '../img/star.svg';
import delSvg from '../img/Delete.svg'
import { ITodo } from '../types/types';

interface ITodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

interface IState {
  btnImportant: string,
}

export default class TodoList extends Component<ITodoListProps, IState> {
  // listItem: ReactElement[] = []
  constructor(props: ITodoListProps) {
    super(props);
    this.state = {
      btnImportant: 'not-mark-btn',
    }
    // this.btnImportant = 'text-none';
    
  }

  btnHandler = () => {
    this.setState({btnImportant: this.state.btnImportant === 'text-none' ? 'not-mark-btn' : 'text-none'});

  }
  
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => {
          return (
            <div className="item" key={todo.id}>
              <img className="star" src={starSvg} alt="" />
              <p className="task-text">{todo.todo}</p>
              <button className="mark-btn">MARK IMPORTANT</button>
              <button onClick={this.btnHandler} className={this.state.btnImportant}>not IMPORTANT</button>
              <img onClick={() => this.props.onRemove(todo.id)} className="del-btn" src={delSvg} alt="" />
            </div>
          )
        })}
        {/* {this.listItem} */}
      </div>
    )
  }
}
