import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <section className="relative w-full bg-[#000000] overflow-hidden flex flex-col items-center min-h-screen">

            {/* Background Media */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-center">
                {/* Abstract background gradient to simulate the video layer without purple */}
                <div className="absolute inset-0 w-full h-full object-cover">
                    <div className="absolute bottom-0 w-[120%] h-[120%] mx-auto left-1/2 -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-80 mix-blend-screen -z-10 origin-bottom scale-y-110"></div>
                </div>

                <img
                    src="/src/assets/hero.svg"
                    alt=""
                    className="absolute origin-bottom object-cover w-[120%] h-[120%] scale-[1.2] opacity-100 mix-blend-screen"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
            </div>

            {/* Blurred Background Element */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[215px] w-[801px] h-[384px] bg-[#000000] rounded-full blur-[77.5px] z-[1]"></div>

            {/* Main UI Layer */}
            <div className="relative z-10 w-full flex flex-col items-center">

                {/* Navbar */}
                <nav className="w-full max-w-[1440px] px-[20px] lg:px-[120px] py-[16px] h-[102px] flex items-center justify-between">
                    <div className="flex items-center gap-[40px] lg:gap-[80px]">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/src/assets/icon.svg" alt="Graphix Icon" className="w-[34px] h-[34px]" />
                            <span className="font-inter font-bold text-xl tracking-tighter text-white">graphix.</span>
                        </div>

                        {/* Nav Links */}
                        <div className="hidden lg:flex items-center gap-[10px]">
                            {['Home', 'Features', 'Pricing', 'Contact us'].map((item) => (
                                <a key={item} href="#" className="flex items-center text-white/80 font-manrope font-medium text-[14px] leading-[22px] px-[10px] py-[4px] hover:text-white transition-colors whitespace-nowrap">
                                    {item}
                                    {item === 'Features' && <ChevronDown className="ml-[3px]" size={16} color="currentColor" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        <Button variant="ghost" className="text-white hover:bg-white/10 font-manrope font-semibold text-[14px]">
                            Sign In
                        </Button>
                        <Button className="hidden sm:inline-flex bg-white text-black hover:bg-white/90 font-manrope font-semibold text-[14px]">
                            Get Started
                        </Button>
                    </div>
                </nav>

                {/* Hero Content Area */}
                <div className="mt-[80px] lg:mt-[162px] max-w-[871px] flex flex-col items-center gap-[24px] px-4 w-full">
                    <div className="flex flex-col gap-[10px] items-center text-center">
                        <h1 className="flex flex-col items-center">
                            <span className="font-inter font-medium text-[48px] md:text-[76px] leading-[1.15] text-white tracking-[-1px] md:tracking-[-2px]">
                                Design generation.
                            </span>
                            <span className="font-instrument italic text-[48px] md:text-[76px] leading-[1.15] text-white tracking-[-1px] md:tracking-[-2px]">
                                Scale your brand.
                            </span>
                        </h1>
                        <p className="font-manrope font-normal text-[16px] xl:text-[18px] leading-[1.5] xl:leading-[26px] text-white/60 max-w-[613px] mx-auto mt-2">
                            The next-generation AI design platform that transforms your prompts into fully editable marketing layouts.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[22px] mt-4">
                        <Button className="w-full sm:w-auto h-auto bg-white text-black hover:bg-neutral-200 px-[24px] py-[14px] rounded-[10px] font-cabin font-medium text-[16px]">
                            Get Started Free
                        </Button>
                    </div>
                </div>

                {/* Black 16:9 Image Placeholder */}
                <div className="mt-[80px] pb-[40px] px-4 w-full flex justify-center relative z-20">
                    <div className="w-full max-w-[1163px] rounded-[24px] bg-white/5 backdrop-blur-[10px] border-[1.5px] border-white/10 p-[10px] md:p-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                        <div className="w-full bg-black rounded-[12px] aspect-video border border-white/5 flex items-center justify-center overflow-hidden">
                            <div className="text-white/20 font-inter font-medium tracking-widest text-sm lg:text-base uppercase">
                                Editor Canvas Preview
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
