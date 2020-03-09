import Input from './Input';
import Todo from './ToDo';
import './style.css';


const formElm = document.getElementById('form');
const inputElm = document.getElementById('input');
const listElm = document.getElementById('list');
const InputField = new Input(inputElm);


formElm.onsubmit = (e) => {
  e.preventDefault();
  const NewTodo = new Todo(0, InputField.getValue(), true);
  InputField.clearField();
  listElm.appendChild(NewTodo.createToDo());
}