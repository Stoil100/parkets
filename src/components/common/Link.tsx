'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export function StyledLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                'text-sm font-extralight px-3 py-2 rounded text-background/80 hover:bg-accent hover:text-foreground transition-colors',
                isActive && 'underline',
                className
            )}
        >
            {children}
        </Link>
    );
}
