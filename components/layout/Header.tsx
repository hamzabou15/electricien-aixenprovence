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
import { Button } from "../ui/button"
import { servicesData } from "@/lib/data"


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)  // État sous-menu services mobile

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
                    aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
                                <NavigationMenuTrigger className="font-semibold">
                                    <Link className="font-semibold" href="/services">Services</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 p-4 w-[250px]">
                                        {servicesData.map((service, index) => (
                                            <li key={index}>
                                                <Link href={`/services/${service.slug}`} className="block px-2 py-1 hover:text-orange-500">
                                                    {service.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link className="font-semibold" href="/projets">Projets</Link>
                                </NavigationMenuLink>
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

                        {/* Sous-menu Services mobile */}
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex justify-between items-center text-sm font-semibold w-full px-2 py-1 bg-gray-100 rounded-md"
                            aria-expanded={mobileServicesOpen}
                            aria-controls="mobile-services-submenu"
                        >
                            <span>Services</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Liste des services dans le sous-menu mobile */}
                        {mobileServicesOpen && (
                            <ul
                                id="mobile-services-submenu"
                                className="pl-4 border-l border-gray-300 mt-1 space-y-1"
                            >
                                {servicesData.map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="block text-sm px-2 py-1 hover:text-orange-500"
                                            onClick={() => setMobileMenuOpen(false)} // ferme menu mobile au clic
                                        >
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Link href="/projets" className="text-sm font-semibold">Projets</Link>
                        <Link href="/a-propos" className="text-sm font-semibold">À propos</Link>
                        <Link href="/contact" className="text-sm font-semibold">Contact</Link>

                        <div className="mt-4 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <MdLocalPhone className="rounded-full w-8 h-8 p-2 bg-[#edeff5]" />
                                <span>+33 693 78 88 07</span>
                            </div>
                            <button
                                className="bg-[#f25000] text-white py-2 rounded-md hover:bg-[#e03a00] flex items-center justify-center gap-2"
                                onClick={() => setMobileMenuOpen(false)} // ferme menu mobile au clic
                            >
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
