import React, { Component } from 'react';
import logo from '../img/logo.svg';
import searchLogo from '../img/Search.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__wrapper">
          <div className="logo">
            <img src={logo} alt="логотип SENLA" />
          </div>
          <div className="header__input">
            <input className="input-search" type="text" name="" id="" placeholder="Search task for to do" />
            <img className="search-icon" src={searchLogo} alt="" />
          </div>
        </div>
      </header>
    )
  }
}
