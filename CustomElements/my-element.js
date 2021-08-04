// agregamos estilos
const template = document.createElement("div");
template.innerHTML = `
  <style>
    .Texto{
      color: red;
    }
    p{
      color: blue;
    }
  </style>

  <p class="Texto" >Hola mundo 2</p>
  <p> texto ejemplo </p>
`;

// creamos la case para nuestra etiqueta de HTML
class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }

  // hacemos que se auto ejecute
  connectedCallback() {
    this.p.textContent = "Hola mundo";
    this.appendChild(this.p);

    this.appendChild(template);
  }
}

// Conectamos nuestra etiqueta HTML, con nuestra clase
customElements.define("my-element", myElement);
