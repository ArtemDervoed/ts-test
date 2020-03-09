export default class Input {
  private input: HTMLElement;
  private value: string;

  constructor(_input:  HTMLElement) {
    this.input = _input;
    this.value = '';
    
    this.input.addEventListener('input', this.handleChange)
  }

  public getValue = () => {
    return this.value;
  }

  public clearField = () => {
    this.value = '';
    (this.input as HTMLInputElement).value = '';
  }

  private handleChange = (e: any) => {
    this.value = e.target.value;
  }
}