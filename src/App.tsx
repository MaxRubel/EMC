import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Navbar />
      <header class={styles.header}>
        Hi
      </header>
      <Footer />
    </div>
  );
};

export default App;
