import React from 'react';
import css from './App.module.css';
import AuthForm from './components/AuthForm/AuthForm';

function App() {
  return (
    <main className={css.App}>
      <AuthForm />
    </main>
  );
}

export default App;
