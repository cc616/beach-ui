import { FC, ReactNode } from 'react';
import cls from 'classnames';

import './index.less';

const prefixCls = 'beach-btn';

export interface ButtonProps {
  type: 'primary' | 'default' | 'ghost' | 'link' | 'text';
  size: 'lg' | 'default' | 'sm';
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type = 'default', size, disabled = false }: ButtonProps) => {
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
