import React, { useState } from 'react';
import css from './AuthForm.module.css';
import Owl from '../Owl/Owl';
import Input from '../Input/Input';
import LockPassword from '../icons/LockPassword';
import Envelope from '../icons/Envelope';

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
        id="email"
        required
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        postfix={<Envelope />}
      />

      <label htmlFor="password">Password</label>
      <Input
        type="password"
        id="password"
        required
        value={password}
        onFocus={() => setHide(true)}
        onBlur={() => setHide(false)}
        onChange={(evt) => setPassword(evt.target.value)}
        postfix={<LockPassword />}
      />

      <button className={css.signInButton}>SIGN IN</button>

      <a className={css.forgotPasswordLink} href="/forgot-password">
        Forgot your password?
      </a>
    </form>
  );
}

export default AuthForm;
