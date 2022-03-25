const initModal = Symbol('initModal');

class Modal {
  static [initModal]({ title, content, iconType, iconColor }) {
    // <link rel="stylesheet" href=${new URL('index.css', import.meta.url).href}>
    const _styles = document.createElement('style');
    _styles.innerHTML = `
      .body {
        display: flex;
      }
      .icon {
        margin-right: 16px;
      }
      .main {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;
        line-height: 1.4;
        color: #000000d9;
        margin-bottom: 8px;
        display: block;
      }
      .content {
        color: #000000d9;
        font-size: 14px;
      }
    `

    const modal = document.createElement('be-modal');
    modal.shadowRoot.querySelector('.header').remove();

    const modalBody = document.createElement('div');
    modalBody.setAttribute('slot', 'body')
    modalBody.setAttribute('class', 'body')

    const icon = document.createElement('be-icon');
    icon.setAttribute('type', iconType);
    icon.setAttribute('color', iconColor);
    icon.setAttribute('size', 22);
    icon.setAttribute('class', 'icon')

    const mainBodyEle = document.createElement('div');
    mainBodyEle.setAttribute('class', 'main')
    const titleEle = document.createElement('div');
    titleEle.setAttribute('class', 'title');
    titleEle.innerHTML = title;

    const contentEle = document.createElement('div');
    contentEle.setAttribute('class', 'content');
    contentEle.innerHTML = content;

    const footer = document.createElement('be-button');
    footer.setAttribute('slot', 'footer');
    footer.innerHTML = 'OK';
    footer.setAttribute('type', 'primary');
    footer.onclick = function() {
      modal.setAttribute('visible', false);
    }

    mainBodyEle.append(titleEle);
    mainBodyEle.append(contentEle);

    modalBody.append(icon);
    modalBody.append(mainBodyEle);

    modal.append(_styles);
    modal.append(modalBody);
    modal.append(footer);

    modal.setAttribute('visible', true);
    document.body.append(modal);
  }

  static confirm({ title, content, iconType, iconColor }) {
    this[initModal]({ title, content, iconType: iconType ?? 'warning', iconColor: iconColor ?? '#faad14' });
  }

  static warning({ title, content, iconType, iconColor }) {
    this[initModal]({ title, content, iconType: iconType ?? 'warning', iconColor: iconColor ?? '#faad14' });
  }

  static error({ title, content, iconType, iconColor }) {
    this[initModal]({ title, content, iconType: iconType ?? 'error', iconColor: iconColor ?? '#ff4d4f' });
  }

  static success({ title, content, iconType, iconColor }) {
    this[initModal]({ title, content, iconType: iconType ?? 'success', iconColor: iconColor ?? '#52c41a' });
  }
}
