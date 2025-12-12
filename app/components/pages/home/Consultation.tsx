// src/components/ConsultationSection.tsx

import * as React from 'react';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent } from '~/components/ui/card';

import { cn } from '~/lib/utils';

interface ConsultationSectionProps {
    className?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  className,
}) => {
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
                            <img
                                src="/images/consultation.jpg"
                                alt="Интериор с дървен под и стълба"
                                className="h-full max-h-[550px] w-full object-cover"
                            />
                        </div>

                        {/* RIGHT: Text */}
                        <div className="flex w-full flex-col gap-4 lg:w-[52%]">
                            <Badge
                                variant="outline"
                                className="w-fit border-0 bg-transparent max-md:text-wrap px-0 py-0 text-xs font-light uppercase tracking-[0.2em] text-golden"
                            >
                                Експерти в декоративните и подови покрития
                            </Badge>

              <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                Консултация и избор на
                <span className="block">перфектното покритие</span>
              </h2>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                <span className="font-semibold text-golden">
                  Royal Decorators
                </span>{" "}
                предоставя възможност на клиентите да се запознаят с
                разнообразието от декоративни мазилки, епоксидни настилки и
                букле клас боя, които предлагаме за проекти от всякакъв тип.
              </p>

                            <p className="max-md:hidden text-sm leading-relaxed text-gray-700 sm:text-base">
                                По време на консултацията обсъждаме бюджета,
                                целите, техниките и изискванията, за да изберем
                                най-подходящото решение за вашето пространство.
                                Нашите специалисти представят на място различни
                                типове покрития, като демонстрират реални мостри
                                и завършени ефекти.
                            </p>

                            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                Всеки проект се планира{' '}
                                <span className="font-semibold text-gray-900">
                                    индивидуално – в съответствие с вашите
                                    желания, срокове и бюджет
                                </span>
                                . Целта ни не е просто да изпълним задача, а да
                                създадем повърхности, които впечатляват и
                                издържат във времето.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
