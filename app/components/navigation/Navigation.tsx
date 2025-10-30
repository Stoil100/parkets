import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList
} from '../ui/navigation-menu'

export default function Navigation() {
    return (
        <header className="w-full">
            <nav className="w-full">
                <NavigationMenu className="w-fit py-10 max-w-screen">
                    <NavigationMenuList className="flex justify-between border items-center w-screen px-12">
                        <NavigationMenuLink asChild>
                            <a href="/docs">
                                <img alt="Logo" />
                            </a>
                        </NavigationMenuLink>
                        <div className="flex ">
                            <NavigationMenuLink asChild>
                                <a href="/docs">Относно</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <a href="/docs">Проекти</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <a href="/docs">Услуги</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <a href="/docs">Контакти</a>
                            </NavigationMenuLink>
                        </div>
                        <NavigationMenuLink asChild>
                            <Button>Направи запитване</Button>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    )
}
