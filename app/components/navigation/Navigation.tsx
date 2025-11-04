import { Link } from '../Link'
import { Button } from '../ui/button'

export default function Navigation() {
    return (
        <header className="fixed top-0 z-50 w-full bg-transparent font-extralight">
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
                            <Link href="/about" className="text-2xl">
                                Относно
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-2xl">
                                Проекти
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-2xl">
                                Услуги
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-2xl">
                                Контакти
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <Button className="hidden font-extralight md:inline-flex bg-transparent text-background border-background border-2 text-xl transition-colors">
                        Направи запитване
                    </Button>
                </div>
            </nav>
        </header>
    )
}
