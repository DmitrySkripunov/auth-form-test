import React from 'react';
import css from './App.module.css';
import AuthForm from './components/AuthForm/AuthForm';

function App() {
  return (
    <main className={css.App}>
      <section>
        <AuthForm />
      </section>
    </main>
  );
}

export default App;
