import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold'><span className='border-b-2 border-green-500'>Who We Are & What We Do</span></h1>
                <br />
                <p className='text-2xl text-justify'>
                    B2Bridge is a modern B2B marketplace that connects businesses looking to sell, promote, or source products online. Whether you're a supplier aiming to reach new clients or a retailer searching for trusted wholesale products, B2Bridge makes the buying and selling process seamless, secure, and scalable.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-green-500'>Our Mission</span></h1>
                <br />
                <p className='text-2xl text-justify'>
                    Our mission is to empower businesses by providing a smart, reliable, and transparent platform for B2B transactions. We’re committed to simplifying digital commerce while building a trusted ecosystem for business owners, entrepreneurs, and wholesale partners.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-green-500'>Why Choose B2Bridge?</span></h1>
                <br />

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Post and manage your products effortlessly</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Search by category, price, location, or business needs</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Secure user authentication with verified profiles</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Mobile-friendly for easy access anytime, anywhere</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>In-platform communication to close deals faster</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Built-in tools to support scaling and product management</div>
                </div>

                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-green-500'>Our Team</span></h1>
                <br />
                <p className='text-2xl text-justify'>B2Bridge was created by a passionate team of developers, designers, and product thinkers who understand the unique challenges of B2B commerce. Guided by innovation and real-world business feedback, our goal is to deliver a platform that bridges the gap between sellers and buyers — one connection at a time.</p>
            </div>
        </div>
    );
};

export default AboutUs;