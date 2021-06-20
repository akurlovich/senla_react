import React, { Component } from 'react';
import starSvg from '../img/star.svg';
import delSvg from '../img/Delete.svg'

export default class TodoItem extends Component {
  render() {
    return (
      <div className="item">
        <img className="star" src={starSvg} alt="" />
        <p className="task-text">Попить чайку</p>
        <button className="mark-btn">MARK IMPORTANT</button>
        <button className="not-mark-btn">not IMPORTANT</button>
        <img className="del-btn" src={delSvg} alt="" />
      </div>
    )
  }
}
