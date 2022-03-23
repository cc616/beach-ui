export const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href=${new URL('index.css', import.meta.url).href}>
  <button class="btn">
    <slot name="button-icon"></slot>
    <span class="text"><slot></slot></span>
  </button>
`