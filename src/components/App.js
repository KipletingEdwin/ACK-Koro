import {  Routes,Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Downloads from './Downloads';
import Events from './Events';
import Projects from './Projects';
import Offerings from './Offerings';
import Contact from './Contact';
import Pic from './Pic';
import Theme from './Theme';
import Dance from './Dance';
import Rev from './Rev';




function App() {
  return (
    <div className="App">
      <Navbar  />
      <Pic/>
      <Theme/>
      <Dance/>
      <Rev/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='downloads' element={<Downloads/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='offerings' element={<Offerings/>}/>
        <Route path='contact' element={<Contact/>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
