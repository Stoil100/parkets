'use client'

interface ServiceCardProps {
    image: string
    title: string
    description: string
}

export function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <div className="relative h-80 rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img
                src={image || '/placeholder.svg'}
                alt={title}
                className="w-full h-full object-cover"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-0 left-0 right-0 bg-forest rounded-lg p-6 m-4 shadow-lg group-hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-bold text-golden mb-2 group-hover:text-white group-hover:blur-xs">
                    {title}
                </h3>
                <p className="text-sm text-white leading-relaxed group-hover:blur-xs">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function ServicesSection() {
    const services = [
        {
            image: '/images/services1.jpg',
            title: 'Епоксидни настилки',
            description:
                'Издръжливи и модерни решения за гаражи, паркинги и индустриални помещения.',
        },
        {
            image: '/images/services2.jpg',
            title: 'Хидроизолация и външни покрития',
            description:
                'Защита на фасади, тераси и басейни с качествени материали.',
        },
        {
            image: '/images/services3.jpg',
            title: 'Декоративни мазилки',
            description: 'Подчертаме индивидуалността на интериора си.',
        },
        {
            image: '/images/services4.jpg',
            title: 'Интериорно боядисване и дизайн',
            description:
                'Професионално боядисване на домове, офиси и хотели с финализ към детайла.',
        },
    ]

    return (
        <section className="min-h-[70vh] py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Какви услуги предлагаме
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                        Вдъхваме стандартите в интериорните решения чрез
                        иновация, прецизност и стил.
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
    )
}
