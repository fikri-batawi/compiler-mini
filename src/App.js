import './App.css';
import { React } from 'react';
import Navbar from './components/Navigation';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import Compiler from './components/Compiler';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Team />
      <Compiler />
      <Footer />
    </div>
  );
}

export default App;
