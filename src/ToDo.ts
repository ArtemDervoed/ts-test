export default class ToDo {
  private description: string;
  private isDone: boolean;
  private id: number;

 
  constructor(_id: number, _description: string, _isDone: boolean) {
    this.description = _description;
    this.isDone = _isDone;
    this.id = _id;
  }

  public createToDo = () => {
    let div = document.createElement('div');
    div.classList.add('todo');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'is_complete';
    input.id = String(this.id);
    input.checked = false;

    let h2 = document.createElement('h2');
    h2.innerText = this.description;

    let button = document.createElement('button');
    button.innerText = 'Remove';

    div.appendChild(input);
    div.appendChild(h2);
    div.appendChild(button);
    return div;
  }
}