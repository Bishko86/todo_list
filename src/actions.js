// import { store } from './store'
//actions

export const SET_PROPERTY_EDIT = 'SET_PROPERTY_EDIT';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SAVE_EDIT_TODO = 'SAVE_EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//another constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//action creators 
const indexId = () => {
    let data = JSON.parse(localStorage.getItem('dataTodo'));
    data === null || data.length === 0 ? data = 0 : data = data[data.length - 1].id + 1;
    return data;
}
export function saveEditTodo(id, text) {
    return { type: SAVE_EDIT_TODO, id, text }
}
export function editTodo(id) {
    return { type: EDIT_TODO, id }
}
export function addTodo(text) {
    return { type: ADD_TODO, text, id: indexId() }
}
export function removeTodo(id) {
    return { type: REMOVE_TODO, id }
}
export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
export function setPropertyEditing(editing) {
    return { type: SET_PROPERTY_EDIT, editing }
}