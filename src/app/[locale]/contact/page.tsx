'use client';

import { ContactForm } from '@/components/contact/Form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage() {
    const t = useTranslations('Pages.Contact');
    return (
        <main className="min-h-screen-nav mt-nav bg-[#f5f5f5] flex flex-col items-center justify-center md:px-4 gap-10 py-8">
            <div className="w-full max-w-4xl text-center mb-8 ">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1a1a1a]">
                    {t('title')}
                </h1>
                <p className="text-base text-[#1a1a1a] leading-relaxed">
                    {t('description.beginning')}
                    <br />
                    {t('description.middle')}
                    <br />
                    {t('description.end')}
                </p>
            </div>

            <div className="w-full max-w-2xl relative overflow-visible rounded-xl md:rounded-3xl pt-20 md:pt-24">
                {/* Big image background block */}
                <div
                    className="
                        absolute -top-10
                        left-1/2 -translate-x-1/2
                        w-full md:w-[120%] 
                        h-40 md:h-80
                        flex items-start p-6 justify-center
                        rounded-xl md:rounded-3xl bg-forest
                        shadow-2xl
                        z-0"
                >
                    <Image
                        src="/logo_text.png"
                        alt="Country Floors Logo"
                        width={300}
                        height={120}
                        className="object-contain max-w-full"
                    />
                </div>

                {/* Contact card on top */}
                <div className="relative z-10 bg-white rounded-b-2xl md:rounded-t-2xl p-8 md:p-10 shadow-2xl">
                    <ContactForm t={(key) => t(`form.${key}`)} />
                </div>
            </div>
        </main>
    );
}
