'use client';

import { Link } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { StyledLink } from './Link';
import MainButton from './MainButton';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const t = useTranslations('Common.Navigation');

    useEffect(() => {
        function updateHeight() {
            if (headerRef.current) {
                const height = headerRef.current.getBoundingClientRect().height;
                document.documentElement.style.setProperty(
                    '--nav-height',
                    `${height}px`
                );
            }
        }

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const navLinks = [
        { href: '/#about', label: t('about') },
        { href: '/#projects', label: t('projects') },
        { href: '/articles', label: t('articles') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <header
            ref={headerRef}
            className="fixed top-0 z-50 w-full font-extralight font-webserveroff bg-forest"
        >
            <nav className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-5 uppercase">
                <div className="flex justify-between items-center w-full">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo_text.png"
                            alt="Logo"
                            height={48}
                            width={152}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center md:gap-4 lg:gap-12 flex-1 justify-center list-none">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <StyledLink
                                    href={link.href}
                                    className="md:text-xl lg:text-2xl"
                                >
                                    {link.label}
                                </StyledLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <MainButton variant="secondary">
                            {t('makeInquiry')}
                        </MainButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
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
                            {t('makeInquiry')}
                        </MainButton>
                    </li>
                </ul>
            </div>
        </header>
    );
}
