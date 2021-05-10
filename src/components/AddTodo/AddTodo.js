import React, { useState } from 'react';
import { addTodo } from './../../actions';
import { connect } from 'react-redux';
import style from './AddTodo.module.css'

const AddTodo = ({ addTodo }) => {
    let [date, setDate] = useState(new Date().toLocaleDateString());
    const setTodoDate = () => {
        setDate(new Date().toLocaleDateString())
    }
    let input;
    return (

        <>
            <form onSubmit={(e) => {

                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                setTodoDate();
                addTodo(input.value, date)
                input.value = ''
            }}
            >
                <input className={style.input} ref={node => input = node} />
                <button className={style.button} id="btn" type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo);