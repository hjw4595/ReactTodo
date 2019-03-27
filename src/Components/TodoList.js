import React, {Component} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  changeInput = (input) => (e) =>  {
    this.setState({inputValue: e.target.value})
  }

  addList = (input) => (e) => {
    let listArr = this.state.list;
    listArr.push(input);

    this.setState({list: listArr, inputValue: ''})
  }

  deletList = (input) => (e) =>  {
    let listArr = this.state.list;
    listArr = listArr.filter(o => {
      if (o !== input) return o;
    });

    this.setState({list: listArr})
  }
  render() {
    return (
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        <input
          type='text'
          value={this.state.inputValue}
          onChange= {this.changeInput()}/>
        <button onClick= {this.addList(this.state.inputValue)}>추가</button>

        <ul>
          {this.state.list.map((val,index) => <li key={index}>{val}
              <button onClick= {this.deletList(val)}>삭제</button>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default TodoList