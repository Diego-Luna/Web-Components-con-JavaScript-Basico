# Web-Components-con-JavaScript-Basico

## 🙅‍♂️ ¿Qué problemas resuelven los Web Components?

Web components son encapsulados de código, que coexisten entre si.

Problema

* El desarrollo web se hace más complicado
  * Actualmente se tiene un ecosistema gigante de JavaScript
    * Varias tecnologías no pueden co existir en un mismo proyecto a la vez, como ser angular con react
  * Entonces debemos elegir bien un stack de tecnologías

* Para solucionar este problema existen Web Components

  * Usan estándares web, para conseguir el mismo resultado e incluso mejor
  * No necesitamos cargar ninguna librería para obtener una arquitectura más escalable

RESUMEN: El desarrollo web actualmente se está volviendo complicado debido a que existen muchas tecnologías que si bien facilitan el desarrollo no están dejando usar otras para un mismo proyecto, es ahi donde entran los webs components para obtener el mismo resultado con web api’s

## ⚙️ ¿Qué son los Web Components?

Los webs components son como piezas de lego
  * Son partes de código las cuales se pueden reutilizar para obtener un gran resultado

Estan creados para ser re utilizables
  * Encapsulando código para poder reutilizar en un proyecto o incluso diferentes proyectos sin necesidad de repetir el código

Todos los frameworks dicen tener la filosofía de ser como piezas de lego
  * Los webs components logran cumplir el objetivo completo
    * Por qué se puede implementar web components en cualquier proyecto

Los web Components son primitivos de bajo nivel que te permiten definir tus propios elementos HMTL

Te permiten:
* Generar etiquitas HTML
* Utilizar Web Standards para construirlos

Las Web API’s para utilizar web components son:
* HTML Templates
* Custom Elements ⇒ Define la etiqueta
* Shadow DOM ⇒ Encapsula el código
* ES Modules ⇒ Módulos para importar y exportar código entre archivos JS

RESUMEN: Los web components son fragmentos de código frontend los cuales se pueden usar en cualquier circunstancia sin importar las librerías o frameworks que uses. Para realizar este objetivo están compuestos por una serie de web API’s

## 🗺️ APIs de Web Components

### Custom Elements
* Es la API que te permite definir la etiqueta usando un web component
* HTML 5 implico una mejora en semántica
  * Brinda nuevas etiquetas como ser <header> <main> <section <footer> las cuales mejoran temas como ser:
    * Accesibilidad
    * Marcar secciones el código de una mejor forma
    * Mejorar la lectura del código
  * Actualmente se sigue aumentando el standard
    * Eso implica que si generamos etiquetas propias puede haber un conflicto de nombres
* Para evitar el problema de colisión de nombres se debe nombrar los elementos con dos palabras my-component
  * Debido a que el standard sigue la regla que las nuevas etiquetas que se introducen son con solo una palabra

### Shadow DOM
* No es una alternativa al virtual DOM
* La etiqueta video cuenta con Shadow DOM
  * Esta etiqueta cuenta con cosas programadas como ser
    * Botones de play, pausa y agrandar
    * Barras interactivas como ser el avance del video y el volumen del mismo
    * Estilos propios
  * Los estilos nunca tendrán un conflicto con nuestros estilos debido a que está usando el shadow DOM
* Es decir que el código vive dentro del shadow DOM y no coexiste con el código de afuera
  * Resolviendo el problema de conflictos con los estilos

### HTML Template
* Es una etiqueta de HTML
* No se puede usar directamente con HTML
  * Se debe usar JS para utilizarla
* Regresa un document fragment
  * Es un fragmento, parte del document que necesita ser clonado para ser renderizado
* Utilizar esta etiqueta hace que todo el contenido no se muestre
  * Nos da performance, porque no se renderiza directamente


### ES Modules
* Nos permite re utilizar el código de otros archivos
* HTML Imports
  * Importaba el contenido HTML de otro
  * Pero no fue standard

RESUMEN: Para crear web components se necesitan cuatro tecnologías, Custom Elements para crear etiquetas de HTML, Shadow DOM para no tener conflictos con el código externo y pueda vivir nuestro código en diferentes lugares y finalmente ES Modules para poder reutilizar el código

## ✅ Beneficios de Web Components

* Reutilización

Don’t repeat yourself
Web Components ⇒ Construyes una sola vez y lo utilizas para siempre

* Legibilidad

Reduce el código a cosas más simples y directas

* Mantenibilidad

Cada uno de los componentes pueden ser escritos y probados de forma individual

Si un componente se rompe entonces no afectara al resto de la aplicación

* Interoperabilidad

Los frameworks y librerías no están hechos para coexistir entre ellos

Los web components si

* Consistencia

Los componentes pueden vivir en cualquier framework o librería

Puede llegar a ser bastante personalizable

## ♻️ Ciclo de vida de un componente

Son parte del critical Render Path
Las clases cuando generamos un constructor generamos están guardando en memoria que es lo que tiene el constructor
* Todos los componentes deben tener un constructor
* Una mala práctica es pintar el template directamente el template en el constructor
  * En el constructor solo se debe asegurar todo lo que está en memoria exista para pintar el componente


1. connectedCallback
  * Es cuando ya es un nodo del DOM
  * Aqui es donde se pueden renderizar el HTML y CSS

2. disconnectedCallback
  * Es cuando quitamos del DOM (desconectar) el componente
  * Cuando queramos liberar memoria los cuales está consumiendo nuestro componente

3. attibuteChangedCallback
  * Cuando exista un cambio de los atributos del componente este método nos avisara que cambiaron

4. adoptedCallback
  * Cuando un componente va a ser adoptado en otra cosa como ser un iframe
  * No es muy usado

## Repaso

* document.createElement: Crea una nueva etiqueta en memoria
* element.setAttribute: Establece un atributo a alguna etiqueta
* element.getAttribute: Obtiene el atributo de una etiqueta
* element.textContent: Establece el contenido en texto de una etiqueta
* element.innerHTML: Establece el contenido HTML de una etiqueta
* element.appendChild: Inserta esa etiqueta que estaba en memoria al DOM real

También recordemos que no es buna práctica usar innerHTML 👀

## Content Slot: Manejo de datos

Es una etiqueta de HTML 5 que nos va a ayudar a poder generar el placeholder en donde irá el texto o cierto contenido que necesitos para que, afuera de le etiqueta, nosotros podamos pasarle contenido que el componente pueda renderizar.

Básicamente modificamos la etiqueta en HTML y JS hará el trabajo sucio por nosotros.

HTML:
```html
  <my-element>
    Soy texto dentro del slot
  </my-element>
```
JS:

```js
  <section>
    <h2>
      <slot></slot> <!---En el slot tendremos el texto que tenemos en la etiqueta de my element--->
    </h2>
  </section>
```
