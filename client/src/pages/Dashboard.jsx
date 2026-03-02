import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center pt-20">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome, {user?.firstName || 'User'}
                </h1>
                <p className="text-gray-400 text-lg mb-8">Dashboard — coming soon</p>

                <button
                    onClick={handleSignOut}
                    className="px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
