import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../redux/action/index'
const Todo = () => {
    const [inputData, setInputData] = useState('')
    const dispach = useDispatch();
    const reduxSend = () => {
        dispach(addTodo(inputData));
        setInputData('');
    }
    const list = useSelector((state) => state.todoRuducers.list);
    // ochirish
    const reduxDelete = (id) =>{
        dispach(deleteTodo(id))
  
    }
    return (
        <div className='todos'>
            <div className="todo">
                <div className="todo_input">
                    <input type="text" placeholder='' onChange={(e) => setInputData(e.target.value)} value={inputData} name="" id="" />
                    <button className='btn' onClick={reduxSend}>+</button>
                </div>
            </div>
            <div>
                {
                    list.map((lists,i) => (
                        <div className="list" key={i}>
                            <h1>{lists.data}</h1>
                            <button onClick={()=>reduxDelete(lists.id)}>-</button>
                        </div>

                    ))
                }
            </div>
                <div className="btn" onClick={()=>dispach(removeTodo())}>
                    remove
                </div>
        </div>
    )
}

export default Todo