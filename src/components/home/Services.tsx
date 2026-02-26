'use client';

import Image from 'next/image';

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <div className="relative h-80 rounded-2xl overflow-hidden group">
            <Image
                src={image || '/images/common/placeholder.png'}
                alt={title}
                className="w-full h-full object-cover"
                fill
            />
            <div className="absolute bottom-0 left-0 right-0 bg-forest rounded-lg p-6 m-4 shadow-lg group-hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-bold text-golden mb-2 group-hover:text-white group-hover:blur-xs">
                    {title}
                </h3>
                <p className="text-sm text-white leading-relaxed group-hover:blur-xs">
                    {description}
                </p>
            </div>
        </div>
    );
}

interface ServicesSectionProps {
    t: (key: string) => string;
}
export default function ServicesSection({ t }: ServicesSectionProps) {
    const services = [
        {
            image: '/images/home/services/1.jpg',
            title: t('service1.title'),
            description: t('service1.description'),
        },
        {
            image: '/images/home/services/2.jpg',
            title: t('service2.title'),
            description: t('service2.description'),
        },
        {
            image: '/images/home/services/3.jpg',
            title: t('service3.title'),
            description: t('service3.description'),
        },
        {
            image: '/images/home/services/4.jpg',
            title: t('service4.title'),
            description: t('service4.description'),
        },
    ];

    return (
        <section
            id="about"
            className="scroll-mt-[var(--nav-height)] min-h-[70vh] py-16 px-6 md:px-12 lg:px-24 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        {t('title')}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
