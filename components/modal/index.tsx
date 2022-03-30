import React from 'react';

import { ModalProps } from './index.d';

const prefixCls = 'beach-modal';

const Modal: React.FC<ModalProps> = (): JSX.Element => {
  return <div className={prefixCls}>modal</div>;
};

export default Modal;
