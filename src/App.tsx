import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
