export const template = document.createElement('template');

template.innerHTML = `
  <style>
    .btn {
      white-space: nowrap;
      text-align: center;
      position: relative;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      display: inline-flex;
      align-items: center;
      border: none;
      font-size: 14px;
      border: 1px solid transparent;
      border-radius: 2px;
    }

    .btn:hover {
      cursor: pointer;
    }

    .primary {
      background-color: #1890ff;
      color: #fff;
    }

    .primary:active {
      background-color: #096dd9;
    }

    .primary:hover {
      background-color: #40a9ff;
    }

    .default {
      color: rgba(0, 0, 0, 0.85);
      border-color: #d9d9d9;
      background: none;
    }

    .medium {
      font-size: 14px;
      padding: 4px 15px;
    }

    .large {
      font-size: 16px;
      padding: 6px 15px;
    }

    .small {
      font-size: 14px;
      padding: 0 7px;
    }

    .btn .loading {
      margin-left: 8px;
      display: inline-flex;
    }

    .text {
      line-height: 18px;
      padding-top: 3px;
      padding-bottom: 3px;
      display: inline-flex;
    }

    .btn[loading]::before {
      background: #fff;
      cursor: not-allowed;
      content: '';
      opacity: 0.35;
      position: absolute;
      top: -1px;
      right: -1px;
      bottom: -1px;
      left: -1px;
      z-index: 1;
    }

    .btn[disabled] {
      cursor: not-allowed;
      background-color: #f5f5f5;
      color: #00000040;
      border-color: #d9d9d9;
    }

    .btn[disabled]:hover {
      background-color: #f5f5f5;
      color: #00000040;
      cursor: not-allowed;
    }

  </style>
  <button class="btn">
    <span class="text"><slot></slot></span>
  </button>
`