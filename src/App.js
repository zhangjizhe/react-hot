import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(prop){
      super()
      this.state = {
          num :0
      }
    }

    addTime(){
        let temp = 0
        setInterval(() => {
            temp++
            this.setState({
                num:temp
            })
        },500)
    }

    componentDidMount(){
        this.addTime()
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">庆祝第一次成功,哈哈哈</h1>
        </header>
        <p className="App-intro">

        </p>
          <p>{this.state.num}</p>
      </div>
    );
  }
}
export default App;
