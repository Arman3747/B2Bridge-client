import React from 'react';

const Terms = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold mb-8'>
                    <span className='border-b-2 border-green-500'>Terms and Conditions</span></h1>
                <br />
                <p className='text-2xl'>
                    Welcome to B2Bridge. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
                </p>
                <br />
                <br />

                <h3 className='text-4xl font-semibold mt-12 mb-4'>1. User Registration and Authentication</h3>
                <p className='text-2xl'>Users must register to access certain features of B2Bridge. Registration may be completed via email or Google Sign-In. Users agree to provide accurate information and keep their login credentials secure.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>2. Product Listings</h3>
                <p className='text-2xl'>Registered users may post products for sale. All listings must be lawful, accurate, and not violate any intellectual property rights or local laws. B2Bridge reserves the right to remove any listing that violates these terms.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>3. Purchases and Transactions</h3>
                <p className='text-2xl'>Users may purchase products directly through the platform. B2Bridge is not responsible for the quality, delivery, or condition of purchased items. Buyers and sellers must resolve disputes independently.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>4. User Conduct</h3>
                <p className='text-2xl'>Users agree not to misuse the platform by uploading harmful content, engaging in fraudulent activity, or attempting to hack or disrupt services. Abusive or inappropriate behavior may result in account termination.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>5. Account Security and Access</h3>
                <p className='text-2xl'>Access to protected pages is secured with JWT (JSON Web Tokens). Users are responsible for keeping their accounts secure and must not share login credentials with others.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>6. Content Ownership</h3>
                <p className='text-2xl'>Users retain ownership of their content (product listings, images, etc.) but grant B2Bridge a non-exclusive license to display and distribute this content within the platform.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>7. Editing and Removing Content</h3>
                <p className='text-2xl'>Users may edit or remove their own products at any time. B2Bridge reserves the right to remove content that violates platform guidelines or legal requirements.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>8. Availability and Errors</h3>
                <p className='text-2xl'>B2Bridge aims for 99% uptime but does not guarantee uninterrupted access. An error page may appear when a resource is not available or a technical issue arises.</p>


                <h3 className='text-4xl font-semibold mt-12 mb-4'>9. Changes to Features</h3>
                <p className='text-2xl'>B2Bridge may update, add, or remove features without prior notice to improve user experience or platform performance.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>10. Termination of Use</h3>
                <p className='text-2xl'>We reserve the right to suspend or terminate any account that violates these terms. Users may also delete their accounts at any time.</p>
            </div>
        </div>
    );
};

export default Terms;