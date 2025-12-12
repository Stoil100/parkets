'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Link';
import MainButton from './MainButton';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/about', label: 'Относно' },
        { href: '/projects', label: 'Проекти' },
        { href: '/services', label: 'Услуги' },
        { href: '/contact', label: 'Контакти' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full font-extralight font-webserveroff bg-forest">
            <nav className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-5 uppercase">
                <div className="flex justify-between items-center w-full">
                    <a href="/" className="flex items-center">
                        <img src="/logo_text.png" alt="Logo" className="h-10" />
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center md:gap-4 lg:gap-12 flex-1 justify-center list-none">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="md:text-xl lg:text-2xl"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <MainButton variant="secondary">
                            Направи запитване
                        </MainButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-forest ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col items-center gap-6 py-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-2xl"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <MainButton
                            variant="secondary"
                            onClick={() => setIsOpen(false)}
                        >
                            Направи запитване
                        </MainButton>
                    </li>
                </ul>
            </div>
        </header>
    );
}
