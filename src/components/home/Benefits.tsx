// components/BenefitsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BenefitsSectionProps {
    className?: string;
    t: (key: string) => string;
}

export default function BenefitsSection({
    className,
    t,
}: BenefitsSectionProps) {
    const benefits = [
        {
            icon: '🛡️',
            title: t('benefit1.title'),
            text: t('benefit1.description'),
        },
        {
            icon: '📏',
            title: t('benefit2.title'),
            text: t('benefit2.description'),
        },
        {
            icon: '⚡',
            title: t('benefit3.title'),
            text: t('benefit3.description'),
        },
        {
            icon: '🎨',
            title: t('benefit4.title'),
            text: t('benefit4.description'),
        },
        {
            icon: '📑',
            title: t('benefit5.title'),
            text: t('benefit5.description'),
        },
        {
            icon: '📅',
            title: t('benefit6.title'),
            text: t('benefit6.description'),
        },
        {
            icon: '🧰',
            title: t('benefit7.title'),
            text: t('benefit7.description'),
        },
        {
            icon: '📈',
            title: t('benefit8.title'),
            text: t('benefit8.description'),
        },
    ];

    return (
        <section className={cn('w-full bg-white py-12 md:py-16', className)}>
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:gap-10">
                {/* Top row: left heading + right paragraph */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                            {t('title')}
                            <span className="block">Royal Decorators</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-relaxed text-gray-700 md:text-right">
                        {t('description')}
                    </p>
                </div>

                {/* Grid of benefit cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((item) => (
                        <Card
                            key={item.title}
                            className="h-full border border-gray-200 shadow-sm"
                        >
                            <CardHeader className="flex flex-row items-start gap-3 pb-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-lg">
                                    <span aria-hidden>{item.icon}</span>
                                </div>
                                <CardTitle className="text-base font-semibold leading-snug">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.text}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
