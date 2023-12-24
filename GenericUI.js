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
    let form = `<form method="">`;
    const params = GenericUI.extractFunctionParameters(funC);
    params.map(param => {
      form += `<input type="text" name="${param}" placeholder="${param}">`;
    });
    const button = `<button onclick="genericUI.onFormSubmit()">${buttonName}</button>`;
    form += button;
    form += "</form>"
    const html = `<div>${form}</div>`;
    return html
  }
  static extractFunctionParameters(funC){
    const codeStr = funC.toString();
    const open = codeStr.indexOf("(");
    const close = codeStr.indexOf(")");
    const params = codeStr.slice(open, close);
    return params;
  }
}
