class GenericUI {
  constructor(funC){
    this.html = GenericUI.extract(funC);
    this.action = funC;
  }
  render(id){
    return this.html;
  }
  onFormSubmit(){
    
  }
  static extract(funC){
    const buttonName = funC.name;
    const inputs = [];
    let form = `<form method="">`;
    params.map(param => {
      form += `<input type="text" name="${param}" placeholder="${param}">`;
    });
    const button = `<button onclick="genericUI.onFormSubmit()">${buttonName}</button>`;
    form += button;
    form += "</form>"
    const html = `<div>${form}</div>`;
    return html
  }
}
