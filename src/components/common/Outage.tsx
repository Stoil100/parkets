import logo from '@/../public/logo_2.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function OutageOverlay() {
    const t = useTranslations('Common.Outage');
    return (
        <div className="fixed inset-0 z-9999 flex h-dvh items-center justify-center bg-forest">
            <div className="font-cormorant flex size-40 flex-col items-center justify-center text-center">
                <Image
                    src={logo}
                    alt="Royal Decorators Logo"
                    className="size-20 h-auto animate-pulse"
                />
                <span className="mt-4 text-lg">{t('message')}</span>
            </div>
        </div>
    );
}
