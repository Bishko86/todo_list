import React from 'react';
import { addTodo } from './../../actions';
import { connect } from 'react-redux';

const AddTodo = ({ addTodo }) => {

    let input;
    return (

        <>
            <form onSubmit={e => {

                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo(input.value)
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