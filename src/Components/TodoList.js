import React,{Component} from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[{index:1, value:'input'}]
    }

    this.onClickClose = this.onClickClose.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  render () {
    return(
      <li className="list-group-item ">
        <div>
          <span onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}
class TodoList extends Component {
  render () {
    let items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem}/>
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}



export default TodoList