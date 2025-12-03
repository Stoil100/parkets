// components/BenefitsSection.tsx
import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { cn } from '~/lib/utils'

interface BenefitsSectionProps {
    className?: string
}

const benefits = [
    {
        icon: '🛡️',
        title: 'Сертифицирани материали',
        text: 'Работим с одобрени системи и покрития за максимална издържливост.',
    },
    {
        icon: '📏',
        title: 'Прецизна подготовка на основата',
        text: 'Нивелиране, шлайф и грундиране за безупречен финиш.',
    },
    {
        icon: '⚡',
        title: 'Професионално изпълнение',
        text: 'Контрол на качеството на всеки етап и чиста работна среда.',
    },
    {
        icon: '🎨',
        title: 'Дизайн консултация',
        text: 'Съвети за цветове, текстури и стил според интериора.',
    },
    {
        icon: '📑',
        title: 'Прозрачни оферти',
        text: 'Ясни спецификации и предварително планирани срокове.',
    },
    {
        icon: '📅',
        title: 'Гъвкаво графици',
        text: 'Работа по удобен за вас план, включително извън работно време.',
    },
    {
        icon: '🧰',
        title: 'Поддръжка и съдействие',
        text: 'Насоки за експлоатация и грижа за покритията след монтажа.',
    },
    {
        icon: '📈',
        title: 'Реални резултати',
        text: 'Портфолио с обекти и клиенти, които се гордеят с пространствата си.',
    },
]

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
    className,
}) => {
    return (
        <section className={cn('w-full bg-white py-12 md:py-16', className)}>
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:gap-10">
                {/* Top row: left heading + right paragraph */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                            Какво получаваме с
                            <span className="block">Royal Decorators</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-relaxed text-gray-700 md:text-right">
                        С иновация, прецизност и внимание към детайла превръщаме
                        всяко пространство в дълготрайна и елегантна среда.
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
    )
}
