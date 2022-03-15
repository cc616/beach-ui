import { html } from 'lit-html';
import './PopUpInfo';

export default {
  title: 'popup-info',
};

export const Primary = () =>
  html`
    <popup-info
      img="https://img.ixintu.com/download/jpg/20200809/fb372bc5cf2bdfc2f8a205f85669ee10_512_512.jpg"
      data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."
    ></popup-info>
  `;
