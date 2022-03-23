export const eventAttr = /^on/

export const initEvents = (el, shadowRoot) => {
  const list = el.attributes;
  for (let i = 0; i < list.length; i++) {
    let name = list[i].name
    if (eventAttr.test(name)) {
      name = name.replace(eventAttr, '');
      shadowRoot.addEventListener(name, (e) => {
        e.stopPropagation();
        shadowRoot.dispatchEvent(new CustomEvent(`be-${name}`), e);
      })
    }
  }
}