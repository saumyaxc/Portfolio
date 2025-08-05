import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;