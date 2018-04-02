import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbat from './component/navbar/nav-bar'
import Content from './component/content/content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbat />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> 🇹🇭 มาลองจับทหารกันก่อน จับจริงดีกว่า !! 💂🏻‍</h1>
        </header>
        <img className="img-index" src="https://media.giphy.com/media/KNSe8DxtQtLfG/giphy-downsized-large.gif" />
        <Content />
        <footer>
          <p>CopyRight © 2018 iThunnathorn </p>
        </footer>

      </div>
    );
  }
}

export default App;
