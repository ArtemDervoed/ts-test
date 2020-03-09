import Input from './Input';
import Todo from './ToDo';
import API from './api/api';
import './style.css';


const APISKA = new API();
const formElm = document.getElementById('form');
const inputElm = document.getElementById('input');
const listElm = document.getElementById('list');
const InputField = new Input(inputElm);


formElm.onsubmit = (e) => {
  e.preventDefault();
  const NewTodo = new Todo(Math.random(), InputField.getValue(), false);
  const apiResponce =  APISKA.create(NewTodo);
  if (apiResponce) {
    InputField.clearField();
    listElm.appendChild(NewTodo.createToDo());
  }
}
