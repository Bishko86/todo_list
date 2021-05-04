import React, { useState } from 'react';
import { addTodo } from './../../actions';
import { connect } from 'react-redux';

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
                <input ref={node => input = node} />
                <button id="btn" type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo);