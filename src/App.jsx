
import './App.css';
import Header from './components/Header';
import BannerHome from './components/BannerHome';
import About from './components/About';
import Differential from './components/Differential';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';


function App() {

  return (
    <main>
      <Header />
      <BannerHome />
      <About />
      <Differential />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

