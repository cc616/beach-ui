import {FC} from "react";

import './index.less';
import cls from "classnames";

const prefixCls = 'beach-input';

export interface InputProps {
  maxLength: number;
  type: 'default' | 'underline' | 'bold';
  disabled: boolean;
}

const Input : FC<InputProps> = ({disabled, maxLength = 256, type='default'}: InputProps) => {
  const handleChange = (e) => {
    if(e.target.value.length > maxLength) {
      alert('exceed max length!');
      return null;
    }
    return e.target.value;
  };

  return(<input type='text' disabled={disabled} onChange={handleChange} className={cls(prefixCls, `${prefixCls}-${type}`)}/>)
}

export default Input;
