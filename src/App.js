/* global chrome  */
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  setStorage = (value) => {
    chrome.storage.sync.set({ value: value ? value : this.state.value })
  }

  getValue = () => {
    chrome.storage.sync.get('value', (results) => {
      if (results.value) {
        this.setState({ value: results.value })
      }
    })
  }

  componentDidMount = () => {
    this.getValue()
  }

  increment = () => {
    this.setStorage(this.setState({ value: this.state.value + 1 }))
  }

  decrement = () => {
    this.setStorage(this.setState({ value: this.state.value - 1 }))
  }

  reset = () => {
    this.setStorage(this.setState({ value: 0 }))
  }

  render() {
    let value = this.state.value

    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h2>{value}</h2>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App