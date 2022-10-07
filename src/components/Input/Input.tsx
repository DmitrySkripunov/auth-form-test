import { InputHTMLAttributes, useState } from 'react';
import css from './Input.module.css';

interface TInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'> {
  postfix?: JSX.Element;
}

function Input({ postfix, ...props }: TInputProps) {
  const [active, setActive] = useState(false);
  return (
    <div className={css.root}>
      <div className={`${css.background} ${active ? css.active : ''}`} />
      <input className={css.input} {...props} onClick={() => setActive(!active)} />
      {postfix && <div className={css.postfix}>{postfix}</div>}
    </div>
  );
}

export default Input;
