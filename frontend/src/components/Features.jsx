import React from 'react';
import { Layers, Wand2, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        icon: <Wand2 className="w-6 h-6 text-white" />,
        title: "AI Layout Parsing",
        description: "Our LLM understands format, tone, and goals. Just type what you need, and we build the exact JSON spatial structure."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: "Brand Guardian Engine",
        description: "Deterministic validation ensures AI output adheres strictly to your brand colors, fonts, and contrast constraints."
    },
    {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: "Full Canvas Editing",
        description: "Export isn't the final step. Our deterministic canvas lets you drag, drop, recolor, and rewrite every generated layer."
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Instant Export",
        description: "No rendering delays. Get production-ready PNGs of your fully constructed layouts instantly from the browser."
    }
];

const Features = () => {
    return (
        <section className="w-full bg-black py-24 md:py-32 px-4 relative">
            {/* Subtle top border line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
                <div className="text-center max-w-2xl mb-16 md:mb-24">
                    <h2 className="font-instrument italic text-4xl md:text-6xl text-white mb-6 tracking-tight">
                        Deterministic design logic.
                    </h2>
                    <p className="font-manrope text-white/60 text-lg md:text-xl">
                        A structured layout compiler using probabilistic AI, wrapped in strict constraints. Built for marketing teams that need speed and consistency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-start p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="font-inter font-semibold text-xl text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="font-manrope text-white/50 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
