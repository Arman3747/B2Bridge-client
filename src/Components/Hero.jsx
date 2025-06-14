import React from 'react';
import Lottie from "lottie-react";
import hero_shopping from "../assets/hero.json"

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-5xl  font-bold leading-16'>
                    Simplify Operations  For Your <br />  
                    <span className='text-green-500'>Fast-Growing</span> Brands
                </h1>
                <div className='text-2xl mt-8 text-zinc-500'>
                    {/* <span>Where Supply Meets Demand — Effortlessly !!!</span> */}
                    <p> <span className='underline decoration-green-500'>Where Supply Meets Demand - Effortlessly.</span> An end-to-end solution to manage your orders, inventory, shipments and many more !</p>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <Lottie animationData={hero_shopping} />
            </div>

        </div>
    );
};

export default Hero;