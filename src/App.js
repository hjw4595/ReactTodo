import React, { Component } from 'react'
import './App.css'
import TodoList from './Components/TodoList';
import TodoHeader from './Components/TodoHeader';
import TodoForm from './Components/TodoForm';

class App extends Component {
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}


export default App