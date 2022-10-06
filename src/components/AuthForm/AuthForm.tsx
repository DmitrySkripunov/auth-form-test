import React, { useState } from 'react';
import css from './AuthForm.module.css';
import Owl from '../Owl/Owl';

function AuthForm() {
  const [hide, setHide] = useState(false);


  return (
    <form className={css.root} onClick={() => setHide(!hide)}>
        <Owl shy={hide} />

        <input />
    </form>
  );
}

export default AuthForm;
