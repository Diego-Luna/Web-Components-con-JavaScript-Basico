class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hola desde el constructor - Memoria");
  }

  connectedCallback(){
    console.log("Hola desde el DOM");
  }

  disconnectedCallback(){
    console.log("adios del dom");
  }

}

customElements.define("my-custome-element", MyCustomElement);


document.querySelector("my-custome-element").remove();