import ITodo from '../Interfaces/ITodo';

export default class API {
  private db: Storage;

  constructor() {
    this.db = localStorage;
    this.init();
  }

  init = () => {
    const isExist = this.db.getItem('todos');
    if (!isExist) {
      this.db.setItem('todos', JSON.stringify([]));
    }
  }

  delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  create = (data: ITodo):ITodo | null => {
    const bank = JSON.parse(this.db.getItem('todos'));
    const isExistToDo = bank.find((item: ITodo) => data.id === item.id);
    if (isExistToDo) {
      return null
    } else {
      bank.push(data);
      this.db.setItem('todos', JSON.stringify(bank));
      return data;
    }
  }

  read = (id: number): ITodo | void => {
    const bank = JSON.parse(this.db.getItem('todos'));
    const isExistToDo = bank.find((item: ITodo) => id === item.id);
    if (isExistToDo) return isExistToDo;
    return null
  }

  update = (id: number, decription: string): ITodo | void => {
    const bank = JSON.parse(this.db.getItem('todos'));
    const isExistToDo = bank.find((item: ITodo) => id === item.id);
    if (isExistToDo) {
      // Enything
    };
  }

  delete = (id: number): void => {

  }
}