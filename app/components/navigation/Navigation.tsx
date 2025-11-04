import { Link } from '../Link'
import { Button } from '../ui/button'

export default function Navigation() {
    return (
        <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 w-full border-b border-border">
            <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
                <div className="flex justify-between items-center w-full">
                    {/* Logo section */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/generic-company-logo.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </a>

                    {/* Navigation links - centered and filling available space */}
                    <ul className="hidden md:flex items-center gap-12 flex-1 justify-center list-none">
                        <li>
                            <Link href="/about">Относно</Link>
                        </li>
                        <li>
                            <Link href="/projects">Проекти</Link>
                        </li>
                        <li>
                            <Link href="/services">Услуги</Link>
                        </li>
                        <li>
                            <Link href="/contact">Контакти</Link>
                        </li>
                        <li>
                            <Link href="/contact">Контакти</Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <Button className="hidden md:inline-flex">
                        Направи запитване
                    </Button>
                </div>
            </nav>
        </header>
    )
}
