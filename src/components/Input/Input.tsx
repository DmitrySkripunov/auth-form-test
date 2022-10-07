import { InputHTMLAttributes, useState } from 'react';
import css from './Input.module.css';

interface TInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'> {
  postfix?: JSX.Element;
}

function Input({ postfix, ...props }: TInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={css.root}>
      <input className={css.input} {...props} />
      <div className={`${css.background} ${focused ? css.focused : ''}`} />
      {postfix && <div className={css.postfix}>{postfix}</div>}
    </div>
  );
}

export default Input;
