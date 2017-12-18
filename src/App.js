import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch'
import  {log} from './until'
import {getRatings,getGoods,getSeller} from './data'
import { createStore } from 'redux';
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)


class App extends Component {
    constructor(prop){
      super()
      this.state = {
          num :0
      }
    }

    fetch(){
      this.asyncPrint('hello world', 1150);
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

   timeout(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    async  asyncPrint(value, ms) {
      await this.timeout(ms);
      console.log(value)
    }


  componentDidMount(){
      this.addTime()
      this.fetch()
    }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">庆祝第一次成功,哈哈哈</h1>
        </header>
        <p className="App-intro">

        </p>
          <p>{this.state.num}</p>

        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}
export default App;
