'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatsCard = () => {
    const stats = [
        { value: 320, label: 'Urgences électriques et dépannages à Nice' },
        { value: 95, label: 'Remplacements de tableaux électriques à Nice' },
        { value: 150, label: 'Remises aux normes NF C 15-100 réalisées' },
        { value: 85, label: 'Coupures générales et partielles réparées' }
    ];

    return (
        <section
            className='bg-white w-full px-14 h-auto py-12'
            id="chiffres-electricien-nice"
            aria-label="Statistiques sur les interventions d'électricité à Nice"
        >
            <div className='flex items-start justify-between'>
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        isLast={index === stats.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

const StatItem = ({
    value,
    label,
    isLast,
}: {
    value: number;
    label: string;
    isLast: boolean;
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value]);

    return (
        <div
            ref={ref}
            className={`flex flex-col mx-auto w-[100%] items-center gap-3 px-6 py-6 ${!isLast ? 'border-l-[2px] border-[#d8d8d8] border-dashed' : ''
                }`}
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='text-[110px] leading-24 m-0 font-semibold text-[#e8e8e8]'
            >
                {count}
            </motion.h1>
            <span className='text-[18px] font-semibold text-center text-[#1b1e3f]'>{label}</span>
        </div>
    );
};

export default StatsCard;
