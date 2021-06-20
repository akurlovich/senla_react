import React from 'react';
import './css/style.css';
import mainBgImg from './img/taking_notes.png'

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className="container">
          <img src={mainBgImg} />
        </div>
      </div>
    );
  }
};

export default App;
