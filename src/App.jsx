import {Navbar} from './components/Navbar';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';

import './App.css';

function App() {
  
  return (
    <div id='outerdiv' className="bg-[#f6f3f5]  flex flex-col">
      <nav><Navbar /></nav>
    
      <About />
      <Projects />
     <Contact />
    </div>
  );
};

export default App
