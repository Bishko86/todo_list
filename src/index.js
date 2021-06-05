import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { registration, newClient, loadClietsList } from './FireBase/FireBase'
console.log(store.getState());
// let email = 'polroldon@gmail.com';
// let password = '123456';
// registration(email, password);
// newClient(store.getState().todos)
// loadClietsList('Kxbo7iYiTiPZo9t1Y8iHb8iwp9o2', 'clients');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
  let state = store.getState();
  let data = JSON.stringify([...state.todos]);
  localStorage.setItem('dataTodo', data);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
