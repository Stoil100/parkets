// src/components/ConsultationSection.tsx

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ConsultationSectionProps {
    className?: string;
    t: (key: string) => string;
}

export default function ConsultationSection({
    className,
    t,
}: ConsultationSectionProps) {
    return (
        <section
            className={cn(
                'w-full bg-[#f3f4f6] py-12 bg-linear-to-r from-gray-200 from-35% to-white to-35%',
                className
            )}
        >
            <div className="mx-auto max-w-7xl ">
                <Card className="bg-transparent p-0 shadow-none border-0">
                    <CardContent className="flex flex-col gap-20 lg:flex-row lg:items-center lg:p-10">
                        {/* LEFT: Image */}
                        <div className="relative overflow-hidden rounded-br-[100px] lg:w-[48%] ">
                            <Image
                                src="/images/home/consultation.jpg"
                                alt="Интериор с дървен под и стълба"
                                className="h-full max-h-[550px] w-full object-cover"
                                height={256}
                                width={256}
                            />
                        </div>

                        {/* RIGHT: Text */}
                        <div className="flex w-full flex-col gap-4 lg:w-[52%]">
                            <Badge
                                variant="outline"
                                className="w-fit border-0 bg-transparent max-md:text-wrap px-0 py-0 text-xs font-light uppercase tracking-[0.2em] text-golden"
                            >
                                {t('badge')}
                            </Badge>

                            <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                                {t('title.main')}
                                <span className="block">
                                    {t('title.highlight')}
                                </span>
                            </h2>

                            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                <span className="font-semibold text-golden">
                                    Royal Decorators
                                </span>{' '}
                                {t('description1')}
                            </p>

                            <p className="max-md:hidden text-sm leading-relaxed text-gray-700 sm:text-base">
                                {t('description2')}
                            </p>

                            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                {t('description3.beginning')}
                                <span className="font-semibold text-gray-900">
                                    {t('description3.highlight')}
                                </span>
                                {t('description3.end')}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
