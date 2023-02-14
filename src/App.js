import './App.css';
import Home from "./Component/Home"
import About from './Component/About';
import Experience from './Component/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About /> 
      <Experience />
    </div>
  );
}

export default App;
