import React, { Component, ReactElement } from 'react';
import { ThisTypeNode } from 'typescript';
import TodoItem from './TodoItem';

interface IProps {

}

interface IState {

}
export default class TodoList extends Component<IProps, IState> {
  listItem: ReactElement[] = []
  constructor(props: IProps) {
    super(props);
    for (let i = 0; i < 5; i++) {
      this.listItem.push(<TodoItem/>)

    }

  }
  render() {
    return (
      <div className="todo-list">
        {this.listItem}
      </div>
    )
  }
}
