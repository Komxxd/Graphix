import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactAndFooter = () => {
    return (
        <section id="contact-us" className="w-full bg-black relative flex flex-col items-center">

            {/* CTA/Contact Section */}
            <div className="w-full max-w-[1200px] px-4 py-24 md:py-32 flex flex-col items-center text-center border-t border-white/5">
                <h2 className="font-instrument italic text-4xl md:text-5xl text-white mb-6">
                    Ready to build consistency?
                </h2>
                <p className="font-manrope text-white/50 text-lg md:text-xl max-w-xl mb-12">
                    Stop letting AI hallucinate your marketing materials. Use strict layouts with editable canvases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 font-inter font-medium text-sm transition-colors"
                    />
                    <Link to="/sign-up" className="w-full sm:w-auto">
                        <Button className="w-full bg-white text-black hover:bg-neutral-200 px-8 py-6 rounded-lg font-cabin font-medium text-lg">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="w-full border-t border-white/10 px-4 py-12 md:py-16">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2">
                            <img src="/src/assets/icon.svg" alt="Graphix Icon" className="w-[30px] h-[30px]" />
                            <span className="font-inter font-bold text-xl tracking-tighter text-white">graphix.</span>
                        </div>
                        <p className="font-manrope text-white/40 text-sm leading-relaxed max-w-xs">
                            Structured AI Layouts.<br />No generation without constraints.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        <strong className="font-inter text-white font-medium text-sm tracking-widest uppercase mb-2">Product</strong>
                        <a href="#features" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Features</a>
                        <a href="#pricing" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Pricing</a>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Changelog</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <strong className="font-inter text-white font-medium text-sm tracking-widest uppercase mb-2">Resources</strong>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Documentation</a>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Constraint Engine API</a>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Brand Setup Guide</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <strong className="font-inter text-white font-medium text-sm tracking-widest uppercase mb-2">Company</strong>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">About</a>
                        <a href="#contact-us" className="font-manrope text-white/50 hover:text-white text-sm transition-colors">Contact</a>
                        <a href="#" className="font-manrope text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2">
                            <Mail size={16} /> support@graphix.com
                        </a>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-manrope text-white/30 text-xs">
                        © {new Date().getFullYear()} Graphix Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="font-manrope text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="font-manrope text-white/30 hover:text-white text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactAndFooter;
