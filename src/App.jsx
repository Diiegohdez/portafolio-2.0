import './App.css';
import Navbar from './components/Navbar';
import Abouts from './pages/Abouts';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skill from './pages/Skill';

function App() {


  return (
    <>
      <>
        <ul class="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </>
      <Navbar />
      <Home />
      <Abouts />
      <Skill />
      <Projects />
      <Contact />
    </>

  )
}

export default App
