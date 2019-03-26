import React,{Component} from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
  }
  changeInput(input){
    this.setState({
      inputValue: input
    })
  }

  addList(input){
    let listArr = this.state.list
    listArr.push(input);

    this.setState({
      list: listArr
    })
  }

  render () {
    return (
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        <input 
        type = 'text'
        value = {this.state.inputValue}
        onChange = { (e) => this.changeInput(e.target.value)} />
        <button onClick = {(e) => this.addList(e.target.value)}>추가</button>
      </div>
    )
  }
}


export default TodoList