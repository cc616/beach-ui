export const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href=${new URL('index.css', import.meta.url).href}>
  <be-portal>
    <div class="mask" />
    <div class="modalWrapper">
      <div class="container">
        <div class="modal">
          <div class="header">
            <div class="title">
              <slot name="header"></slot>
            </div>
            <be-icon type="close" class="close" color="#00000073" pointer></be-icon>
          </div>
          <div class="body">
            <slot name="body"></slot>
          </div>
          <div class="footer">
            <slot name="footer">
              <div class="defaultFooter">
                <be-button type="default">CANCEL</be-button>
                <be-button type="primary">OK</be-button>
              </div>
            <slot>
          </div>
        </div>
      </div>
    </div>
  </be-portal>
`