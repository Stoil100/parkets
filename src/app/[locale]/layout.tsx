import { Footer } from '@/components/common/Footer';
import Navigation from '@/components/common/Navigation';
import OutageOverlay from '@/components/common/Outage';
import { AuthContextProvider } from '@/components/providers/auth';
import { Toaster } from '@/components/ui/sonner';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
    title: 'Royal Decorators',
    description:
        'Premium parquet flooring services in Varna, Bulgaria. Expert installation, restoration, and maintenance for timeless elegance.',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            {
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },
};

export default async function LocaleLayout({ children, params }: Props) {
    const messages = await getMessages();
    const outage = false;

    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <head />
            <body
                className={
                    'font-cormac flex min-h-screen w-screen max-w-full flex-col overflow-x-hidden scroll-smooth antialiased box-border'
                }
            >
                {outage ? (
                    <OutageOverlay />
                ) : (
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <AuthContextProvider>
                            <Toaster />
                            <Navigation />
                            {children}
                            <Footer />
                        </AuthContextProvider>
                    </NextIntlClientProvider>
                )}
            </body>
        </html>
    );
}
