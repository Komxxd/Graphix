import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />
        </div>
    );
};

export default SignUpPage;
