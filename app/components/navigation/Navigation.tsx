import { Link } from '../Link'
import MainButton from '../MainButton'

export default function Navigation() {
    return (
        <header className="fixed top-0 z-50 w-full font-extralight font-webserveroff bg-forest">
            <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 py-5 uppercase">
                <div className="flex justify-between items-center w-full">
                    <a href="/" className="flex items-center">
                        <img src="/logo_text.png" alt="Logo" className="h-10" />
                    </a>
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
                    <MainButton variant="secondary">
                        Направи запитване
                    </MainButton>
                </div>
            </nav>
        </header>
    )
}
