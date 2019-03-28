import React from 'react';

const TodoItem = () => {
    return (        
    <ul>
        {this.props.list.map((val,index) => 
        <li key={index}>{val} <button onClick= {this.deletList(val)}>삭제</button></li>)}
    </ul>)
}

export default TodoItem