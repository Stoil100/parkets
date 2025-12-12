import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Button } from '../ui/button';

export default function MainButton({
    children,
    variant = 'primary',
    ...props
}: {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
} & Omit<React.ComponentProps<typeof Button>, 'variant'>) {
    const baseClass =
        'inline-flex uppercase font-webserveroff cursor-pointer font-extralight text-xl border-2 transition-colors px-4 py-1 rounded-lg';

    const variantClasses = {
        primary: 'bg-forest text-golden border-forest hover:bg-forest/70',
        secondary: 'bg-golden text-white border-golden hover:bg-golden/80',
    };

    return (
        <Button
            {...props}
            className={cn(baseClass, variantClasses[variant], props.className)}
        >
            {children}
        </Button>
    );
}
