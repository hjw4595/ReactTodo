import React, {Component} from 'react';

class TodoForm extends Component{
    changeInput = () => (e) =>  {
        this.setState({inputValue: e.target.value})
      }
    
      addList = (input) => (e) => {
        let listArr = this.props.list;
        listArr.push(input);
    
        this.setState({list: listArr, inputValue: ''})
      }

    render () {
        return(
        <input
        type='text'
        value={this.props.inputValue}
        onChange= {this.changeInput()}/>
        )}
}

export default TodoForm