export const template = document.createElement('template');

template.innerHTML = `
  <style>
    .btn {
      white-space: nowrap;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      color: #fff;
      display: inline-flex;
      align-items: center;
      border: none;
      background-color: #1890ff;
      border: 1px solid transparent;
    }

    .btn:hover {
      background-color: #40a9ff;
      cursor: pointer;
    }

    .btn:active {
      background-color: #096dd9;
    }

    .text {
      line-height: 18px;
      padding-top: 3px;
      padding-bottom: 3px;
      display: inline-flex;
    }

    button[disabled] {
      cursor: not-allowed;
      background-color: #f5f5f5;
      color: #00000040;
      border-color: #d9d9d9;
    }

    button[disabled]:hover {
      background-color: #f5f5f5;
      color: #00000040;
      cursor: not-allowed;
    }

  </style>
  <button class="btn">
    <span class="text"><slot></slot></span>
  </button>
`