import React, { useEffect, useState } from 'react';

import cls from 'classnames';

import { InputProps } from './index.d';

const prefixCls = 'beach-input';

const Input: React.FC<InputProps> = ({
  disabled,
  maxLength = 256,
  type = 'default',
  placeHolder = `max length is ${maxLength}`,
  content = 'number',
}: InputProps) => {
  const [value, setValue] = useState('');
  const [inputRegex, setInputRegex] = useState(/^\d*$/);

  useEffect(() => {
    content === 'string' ? setInputRegex(/^[a-z][A-z]*$/) : setInputRegex(/^\d*$/);
  }, [content]);

  const handleChange = (e) => {
    if (inputRegex.test(e.target.value)) {
      if (e.target.value.length > maxLength) {
        alert('exceed max length!');
        setValue('');
      } else {
        setValue(e.target.value);
      }
    } else {
      alert(`input should be ${content}`);
      setValue('');
    }
  };

  return (
    <input
      type="text"
      disabled={disabled}
      onChange={handleChange}
      value={value}
      placeholder={placeHolder}
      className={cls(prefixCls, `${prefixCls}-${type}`)}
    />
  );
};

export default Input;
