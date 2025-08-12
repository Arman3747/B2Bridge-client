import React, { use, useState } from 'react';
import NavLinks from './NavLinks';
import RegistrationButtons from './RegistrationButtons';
import ProfilePicture from './ProfilePicture';
import { AuthContext } from '../provider/AuthProvider';
import { Link, NavLink } from 'react-router';

import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {

    const { user } = use(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='max-w-[1600px] mx-auto p-4 border-b border-green-500'>
            <div className='flex gap-2 flex-row justify-between items-center sm:px-4 py-2'>
                <Link to="/">
                    <img className='h-[56px]' src="https://i.ibb.co/5gXYyPp8/white-logo-2.png" alt="Logo" />
                </Link>
                <div className='hidden lg:flex'>
                    <NavLinks></NavLinks>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    {
                        user ? <ProfilePicture></ProfilePicture> : <RegistrationButtons></RegistrationButtons>
                    }

                    <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                        }

                        <div className={`z-100 lg:hidden absolute flex flex-col justify-end duration-800 gap-2 rounded-md p-4 border border-gray-300 bg-white ${openMenu ? 'top-20 right-4' : '-top-130 right-4'}`}>

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

                            <Link to="/register">
                                <button className='w-full hover:underline text-white hover:cursor-pointer bg-[#333333] font-bold text-xl px-6 py-3 rounded-md border-2 border-[#333333] hover:border-green-500 '>Register</button>
                            </Link>

                            <Link to="/login">
                                <button className='w-full mr-2 border-2 border-green-500 hover:border-[#333333] hover:underline hover:cursor-pointer font-bold text-xl px-6 py-3 rounded-md bg-green-500'>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="divider divider-success"></div> */}
        </div>
    );
};

export default NavBar;