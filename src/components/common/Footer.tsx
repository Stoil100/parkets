import { Link } from '@/i18n/navigation';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const serviceLinkStyles =
    'text-inherit hover:text-golden hover:bg-transparent underline';

export function Footer() {
    const t = useTranslations('Common.Footer');

    const serviceAreas = [
        { name: t('areas.sofia'), href: '/areas#sofia' },
        { name: t('areas.varna'), href: '/areas#varna' },
        { name: t('areas.plovdiv'), href: '/areas#plovdiv' },
        { name: t('areas.burgas'), href: '/areas#burgas' },
        { name: t('areas.slanchevBryag'), href: '/areas#slanchev-bryag' },
        { name: t('areas.zlatniPyasatsi'), href: '/areas#zlatni-pyasatsi' },
        { name: t('areas.slanchevDen'), href: '/areas#slanchev-den' },
    ];

    return (
        <footer className="bg-[#2a2118] w-full text-golden rounded-t-4xl bg-[url('/images/common/footer.png')] bg-repeat bg-bottom bg-contain">
            <div className="max-w-4xl mx-auto px-6 py-10 text-center">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-6 ">
                    <Image
                        src="/logo_text.png"
                        alt="Royal Decorators Logo"
                        width={256}
                        height={64}
                        className="h-16 px-2 backdrop-blur-xs rounded-xl"
                    />
                </div>

                {/* Contact Boxes */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Link
                        href="mailto:contact@royal-decorators.com"
                        className="border flex-1 border-golden rounded-full px-6 py-2 text-sm hover:bg-golden/10 transition-colors"
                    >
                        contact@royal-decorators.com
                    </Link>

                    {/* Middle element wraps first */}
                    <div className="border border-golden flex-1 rounded-full px-6 py-2 text-sm text-center basis-full md:basis-auto">
                        <div>{t('mondayToFriday')}</div>
                        <div>{t('weekend')}</div>
                    </div>

                    <div className="border border-golden flex-1 rounded-full px-6 py-2 w-32" />
                </div>

                {/* Phone Number */}
                <Link
                    href="tel:+35988427828"
                    className="block text-4xl md:text-5xl font-light tracking-wider mb-6 hover:text-golden transition-colors"
                >
                    +359 88 427 7828
                </Link>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-6">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-golden rounded flex items-center justify-center hover:bg-golden/80 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-5 h-5 text-[#2a2118]" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-golden rounded flex items-center justify-center hover:bg-golden/80 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5 text-[#2a2118]" />
                    </Link>
                </div>

                {/* Service Areas */}
                <nav className="text-golden/80 mb-2" aria-label="Service areas">
                    <p>{t('areas.title')}</p>
                    {serviceAreas.map((area, index) => (
                        <span key={area.href}>
                            <Link
                                href={area.href}
                                className={serviceLinkStyles}
                            >
                                {area.name}
                            </Link>
                            {index < serviceAreas.length - 1 && ' | '}
                        </span>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-xs text-golden/60">
                    &copy; {new Date().getFullYear()} {t('rightsReserved')}
                </p>
            </div>
        </footer>
    );
}
