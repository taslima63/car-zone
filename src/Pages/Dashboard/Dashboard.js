import React from 'react';
import { Link, Outlet } from 'react-router-dom';




const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-yellow-500 text-center'>Welcome to Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Reviews</Link></li>
                    <li><Link to="/dashboard/users">Manage Admin List</Link></li>
                    <li><Link to="/dashboard/manageOrder">Manage Orders</Link></li>
                    <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;