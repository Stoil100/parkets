'use client';

import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import MainButton from '~/components/global/MainButton';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '~/components/ui/carousel';

export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Keep a single autoplay instance so we can reset it on dot click
    const autoplay = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        })
    );

    const images = [
        '/images/heroOverlay1.jpeg',
        '/images/heroOverlay1.jpeg',
        '/images/heroOverlay1.jpeg',
        '/images/heroOverlay1.jpeg',
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
        // Restart autoplay timer when a dot is clicked
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
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Dark overlay should NOT block swipes */}
                                <div className="absolute inset-0 bg-black/40 md:bg-black/30 pointer-events-none" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Hero Content Overlay */}
                {/* Make the whole overlay ignore pointer events */}
                <div className="absolute inset-0 z-10 flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-32 pointer-events-none">
                    {/* Main Content - Centered */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-4xl pt-20 md:pt-0">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
                            Подови решения и декоративни покрития с
                            професионално качество.
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl md:max-w-none">
                            <span className="font-semibold text-golden">
                                Royal Decorators
                            </span>{' '}
                            предлага висококачествени епоксидни подове,
                            декоративни мазилки и интегрирано боядисване в цяла
                            България. Съчетаваме прецизност, стил и
                            дълготрайност, превръщайки всяко пространство в
                            модерно и уникално място с характер.
                        </p>

                        {/* Re-enable pointer events only where needed */}
                        <div className="pointer-events-auto">
                            <MainButton>СВЪРЖИ СЕ С НАС</MainButton>
                        </div>
                    </div>

                    {/* Happy Clients - Bottom */}
                    <div className="hidden mb-16 sm:mb-8 md:flex flex-col sm:flex-row items-center md:self-start gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">
                                    Logo
                                </span>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 -ml-4 sm:-ml-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">
                                    Logo
                                </span>
                            </div>
                        </div>
                        <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wider">
                            ДОВОЛНИ КЛИЕНТИ
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
