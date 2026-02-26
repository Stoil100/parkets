'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
    t: (key: string) => string;
}

export default function ParallaxSection({ t }: ParallaxSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const topImages = [
        '/images/home/parallax/top/1.jpg',
        '/images/home/parallax/top/2.jpg',
        '/images/home/parallax/top/3.jpg',
        '/images/home/parallax/top/4.jpg',
        '/images/home/parallax/top/5.jpg',
        '/images/home/parallax/top/6.jpg',
    ];

    const bottomImages = [
        '/images/home/parallax/bottom/1.jpg',
        '/images/home/parallax/bottom/2.jpg',
        '/images/home/parallax/bottom/3.jpg',
        '/images/home/parallax/bottom/4.jpg',
        '/images/home/parallax/bottom/5.jpg',
        '/images/home/parallax/bottom/6.jpg',
    ];

    const topImageSizes = [
        { width: 'w-44 md:w-52', height: 'h-28 md:h-44' }, // more wide on mobile
        { width: 'w-48 md:w-56', height: 'h-32 md:h-40' },
        { width: 'w-80 md:w-96', height: 'h-32 md:h-48' },
        { width: 'w-72 md:w-80', height: 'h-36 md:h-54' },
        { width: 'w-64 md:w-80', height: 'h-28 md:h-44' },
        { width: 'w-40 md:w-48', height: 'h-24 md:h-40' },
    ];

    const bottomImageSizes = [
        { width: 'w-44 md:w-52', height: 'h-32 md:h-48' },
        { width: 'w-56 md:w-64', height: 'h-36 md:h-52' },
        { width: 'w-96 md:w-[28rem]', height: 'h-40 md:h-60' },
        { width: 'w-40 md:w-80', height: 'h-32 md:h-52' },
        { width: 'w-64 md:w-60', height: 'h-36 md:h-46' },
        { width: 'w-48 md:w-56', height: 'h-28 md:h-44' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const elementTop = rect.top;
            const elementHeight = rect.height;

            const start = windowHeight;
            const end = -elementHeight;
            const progress = (start - elementTop) / (start - end);

            const clampedProgress = Math.max(0, Math.min(1, progress));
            setScrollProgress(clampedProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const maxOffset = 100;
    const topRowOffset = (scrollProgress - 0.5) * maxOffset * -1;
    const bottomRowOffset = (scrollProgress - 0.5) * maxOffset;

    return (
        <section
            ref={containerRef}
            className="py-16 px-4 overflow-hidden bg-background"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {t('title')}
                </h2>
                <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
            </div>
            <div className="max-w-6xl mx-auto -translate-x-1/3">
                <div
                    className="flex gap-2 mb-2 transition-transform duration-100 ease-out items-end"
                    style={{ transform: `translateX(${topRowOffset}px)` }}
                >
                    {topImages.map((src, index) => (
                        <div
                            key={`top-${index}`}
                            className={`relative shrink-0 ${topImageSizes[index].width} ${topImageSizes[index].height} rounded-2xl overflow-hidden`}
                        >
                            <Image
                                src={src || '/images/common/placeholder.png'}
                                alt={`Gallery image ${index + 1}`}
                                className="object-cover w-full h-full"
                                fill
                            />
                        </div>
                    ))}
                </div>

                <div
                    className="flex gap-2 transition-transform duration-100 ease-out items-start"
                    style={{ transform: `translateX(${bottomRowOffset}px)` }}
                >
                    {bottomImages.map((src, index) => (
                        <div
                            key={`bottom-${index}`}
                            className={`relative shrink-0 ${bottomImageSizes[index].width} ${bottomImageSizes[index].height} rounded-2xl overflow-hidden`}
                        >
                            <Image
                                src={src || '/images/common/placeholder.png'}
                                alt={`Gallery image ${
                                    topImages.length + index + 1
                                }`}
                                className="object-cover w-full h-full"
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
