import HeroSection from '~/components/pages/home/Hero'
import ServicesSection from '~/components/pages/home/Services'
import VideoSection from '~/components/pages/home/Video'
import type { Route } from './+types/home'

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
            <VideoSection />
            <ServicesSection />
        </main>
    )
}
