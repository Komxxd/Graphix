import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
    {
        name: 'Starter',
        price: '$29',
        interval: '/month',
        description: 'For solo creators and small teams.',
        features: ['100 layout generations', 'Canvas Editing', 'PNG Exports', 'Basic Constraint Engine', '1 Brand Kit'],
        buttonText: 'Start Free Trial',
        variant: 'outline'
    },
    {
        name: 'Pro',
        price: '$79',
        interval: '/month',
        description: 'Agency-level volume and control.',
        features: ['500 layout generations', 'Unlimited Brand Kits', 'Team Sharing', 'Priority API Access', 'Custom Font Uploads'],
        buttonText: 'Upgrade to Pro',
        variant: 'default'
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="w-full bg-black py-24 md:py-32 px-4 border-t border-white/5">
            <div className="max-w-[1000px] mx-auto w-full flex flex-col items-center">

                <div className="text-center max-w-2xl mb-16 md:mb-20">
                    <h2 className="font-instrument italic text-4xl md:text-6xl text-white mb-6">
                        Transparent pricing.
                    </h2>
                    <p className="font-manrope text-white/60 text-lg md:text-xl">
                        Start generating structure without unpredictability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[800px]">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`flex flex-col p-8 rounded-3xl border ${plan.variant === 'default' ? 'border-white bg-white/5 shadow-2xl shadow-white/5' : 'border-white/10 bg-black'}`}>

                            <h3 className="font-inter font-semibold text-2xl text-white mb-2">
                                {plan.name}
                            </h3>
                            <p className="font-manrope text-white/50 text-base mb-6">
                                {plan.description}
                            </p>

                            <div className="flex items-baseline mb-8">
                                <span className="font-inter font-bold text-5xl md:text-6xl text-white tracking-tight">
                                    {plan.price}
                                </span>
                                <span className="font-manrope text-white/50 text-lg ml-2">
                                    {plan.interval}
                                </span>
                            </div>

                            <ul className="flex flex-col gap-4 mb-10 flex-1">
                                {plan.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="font-manrope text-white/80 text-sm md:text-base">
                                            {feat}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/sign-up">
                                <Button
                                    variant={plan.variant === 'default' ? 'default' : 'outline'}
                                    className={`w-full py-6 font-cabin text-base ${plan.variant === 'default' ? 'bg-white text-black hover:bg-white/90' : 'text-white border-white/20 hover:bg-white/10'}`}>
                                    {plan.buttonText}
                                </Button>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
