import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <SignIn routing="path" path="/sign-in" afterSignInUrl="/dashboard" />
        </div>
    );
};

export default SignInPage;
