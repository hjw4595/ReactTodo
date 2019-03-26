import React, { Component } from 'react'
import './App.css'
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div id="main">
        <TodoList />
      </div>
    );
  }
}


export default App