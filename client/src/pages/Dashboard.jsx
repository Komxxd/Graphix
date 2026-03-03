import React, { useState } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    Upload,
    Image as ImageIcon,
    LogOut,
    User as UserIcon,
    XCircle,
    Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const navigate = useNavigate();

    const [prompt, setPrompt] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [inspirationImage, setInspirationImage] = useState(null);

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'product') setProductImage(reader.result);
                else setInspirationImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (type) => {
        if (type === 'product') setProductImage(null);
        else setInspirationImage(null);
    };

    return (
        <div className="min-h-screen bg-black text-white font-manrope">
            {/* Top Navbar */}
            <nav className="w-full border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <img src="/src/assets/icon.svg" alt="Graphix Icon" className="w-[28px] h-[28px]" />
                    <span className="font-inter font-bold text-lg tracking-tighter">graphix.</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        {user?.imageUrl ? (
                            <img src={user.imageUrl} alt="Profile" className="w-5 h-5 rounded-full" />
                        ) : (
                            <UserIcon size={14} className="text-white/60" />
                        )}
                        <span className="text-sm font-medium text-white/80">{user?.firstName || 'User'}</span>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="p-2 rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                        title="Sign Out"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            </nav>

            <main className="max-w-[1000px] mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
                {/* Header Text */}
                <div className="text-center mb-12">
                    <h1 className="font-instrument italic text-[40px] md:text-[56px] leading-tight mb-4">
                        What are we creating today?
                    </h1>
                    <p className="text-white/50 text-base md:text-lg max-w-[500px] mx-auto">
                        Bring your brand to life with structured AI design. Enter a prompt and optional images to get started.
                    </p>
                </div>

                {/* Input Section */}
                <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl">
                    <div className="flex flex-col gap-8">

                        {/* Prompt Field */}
                        <div className="relative group">
                            <label className="block text-xs font-inter font-semibold uppercase tracking-widest text-white/40 mb-3 ml-2">
                                Design Prompt
                            </label>
                            <div className="relative">
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="e.g. A minimalist billboard for luxury watches with a coastal theme..."
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 min-h-[120px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all resize-none font-manrope text-base"
                                />
                                <div className="absolute bottom-4 right-4 text-white/20 pointer-events-none group-focus-within:text-white/40 transition-colors">
                                    <Sparkles size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Upload Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Product Image Upload */}
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center justify-between text-xs font-inter font-semibold uppercase tracking-widest text-white/40 ml-2">
                                    <span>Product Image</span>
                                    <span className="text-[10px] lowercase normal-case opacity-60">(Optional)</span>
                                </label>

                                <div className="relative h-[180px] rounded-2xl border border-dashed border-white/10 bg-black/20 hover:bg-black/30 hover:border-white/20 transition-all overflow-hidden">
                                    {productImage ? (
                                        <>
                                            <img src={productImage} alt="Product" className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => removeImage('product')}
                                                className="absolute top-2 right-2 p-1 bg-black/60 rounded-full hover:bg-black/80 text-white transition-colors"
                                            >
                                                <XCircle size={18} />
                                            </button>
                                        </>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                                            <div className="p-3 rounded-full bg-white/5 mb-3">
                                                <Upload size={20} className="text-white/40" />
                                            </div>
                                            <p className="text-sm text-white/30">Click to upload product</p>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => handleFileUpload(e, 'product')}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Inspiration Image Upload */}
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center justify-between text-xs font-inter font-semibold uppercase tracking-widest text-white/40 ml-2">
                                    <span>Inspiration Style</span>
                                    <span className="text-[10px] lowercase normal-case opacity-60">(Optional)</span>
                                </label>

                                <div className="relative h-[180px] rounded-2xl border border-dashed border-white/10 bg-black/20 hover:bg-black/30 hover:border-white/20 transition-all overflow-hidden">
                                    {inspirationImage ? (
                                        <>
                                            <img src={inspirationImage} alt="Inspiration" className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => removeImage('inspiration')}
                                                className="absolute top-2 right-2 p-1 bg-black/60 rounded-full hover:bg-black/80 text-white transition-colors"
                                            >
                                                <XCircle size={18} />
                                            </button>
                                        </>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                                            <div className="p-3 rounded-full bg-white/5 mb-3">
                                                <ImageIcon size={20} className="text-white/40" />
                                            </div>
                                            <p className="text-sm text-white/30">Click to upload style</p>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => handleFileUpload(e, 'inspiration')}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Action Button */}
                        <div className="pt-4">
                            <Button
                                className="w-full bg-white text-black hover:bg-neutral-200 py-7 rounded-2xl font-inter font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
                                disabled={!prompt.trim()}
                            >
                                Generate Design <Sparkles size={20} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Info Text */}
                <p className="mt-8 text-white/20 text-xs font-manrope tracking-wider uppercase flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
                    Powered by Graphix Constraint Engine v1.0
                </p>
            </main>
        </div>
    );
};

export default Dashboard;

