const template = document.createElement('template');

template.innerHTML = `
  <style>
    .app {
      border: 1px solid red;
    }
  </style>

  <div class="app" id="app">
    <span class="label">Label</span>
    <my-element>
      <p>This is child content</p>
    </my-element>
  </div>
`;

class App extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template)
  }
}

window.customElements.define('ui-app', App);
