import React, { useState } from 'react';
import css from './AuthForm.module.css';
import Owl from '../Owl/Owl';
import Input from '../Input/Input';
import lockPasswordSvg from '../../assets/lock-password.svg';

function AuthForm() {
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    console.log(email, password);

    return false;
  };

  return (
    <form className={css.root} onSubmit={submit}>
      <Owl shy={hide} />
      <div className={css.logo}>owl post</div>
      <h1 className={css.header}>Log In to Owl Post</h1>

      <label htmlFor="email">E-Mail</label>
      <Input
        type="email"
        marginBottom={16}
        id="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        postfix={lockPasswordSvg}
      />

      <label htmlFor="password">Password</label>
      <Input
        type="password"
        marginBottom={16}
        id="password"
        value={password}
        onFocus={() => setHide(true)}
        onBlur={() => setHide(false)}
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <button className={css.signInButton}>SIGN IN</button>
    </form>
  );
}

export default AuthForm;
