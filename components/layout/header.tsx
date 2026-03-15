import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur">
      <div className="container mx-auto flex h-14 items-center gap-6 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-white text-lg"
        >
          <Image src="/vercel.svg" alt="Vercel" width={20} height={20} />
          <span className="tracking-tight">Swag Store</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link
                    href="/products"
                    className="block whitespace-nowrap px-4 py-3 text-sm transition-colors"
                  >
                    All Products
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger */}
        <div className="ml-auto md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
