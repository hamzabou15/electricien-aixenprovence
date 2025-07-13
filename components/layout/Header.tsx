"use client"

import Image from "next/image"
import React, { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { MdLocalPhone } from "react-icons/md"
import { IoNewspaperOutline } from "react-icons/io5"
import { HiMenu, HiX } from "react-icons/hi"
import { Button } from "../ui/button"


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full shadow-bottom z-20 relative bg-white  ">
            <div className="flex items-center justify-between px-4 md:px-8 py-4  max-w-[1300px] m-auto">
                <Link href="/">
                    <Image src="/images/logo-electrcien-nice.svg" alt="Logo" width={160} height={50} />
                </Link>

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
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link className="font-semibold" href="/services">Services</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link className="font-semibold" href="/projets">Projets</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link className="font-semibold" href="/about-us">À propos</Link>
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
                    <a href="tel:+33693788807" aria-label="Appeler le numéro +33 693 78 88 07"
                        className="flex items-center gap-2 text-sm font-semibold group">
                        <MdLocalPhone className=" rounded-full w-8 h-8 p-2 text-[#e03a00] bg-[#edeff5]" />
                        <span className="group-hover:underline ">+33 693 78 88 07</span>
                    </a>
                    <Button type="button" variant="submit" size="lg">
                        <Link className="flex gap-2" href={"/contact"}>
                            <IoNewspaperOutline />
                            <span>Devis</span>
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-4 pb-4">
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="text-sm font-semibold">Accueil</Link>
                        <Link href="/services" className="text-sm font-semibold">Services</Link>
                        <Link href="/projets" className="text-sm font-semibold">projets</Link>
                        <Link href="/about-us" className="text-sm font-semibold">À propos</Link>
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
