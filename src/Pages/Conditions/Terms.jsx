import React from 'react';

const Terms = () => {
    return (
       <div className='bg-gray-900'>
         <div className="p-6 max-w-3xl  mx-auto">
            <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>
            <p className="mb-4">
                By accessing and using this Job Portal Website, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Site</h2>
            <p className="mb-4">
                This site is intended to connect job seekers with employers. Users must not use the platform for unlawful or fraudulent purposes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
            <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account and password. Any activity under your account is your responsibility.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Content Ownership</h2>
            <p className="mb-4">
                All content, such as job listings and resumes, remains the property of the respective users. However, by posting, you grant us a non-exclusive right to display the content on our platform.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
            <p className="mb-4">
                We reserve the right to suspend or terminate your account at any time if you violate our terms or engage in suspicious activity.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
            <p className="mb-4">
                We may update these Terms of Use from time to time. Continued use of the site implies acceptance of the updated terms.
            </p>

            <p className="mt-6 text-sm text-gray-500">
                Last updated: May 26, 2025
            </p>
        </div>
       </div>
    );
};

export default Terms;
