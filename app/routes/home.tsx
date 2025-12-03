import HeroSection from '~/components/pages/home/Hero'
import ServicesSection from '~/components/pages/home/Services'
import VideoSection from '~/components/pages/home/Video'
import type { Route } from './+types/home'
import { ConsultationSection } from '~/components/pages/home/Consultation'
import MovingTextSection from '~/components/pages/home/MovingText'
import { BenefitsSection } from '~/components/pages/home/Benefits'
import { SolutionsSection } from '~/components/pages/home/Solutions'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'New React Router App' },
        { name: 'description', content: 'Welcome to React Router!' },
    ]
}

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ConsultationSection />
            <MovingTextSection />
            <VideoSection />
            <SolutionsSection />
            <ServicesSection />
            <BenefitsSection />
        </main>
    )
}
