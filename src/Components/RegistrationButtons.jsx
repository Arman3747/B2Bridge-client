import React from 'react';
import { Link } from 'react-router';

const RegistrationButtons = () => {
    return (
        <div className='hidden lg:flex justify-center items-center gap-4'>
            <Link to="/register">
                <button className='mr-2 border-2 border-green-500 hover:border-[#333333] hover:underline hover:cursor-pointer font-bold text-xl px-6 py-3 rounded-md bg-green-500'>Register</button>
            </Link>

            <Link to="/login">
                <button className='hover:underline text-white hover:cursor-pointer bg-[#333333] font-bold text-xl px-6 py-3 rounded-md border-2 border-[#333333] hover:border-green-500 '>Login</button>
            </Link>
        </div>
    );
};

export default RegistrationButtons;