
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
