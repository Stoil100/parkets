import * as React from "react";
import { cn } from "~/lib/utils"; 

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, external = false, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          "text-sm font-medium px-3 py-2 rounded text-foreground/80 hover:bg-accent hover:text-foreground transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
