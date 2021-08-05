// creamos la case para nuestra etiqueta de HTML
class myElement extends HTMLElement {
  constructor() {
    super();
    // ponemos Shadow
    this.attachShadow({ mode: "open" });

    // optenemos los atributoa de la etiqueta
    this.title = this.getAttribute("title");
    this.parrafo = this.getAttribute("parrafo");
    this.img = this.getAttribute("img");
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
