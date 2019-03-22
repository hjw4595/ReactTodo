import React, {Component} from 'react'

class TodoForm extends Component {
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" />
        <button type="submit">Add</button> 
      </form>
    );   
  }
}
  

export default TodoForm