import React from 'react';
import cls from 'classnames';

import { ButtonProps } from './index.d';

const prefixCls = 'beach-btn';

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'default',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cls(prefixCls, `${prefixCls}-${type}`, { [`${prefixCls}-${size}`]: size !== 'default' })}
    >
      {children}
    </button>
  );
};

export default Button;
