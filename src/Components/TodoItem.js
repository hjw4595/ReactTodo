import React from 'react';

const TodoItem = (props) => {
    return (        
    <ul>
        {props.list.map((val,index) => 
        <li key={index}>{val} <button onClick= {props.deletList}>삭제</button></li>)}
    </ul>)
}

export default TodoItem