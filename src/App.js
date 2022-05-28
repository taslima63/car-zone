import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import CarParts from './Pages/CarParts/CarParts';
import PartDetails from './Pages/CarParts/PartDetails';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import RequireAuth from './Pages/Login/RequireAuth';
import SignIn from './Pages/Login/SignIn';
import Signup from './Pages/Login/Signup';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
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
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='myPortfolio' element={<MyPortfolio />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='carParts' element={
          <RequireAuth>
            <CarParts />
          </RequireAuth>
        }
        ></Route>
        <Route path='/carParts/:partId' element={
          <RequireAuth>
            <PartDetails />
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
          <Route path='myProfile' element={<MyProfile />}></Route>
          <Route path="myOrder" element={<MyOrders />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="manageOrder" element={<ManageOrder />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="manageProduct" element={<ManageProducts />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
