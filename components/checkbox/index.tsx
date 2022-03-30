import React, { useState } from 'react';
import cls from 'classnames';

import { CheckBoxProps } from './index.d';

const prefixCls = 'beach-checkBox';

const CheckBox: React.FC<CheckBoxProps> = ({
  disabled = false,
  type = 'default',
  size = 'default',
  color,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={`${prefixCls}-${color}`}>
      <input
        onChange={handleChange}
        type={type === 'default' ? 'checkbox' : 'radio'}
        checked={checked}
        disabled={disabled}
        className={cls(prefixCls, `${prefixCls}-${type}`, { [`${prefixCls}-${size}`]: size !== 'default' })}
      />
    </div>
  );
};

export default CheckBox;
