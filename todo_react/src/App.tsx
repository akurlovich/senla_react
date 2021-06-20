import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import './css/style.css';
import mainBgImg from './img/taking_notes.png'

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className="container">
          <img src={mainBgImg} />
        </div>
        <div className='main__wrapper'>
          <Header />
          <MainBody />
        </div>
      </div>
    );
  }
};

export default App;
