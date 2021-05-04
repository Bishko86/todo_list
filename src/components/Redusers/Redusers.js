import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SAVE_EDIT_TODO, VisibilityFilters } from "../../actions";
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

let initialState = JSON.parse(localStorage.getItem('dataTodo'));
if (initialState === null) initialState = [];

function todos(state = initialState, action) {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    date: action.date
                }
            ]

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )

        case REMOVE_TODO:
            return state.filter(item => item.id !== action.id)

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo } : todo)

        case SAVE_EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, text: action.text } : todo)
        default:
            return state
    }

}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }

}


const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;
