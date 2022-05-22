

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import SignIn from './Pages/Login/SignIn';
import Login from './Pages/Login/SignIn';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='px-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
