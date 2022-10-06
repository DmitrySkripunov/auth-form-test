import React, { InputHTMLAttributes } from 'react';
import css from './Input.module.css';

interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
  postfix?: React.ReactHTML,
  marginBottom?: number | string,
};

function Input({postfix, marginBottom, ...props}: TInputProps) {
  const style = {
    marginBottom: '0'
  };
  if (marginBottom) {
    style.marginBottom = typeof marginBottom === 'number' ? `${marginBottom}px` : marginBottom;
  }
  return <input className={css.root} style={style} {...props}/>;
}

export default Input;
