import { Facebook, Instagram } from 'lucide-react';
import { Link } from './Link';

const serviceLinkStyles =
    'text-inherit hover:text-golden hover:bg-transparent underline';

const serviceAreas = [
    { name: 'София', href: '/sofia' },
    { name: 'Варна', href: '/varna' },
    { name: 'Пловдив', href: '/plovdiv' },
    { name: 'Бургас', href: '/burgas' },
    { name: 'Слънчев бряг', href: '/slanchev-bryag' },
    { name: 'Златни пясъци', href: '/zlatni-pyasatsi' },
    { name: 'Слънчев ден', href: '/slanchev-den' },
];

export function Footer() {
    return (
        <footer className="bg-[#2a2118] w-full text-golden rounded-t-4xl bg-[url('/footer.png')] bg-repeat bg-bottom bg-contain">
            <div className="max-w-4xl mx-auto px-6 py-10 text-center">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-6 ">
                    <img
                        src="/logo_text.png"
                        alt="Royal Decorators Logo"
                        className="h-16 px-2 backdrop-blur-xs rounded-xl"
                    />
                </div>

                {/* Contact Boxes */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a
                        href="mailto:contact@royal-decorators.com"
                        className="border flex-1 border-golden rounded-full px-6 py-2 text-sm hover:bg-golden/10 transition-colors"
                    >
                        contact@royal-decorators.com
                    </a>

                    {/* Middle element wraps first */}
                    <div className="border border-golden flex-1 rounded-full px-6 py-2 text-sm text-center basis-full md:basis-auto">
                        <div>Понеделник до Петък : 9:00 - 18:00</div>
                        <div>Уикенди - По уговаряне</div>
                    </div>

                    <div className="border border-golden flex-1 rounded-full px-6 py-2 w-32" />
                </div>

                {/* Phone Number */}
                <a
                    href="tel:+35988427828"
                    className="block text-4xl md:text-5xl font-light tracking-wider mb-6 hover:text-golden transition-colors"
                >
                    +359 88 427 7828
                </a>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-golden rounded flex items-center justify-center hover:bg-golden/80 transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-5 h-5 text-[#2a2118]" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-golden rounded flex items-center justify-center hover:bg-golden/80 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-5 h-5 text-[#2a2118]" />
                    </a>
                </div>

                {/* Service Areas */}
                <nav className="text-golden/80 mb-2" aria-label="Service areas">
                    <p>Обслужвани райони:</p>
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
                    &copy; {new Date().getFullYear()} Royal Decorators EOOD All
                    Rights Reserved
                </p>
            </div>
        </footer>
    );
}
