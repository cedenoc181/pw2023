import './App.css';
import Home from "./Component/Home"
import About from './Component/About';
import Experience from './Component/Experience';
import Project from './Component/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About /> 
      <Experience />
      <Project />
    </div>
  );
}

export default App;
