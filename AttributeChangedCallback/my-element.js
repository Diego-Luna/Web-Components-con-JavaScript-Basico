// creamos la case para nuestra etiqueta de HTML
class myElement extends HTMLElement {
  constructor() {
    super();
    // ponemos Shadow
    this.attachShadow({ mode: "open" });
  }

  // agregamos un opserver,
  static get observedAttributes() {
    return ["title", "parrafo", "img"];
  }

  attributeChangedCallback(attr, oldVal, newVal){
    if(attr === "title" ){
      this.title = newVal;
    }
    if(attr === "parrafo" ){
      this.parrafo = newVal;
    }
    if(attr === "img" ){
      this.img = newVal;
    }
  }

  // creamos una funcion que manejara las etiquetas HTML
  getTemplate() {
    // agregamos nuestro template
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
      <h2 >
        ${this.title}
      </h2>
      <div>
        <p>
        ${this.parrafo}
        </p>
        <img src="${this.img}" />
      </div>
    </section>

    ${this.getStyles()}
`;

    return template;
  }

  getStyles() {
    return `
      <style>
      h2{
        color: red;
      }
      </style>
    `;
  }

  // Creamos una funcion que nos agrega a nuestra aplicacion
  render() {
    // agregamos a shadowRoot, nuestro template
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  // hacemos que se auto ejecute
  connectedCallback() {
    this.render();
  }
}

// Conectamos nuestra etiqueta HTML, con nuestra clase
customElements.define("my-element", myElement);
