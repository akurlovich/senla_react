import { title } from 'process';
import React, { Component, useState } from 'react'

interface IState {
  text: string
}
interface ITodoFormProps {
  onAdd(title: string): void;
}
export default class AddTask extends Component<ITodoFormProps, IState> {
  constructor(props: ITodoFormProps) {
    super(props)
    this.state = {
      text: '',
    }
    // const [title, setTitle] = useState<string>('')
  }
  buttonHandler = () => {
    console.log('button click', this.state.text);
    this.props.onAdd(this.state.text)
    this.setState({text: ''})
  };
  inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(event.target.value);
    this.setState({ text: event.target.value})
  };
  render() {
    return (
      <div className="add-tasks">
        <p>New task</p>
        <textarea onChange={this.inputHandler}
        value={this.state.text}
        className="input-task"></textarea>
        <button onClick={this.buttonHandler} className="task-btn">ADD</button>
      </div>
    )
  }
}
