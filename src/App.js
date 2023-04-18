import './App.css';
import Home from "./Component/Home"
import About from './Component/About';
import Experience from './Component/Experience';
import Project from './Component/Project';
import MicroProjects from './Component/MicroProjects.js';
import Contact from "./Component/Contact";
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Home />
      <About /> 
      <Experience />
      <Project />
      <MicroProjects />
      <Contact />
      <Footer />

     </div>
  );
}

export default App;
