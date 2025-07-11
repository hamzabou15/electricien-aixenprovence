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

const Footer = () => {
    return (
       <footer className='w-full bg-footer'>
            <div className='w-full h-full py-6 px-10 bg-[url("/images/footer-bg.webp")] bg-cover bg-no-repeat bg-center flex flex-col items-start justify-center gap-10'>
                <div className='flex justify-between w-full h-full mt-10'>
                    <div className='flex flex-col items-start gap-3'>
                        <Image
                            src="/images/logoV4.png"
                            width={150}
                            height={20}
                            alt='Logo OneSpark Electricité'
                        />
                        <p className='max-w-[300px] text-[11px] font-extralight text-[#FFFFFF91] text-start leading-5'>
                            <span className='font-semibold'>OneSpark Electricité</span> est votre entreprise d&#39;électricité générale à Marseille à votre service pour tous vos travaux d&#39;électricité et de dépannage électrique.
                        </p>
                        <div className='flex items-center justify-center gap-6 mt-4 text-sm text-[#f25000]'>
                            <a href="https://www.instagram.com/onesparkelectricite/" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full border-[1px] border-[#f25000] hover:bg-white hover:text-[#f25000] hover:border-[white] transition-colors duration-300'>
                                <RiFacebookFill />
                            </a>
                            <a href="https://www.instagram.com/onesparkelectricite/" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full border-[1px] border-[#f25000] hover:bg-white hover:text-[#f25000] hover:border-[white] transition-colors duration-300'>
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/company/onesparkelectricite/" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full border-[1px] border-[#f25000] hover:bg-white hover:text-[#f25000] hover:border-[white] transition-colors duration-300'>
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        <h2 className='text-[#f25000] font-semibold text-xl'>Explorer</h2>
                        <ul className='flex flex-col gap-2 mt-4 text-[12px] font-light text-[#ffffff91]'>
                            <li className='hover:text-[#f25000] transition-colors duration-300 cursor-pointer flex items-center gap-2 font-medium hover:font-semibold '> <GoArrowRight className='text-[#f25000] text-sm ' /> Accueil</li>
                            <li className='hover:text-[#f25000] transition-colors duration-300 cursor-pointer flex items-center gap-2 font-medium hover:font-semibold'> <GoArrowRight className='text-[#f25000] text-sm ' /> Services</li>
                            <li className='hover:text-[#f25000] transition-colors duration-300 cursor-pointer flex items-center gap-2 font-medium hover:font-semibold'> <GoArrowRight className='text-[#f25000] text-sm ' /> Électricité</li>
                            <li className='hover:text-[#f25000] transition-colors duration-300 cursor-pointer flex items-center gap-2 font-medium hover:font-semibold'> <GoArrowRight className='text-[#f25000] text-sm ' /> À propos</li>
                            <li className='hover:text-[#f25000] transition-colors duration-300 cursor-pointer flex items-center gap-2 font-medium hover:font-semibold'> <GoArrowRight className='text-[#f25000] text-sm ' /> Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        <h2 className='text-[#f25000] font-semibold text-xl'>Contact</h2>
                        <div className='text-[white]'>
                            <div className='flex items-start gap-3 mt-4 text-[12px] font-light '>
                                <TiLocation className='text-2xl p-1.5 bg-[#f25000] rounded-full hover:text-[#191c25] cursor-pointer hover:bg-[white]  transition-colors duration-300' />
                                <div className='flex flex-col gap-1'>
                                    <h4 className='font-semibold text-sm'>Bureau central :</h4>
                                    <span className='text-[#ffffff91] text-xs'>
                                        17 Avenue des Bleuets 13001 Marseille, France
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-start gap-3 mt-4 text-[12px] font-light '>
                                <MdLocalPhone className='text-2xl p-1.5 bg-[#f25000] rounded-full hover:text-[#191c25] cursor-pointer hover:bg-[white]  transition-colors duration-300' />
                                <div className='flex flex-col gap-1'>
                                    <h4 className='font-semibold text-sm'>Phones :</h4>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-[#ffffff91] text-xs'>
                                            0 (550) 680-34-12
                                        </span>
                                        <span className='text-[#ffffff91] text-xs'>
                                            0 (550) 680-78-14
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-7'>
                        <h2 className='text-[#f25000] font-semibold text-xl'>S&#39;abooner</h2>
                        <div className="">
                            <div className="">
                                <div className="mx-auto grid max-w-[540px] gap-6">
                                    <form className="grid gap-4">
                                        <div className="flex w-full max-w-sm items-center ">
                                            <Input type="email" placeholder="Votre Email..." name="email" className='border-r-0' />
                                            <Button type="submit" variant="submit" className='h-10'><LuSend />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full  flex items-center justify-center '>
                    <p className='text-[12px] text-[#ffffff91] font-light text-center'>
                        © 2025 Tous droits réservés - <span className='text-[#f25000] cursor-pointer'>OneSpark</span>  Electricité
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
