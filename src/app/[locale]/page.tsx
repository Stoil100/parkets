'use client';
import BenefitsSection from '@/components/home/Benefits';
import ConsultationSection from '@/components/home/Consultation';
import HeroSection from '@/components/home/Hero';
import InstagramSection from '@/components/home/Instagram';
import MovingTextSection from '@/components/home/MovingText';
import ParallaxSection from '@/components/home/Parallax';
import ServicesSection from '@/components/home/Services';
import SolutionsSection from '@/components/home/Solutions';
import VideoSection from '@/components/home/Video';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Pages.Home');
    return (
        <main>
            <HeroSection t={(key) => t(`Hero.${key}`)} />
            <ParallaxSection t={(key) => t(`Parallax.${key}`)} />
            <ConsultationSection t={(key) => t(`Consultation.${key}`)} />
            <MovingTextSection t={t} />
            <VideoSection t={(key) => t(`Video.${key}`)} />
            <SolutionsSection t={(key) => t(`Solutions.${key}`)} />
            <ServicesSection t={(key) => t(`Services.${key}`)} />
            <BenefitsSection t={(key) => t(`Benefits.${key}`)} />
            <InstagramSection t={(key) => t(`Instagram.${key}`)} />
        </main>
    );
}
