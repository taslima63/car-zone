

import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarParts from './Pages/CarParts/CarParts';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import RequireAuth from './Pages/Login/RequireAuth';
import SignIn from './Pages/Login/SignIn';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='carParts' element={
          <RequireAuth>
            <CarParts />
          </RequireAuth>
        }
        ></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="myOrder" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="manageOrder" element={<ManageOrder />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="manageProduct" element={<ManageProducts />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
