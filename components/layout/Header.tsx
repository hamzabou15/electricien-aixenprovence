"use client"

import Image from "next/image"
import React, { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { MdLocalPhone } from "react-icons/md"
import { IoNewspaperOutline } from "react-icons/io5"
import { HiMenu, HiX } from "react-icons/hi"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-2">
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-sm">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full shadow-bottom z-20 relative bg-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Image src="/images/LogoSpark.webp" alt="Logo" width={160} height={50} />

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link className="font-semibold" href="/">Accueil</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:grid-cols-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold">Électricité</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:grid-cols-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link className="font-semibold" href="/a-propos">À propos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link className="font-semibold" href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Contact & Devis */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <MdLocalPhone className="rounded-full w-8 h-8 p-2 bg-[#edeff5]" />
            <span>+33 693 78 88 07</span>
          </div>
          <button className="bg-[#f25000] text-white px-4 py-2 rounded-md hover:bg-[#e03a00] flex items-center gap-2 transition-colors duration-300">
            <IoNewspaperOutline />
            <span>Devis</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-sm font-semibold">Accueil</Link>
            <Link href="/services" className="text-sm font-semibold">Services</Link>
            <Link href="/electricite" className="text-sm font-semibold">Électricité</Link>
            <Link href="/a-propos" className="text-sm font-semibold">À propos</Link>
            <Link href="/contact" className="text-sm font-semibold">Contact</Link>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MdLocalPhone className="rounded-full w-8 h-8 p-2 bg-[#edeff5]" />
                <span>+33 693 78 88 07</span>
              </div>
              <button className="bg-[#f25000] text-white py-2 rounded-md hover:bg-[#e03a00] flex items-center justify-center gap-2">
                <IoNewspaperOutline />
                <span>Devis</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
