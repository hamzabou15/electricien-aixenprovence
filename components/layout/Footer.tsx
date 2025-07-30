import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GoArrowRight } from 'react-icons/go'
import { MdLocalPhone } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { TiLocation } from 'react-icons/ti'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LuSend } from 'react-icons/lu'
import Link from 'next/link'

const Footer = () => {

    const menuItems = [
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Projets", href: "/projets" },
        { label: "À propos", href: "/a-propos" },
        { label: "Contact", href: "/contact" },
    ];


    return (
        <footer className="w-full bg-footer">
            <div className="w-full py-10 px-6 md:px-10 bg-[url('/images/footer-bg.webp')] bg-cover bg-no-repeat bg-center
                xl:max-w-[1300px]  xl:mx-auto
            ">
                <div className="flex flex-col gap-10">
                    {/* Main sections */}
                    <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 gap-x-6">
                        {/* Section 1 - Logo & Réseaux */}
                        <div className="flex flex-col items-start gap-4 max-w-xs">
                            <Link href="/">
                                <Image src="/images/logo-electricien-toulon.svg" alt="Logo" width={150} height={20} />
                            </Link>

                            <p className="text-xs font-light text-[#FFFFFF91] leading-5">
                                <span className="font-semibold">Eelectricien Toulon Expert</span> est votre entreprise d&#39;électricité générale à Toulon à votre service pour tous vos travaux d&#39;électricité et de dépannage électrique.
                            </p>
                            <div className="flex gap-4 mt-2 text-sm text-[#c1121f]">
                                <a
                                    href="https://www.facebook.com/onesparkelectricite/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-[#c1121f] hover:bg-white hover:text-[#c1121f] transition"
                                    aria-label="Facebook"
                                >
                                    <RiFacebookFill />
                                </a>
                                <a
                                    href="https://www.instagram.com/onesparkelectricite/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-[#c1121f] hover:bg-white hover:text-[#c1121f] transition"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/onesparkelectricite/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-[#c1121f] hover:bg-white hover:text-[#c1121f] transition"
                                    aria-label="X / Twitter"
                                >
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>

                        {/* Section 2 - Navigation */}
                        <div className="flex flex-col items-start gap-3 min-w-[150px]">
                            <h2 className="text-[#c1121f] font-semibold text-lg">Explorer</h2>
                            <ul className="flex flex-col gap-2 text-sm text-[#ffffff91]">
                                {menuItems.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 hover:text-[#c1121f] cursor-pointer font-medium transition"
                                        >
                                            <GoArrowRight className="text-[#c1121f] text-xs" />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 3 - Contact */}
                        <div className="flex flex-col items-start gap-3 min-w-[200px]">
                            <h2 className="text-[#c1121f] font-semibold text-lg">Contact</h2>
                            <div className="text-white text-sm flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <TiLocation className="text-xl p-1.5 bg-[#c1121f] rounded-full hover:bg-white hover:text-[#191c25] transition" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Bureau central :</h4>
                                        <p className="text-[#ffffff91] text-xs">
                                            34 Chemin des Moulins 06000 Toulon
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MdLocalPhone className="text-xl p-1.5 bg-[#c1121f] rounded-full hover:bg-white hover:text-[#191c25] transition" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Phones :</h4>
                                        <p className="text-[#ffffff91] text-xs">+33 693 78 88 07</p>
                                        <p className="text-[#ffffff91] text-xs">+33 693 78 88 07</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4 - Newsletter */}
                        <div className="flex flex-col items-start gap-4 w-full sm:max-w-sm">
                            <h2 className="text-[#c1121f] font-semibold text-lg">S&apos;abonner</h2>
                            <form className="flex w-full max-w-xs">
                                <Input
                                    type="email"
                                    placeholder="Votre Email..."
                                    name="email"
                                    className="rounded-r-none border-r-0"
                                />
                                <Button
                                    type="submit"
                                    className="h-10 rounded-l-none bg-[#c1121f]"
                                    aria-label="Envoyer l'email"
                                >
                                    <LuSend />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="w-full flex justify-center pt-6">
                        <p className="text-xs text-[#ffffff91] text-center">
                            © 2025 Tous droits réservés - <span className="text-[#c1121f] cursor-pointer">Elecricien Toulon Expert</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
