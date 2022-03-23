import {FC, useState} from 'react';
import cls from "classnames";

export interface CheckBoxProps {
  disabled?: boolean;
}

const prefixCls = 'beach-checkBox';

const CheckBox:FC<CheckBoxProps> = ({disabled = false}:CheckBoxProps) => {

  const [checked,setChecked]=useState(false)
  const handleChange = () => {
    setChecked(!checked);
  }

return(
  <input onChange={handleChange} type="checkbox" checked={checked} disabled={disabled} className={cls(prefixCls, `${prefixCls}-${disabled}`)}/>
)
}

export default CheckBox;
