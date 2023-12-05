import './App.css';
import Navbar from './components/Navbar';
import Abouts from './pages/Abouts';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import BackgroundPage from './components/BackgroundPage';

function App() {


  return (
    <>
      <Navbar />
      <BackgroundPage />
      <Home />
      <Abouts />
      <Skill />
      <Projects />
      <Contact />
    </>

  )
}

export default App
