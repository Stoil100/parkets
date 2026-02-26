'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import { Link } from '@/i18n/navigation';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import MainButton from '../common/MainButton';

interface HeroSectionProps {
    t: (key: string) => string;
}

export default function HeroSection({ t }: HeroSectionProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const autoplay = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        })
    );

    const images = [
        '/images/home/heroOverlay1.jpeg',
        '/images/home/heroOverlay2.jpeg',
        '/images/home/heroOverlay3.jpeg',
        '/images/home/heroOverlay4.jpeg',
    ];

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = (index: number) => {
        api?.scrollTo(index);
        autoplay.current?.reset();
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Carousel
                setApi={setApi}
                className="w-full h-full"
                opts={{
                    loop: true,
                }}
                plugins={[autoplay.current]}
            >
                <CarouselContent className="h-screen m-0">
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="p-0">
                            <div className="relative w-full h-screen">
                                <Image
                                    src={src || '/images/common/placeholder.png'}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                    fill
                                />
                                {/* Dark overlay should NOT block swipes */}
                                <div className="absolute inset-0 bg-black/40 md:bg-black/30 pointer-events-none" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Hero Content Overlay */}
                {/* ❌ removed pointer-events-none here so children can be clickable */}
                <div className="absolute inset-0 z-10 flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-32">
                    {/* Main Content - Centered */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-4xl pt-20 md:pt-0">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
                            {t('title')}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl md:max-w-none">
                            <span className="font-semibold text-golden">
                                Royal Decorators
                            </span>{' '}
                            {t('subtitle')}
                        </p>

                        <div>
                            <MainButton className="uppercase">
                                {t('contact')}
                            </MainButton>
                        </div>
                    </div>

                    {/* Happy Clients - Bottom */}
                    <div className="hidden mb-16 sm:mb-8 md:flex flex-col sm:flex-row items-center md:self-start gap-2 sm:gap-4">
                        <div className="flex items-center">
                            <Link
                                href="https://palace.sunnydaybg.com/"
                                className="relative group hover:z-500"
                            >
                                <Image
                                    src="/images/home/clients/1.png"
                                    alt="Client 1"
                                    height={64}
                                    width={64}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm
                                               transition-transform duration-200
                                               group-hover:scale-110 group-hover:-translate-y-1
                                               relative z-10"
                                />
                            </Link>

                            <Link
                                href="https://marina.sunnydaybg.com"
                                className="relative group -ml-4"
                            >
                                <Image
                                    src="/images/home/clients/2.png"
                                    alt="Client 2"
                                    height={64}
                                    width={64}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm
                                               transition-transform duration-200
                                               group-hover:scale-110 group-hover:-translate-y-1
                                               relative z-20"
                                />
                            </Link>
                        </div>
                        <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wider uppercase">
                            {t('happyClients')}
                        </p>
                    </div>
                </div>

                {/* Dot Navigation */}
                <div className="max-md:hidden absolute bottom-12 md:bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
                    <div
                        className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
                            isHovered ? 'bg-black/50' : 'bg-transparent'
                        }`}
                    >
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    current === index
                                        ? 'w-3 h-3 bg-white'
                                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
