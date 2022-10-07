import { InputHTMLAttributes } from 'react';
import css from './Input.module.css';

interface TInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'> {
  postfix?: JSX.Element;
}

function Input({ postfix, ...props }: TInputProps) {
  return (
    <div className={css.root}>
      <input className={css.input} {...props} />
      <div className={css.background} />
      {postfix && <div className={css.postfix}>{postfix}</div>}
    </div>
  );
}

export default Input;
