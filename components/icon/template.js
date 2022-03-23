export const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href=${new URL('iconfont.css', import.meta.url).href}>
  <link rel="stylesheet" href=${new URL('index.css', import.meta.url).href}>
  <span class="icon iconfont"></span>
`