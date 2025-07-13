'use client'

import React from 'react'
import { Button } from '../ui/button'
import { GoArrowRight } from 'react-icons/go'
import { PiPhoneCallLight } from 'react-icons/pi'
import Image from 'next/image'

const AboutCompany = () => {
    return (
        <section
            className='w-full h-auto  flex bg-white'
            id="a-propos-electricien-nice"
            aria-label="Présentation de notre entreprise d'électricité à Nice"
        >
            <div className='px-8 py-32 flex gap-6 flex-wrap lg:flex-nowrap h-auto'>
                <div className="flex flex-col items-start gap-5 max-md:items-center w-full lg:w-[40%] h-auto">
                    <h2 className="text-[14px] font-semibold text-[#f25000] uppercase tracking-[7px] text-start max-sm:text-center">
                        Électricien certifié à Nice
                    </h2>

                    <h1 className="text-[48px] text-[#1b1e3f] font-bold tracking-[-2px] leading-tight max-sm:text-[32px] max-md:text-center">
                        Plus de 22 ans d’expérience dans le dépannage électrique à Nice
                    </h1>

                    <p className="text-[18px] font-light text-[#2E2937BF] leading-8 max-sm:text-center my-5">
                        Spécialistes du <strong>dépannage électrique en urgence à Nice</strong>, nous intervenons 7j/7 pour résoudre toute <strong>panne générale ou partielle</strong>, <strong>remplacer votre tableau électrique</strong>, ou effectuer une <strong>remise aux normes NF C 15-100</strong>. Électriciens certifiés, nous vous garantissons une intervention rapide et conforme.
                    </p>

                    <div className='flex items-end gap-4 mt-6 max-sm:flex-col max-sm:items-center'>
                        <Button variant='read' size='xlg' className='min-w-[200px] flex items-center gap-2 font-medium'>
                            En savoir plus
                            <GoArrowRight style={{ width: '20px', height: '20px' }} />
                        </Button>

                        <a href="tel:+33756935200" aria-label="Appeler le numéro +33 7 56 93 52 00"
                            className="flex items-center gap-2 mt-4 text-[#1b1e3f] font-semibold cursor-pointer relative group">
                            <div className="w-16 h-16 bg-[#f0f0f0] flex items-center justify-center group-hover:bg-[#1b1e3f] transition-colors duration-200 group-hover:text-white">
                                <PiPhoneCallLight className="text-4xl" />
                            </div>
                            <span className="text-[15px] font-medium">+33 7 56 93 52 00</span>
                        </a>

                    </div>
                </div>

                <div className='w-full lg:w-[60%] h-full max-h-[500px] flex gap-5 mt-10 lg:mt-0 max-sm:flex-col max-sm:max-h-[100%]'>
                    <div className='flex gap-4 relative '>
                        <Image
                            alt="Électricien intervenant à Nice pour une réparation urgente"
                            src="/images/un-ouvrier-du-batiment-en-combinaison-un-electricien-en-combinaison (1).webp"
                            width={1000}
                            height={1000}
                            className='object-cover'
                        />
                        <div className='absolute left-[-30px] bottom-[30px] w-[220px] h-[130px]
                             text-white bg-[#f25000] flex flex-col justify-center items-center
                                max-lg:left-0 max-lg:bottom-0
                             '>
                            <span className='text-4xl font-bold'>22 ans</span>
                            <span className='text-[18px] font-semibold'>d’expérience</span>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <Image
                            alt="Dépannage électrique professionnel à Nice"
                            src="/images/vue-des-mains-engagees-dans-un-projet-de-bricolage (1).webp"
                            width={1000}
                            height={1000}
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany
