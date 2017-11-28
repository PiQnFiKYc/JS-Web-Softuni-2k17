import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import Roster from './components/Roster'

class App extends Component {
constructor(){
  super()

  this.state = {
    epOnFocus : 0
  }

  this.changeEp = (ep)=>{
    this.setState({epOnFocus:ep})
  }
}

  render() {
    return (
      <div className="App">
        <Slider />
        <Roster />
      </div>
    );
  }
}

export default App;
