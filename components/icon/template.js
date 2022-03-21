export const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href=${new URL('iconfont.css', import.meta.url).href}>
  <style>
    .icon-pointer {
      cursor: pointer;
    }
    .icon-disabled {
      cursor: not-allowed;
    }
  </style>
  <span class="icon iconfont"></span>
`