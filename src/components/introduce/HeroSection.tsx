import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
    const el = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        let typed: any;

        import('typed.js').then((module) => {
            const Typed = module.default;
            typed = new Typed(el.current, {
                strings: ["Trần Lâm Tuấn", "Lập trình Web"],
                typeSpeed: 70,
                backSpeed: 60,
                loop: true,
            });
        });

        return () => {
            if (typed) typed.destroy();
        };
    }, []);

    return (
        <div className='text-center'>
            <h4 className='!text-zinc-400 !text-4xl uk-text-normal !m-0 !mb-2'>
                Xin Chào, Tôi là
            </h4>
            <h2 className='!text-white !text-5xl uk-text-bold !m-0 '>
                <span ref={el}></span>
            </h2>
        </div>
    );
};

export default HeroSection;
