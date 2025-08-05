import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const NavLinks = () => {

    const { user } = use(AuthContext);

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/">Home</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/categories/all">Categories</NavLink>
            {
                user && <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/add">Add</NavLink>
            }
            
            {
                user && <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/allProducts">All Products</NavLink>
            }

            {
                user && <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/myProducts">My Products</NavLink>
            }
            
            {
                user && <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/cart">Cart Page</NavLink>
            }
            
            {
                user ? " " : <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/terms">Terms and Conditions</NavLink>
            }
            {
                user ? " " : <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/privacy">Privacy Policy</NavLink>
            }

            {
                user ? " " : <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/aboutUs">About Us</NavLink>
            }
            
        </div>
    );
};

export default NavLinks;