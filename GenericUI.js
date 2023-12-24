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
    const params = GenericUI.extractFunctionParameters(funC);
    const html = `<div>${form(params, buttonName)}</div>`;
    return html
  }
  static extractFunctionParameters(funC){
    const codeStr = funC.toString();
    const open = codeStr.indexOf("(") + 1;
    const close = codeStr.indexOf(")");
    const params = codeStr.slice(open, close).split(",");
    return params;
  }
  static buildForm(params, buttonName){
    let form = `<form method="">`;
        form += params.slice().map(param => {
          return `<input type="text" name="${param}" placeholder="${param}">`;
        });
        form += `<button onclick="genericUI.onFormSubmit()">${buttonName}</button>`;
        form += `</form>`;
    return form;
  }
}
