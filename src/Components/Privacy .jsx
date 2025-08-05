import React from 'react';

const Privacy = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold mb-8'>
                    <span className='border-b-2 border-green-500'>Privacy Policy - B2Bridge</span></h1>

                <br />
                <p className='text-2xl'>
                    At B2Bridge, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our platform.
                </p>
                <br />
                <br />

                <h3 className='text-4xl font-semibold mt-12 mb-4'>1. Information We Collect</h3>
                <p className='text-2xl'>We collect personal information such as your name, email address, business name, contact number, and login credentials during registration. When registering via Google, we access your basic profile information with your consent.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>2. Use of Information</h3>
                <p className='text-2xl'>We use the collected information to provide platform services, verify user identity, facilitate transactions, manage user accounts, improve features, and communicate important updates or promotions.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>3. Business Data Protection</h3>
                <p className='text-2xl'>As a B2B platform, we understand the importance of protecting business-related information. We do not sell or share your business data with third parties without consent, except as necessary to fulfill services or legal obligations.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>4. Cookies and Tracking Technologies</h3>
                <p className='text-2xl'>B2Bridge uses cookies and similar technologies to enhance user experience, remember preferences, and track usage patterns for analytical purposes. You may manage cookie preferences in your browser settings.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>5. Third-Party Services</h3>
                <p className='text-2xl'>We may use third-party services such as Google Sign-In, analytics tools, and payment processors. These services may collect data according to their own privacy policies, which we recommend reviewing.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>6. Data Security</h3>
                <p className='text-2xl'>All private pages are protected using JSON Web Tokens (JWT), and we use encryption and other security measures to protect your data from unauthorized access, alteration, or disclosure.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>7. User Rights and Choices</h3>
                <p className='text-2xl'>You have the right to access, edit, or delete your personal and business data stored on our platform. You may do so through your profile settings or by contacting our support team.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>8. Data Retention</h3>
                <p className='text-2xl'>We retain user information only as long as necessary for legitimate business purposes or to comply with legal obligations. Once no longer needed, your data will be securely deleted.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>9. Children’s Privacy</h3>
                <p className='text-2xl'>B2Bridge is intended for users aged 18 and above. We do not knowingly collect personal data from children under 18. If found, such accounts will be removed.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>10. Changes to This Policy</h3>
                <p className='text-2xl'>We may update this Privacy Policy periodically. Users will be notified of significant changes through email or platform announcements. Continued use of B2Bridge after updates indicates acceptance of the new terms.</p>

            </div>
        </div>
    );
};

export default Privacy;