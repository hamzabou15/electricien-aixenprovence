import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '../ui/button';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section
            className="w-full grid grid-cols-1 relative text-white overflow-hidden bg-[#003049]  
                      md:grid-cols-2  h-full 
            "
            id="hero-electricien-Toulon"
            aria-label="Électricien urgence et dépannage à Toulon"
        >
            <div className="relative h-full w-full max-md:h-[500px]">
                <Image
                    src="/images/Electricien-toulonV2.webp"
                    alt="Électricien intervenant à Toulon pour pannes et remises aux normes"
                    fill
                    className="object-cover object-top"
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                />

            </div>

            <div className="relative px-16 py-28 z-10 flex flex-col gap-6 bg-cover bg-center max-lg:px-12 md:py-20  max-sm:py-16 max-sm:px-7">
                <div className="flex flex-col items-start gap-7 max-md:items-center xl:max-w-[1300px]">
                    <p className="text-[12px] font-semibold text-[#c1121f] uppercase 
                        tracking-[7px] max-sm:text-[12px] max-md:text-[10px] max-md:text-center">
                        Électricien certifié à Toulon
                    </p>

                    <h1 className="text-[54px] font-bold tracking-[-2px] leading-tight sm:text-[40px] lg:text-[54px] max-sm:text-[32px] max-sm:tracking-normal max-md:text-center">
                        Urgence électricité à Toulon – Réparation rapide 7j/7
                    </h1>

                    <p className="text-[17px] font-light text-[#ffffffb7] leading-8 sm:text-[14px] lg:text-[17px]max-sm:text-base max-md:text-center ">
                        Vous faites face à une <strong>coupure générale ou partielle</strong> ? Notre <strong>électricien en urgence à Toulon</strong> intervient rapidement pour tout dépannage :
                        <strong> remplacement de tableau électrique</strong>, <strong>mise en conformité NF C 15-100</strong>, disjoncteur HS ou panne soudaine.
                        Intervention 7j/7 – service certifié et fiable.
                    </p>

                    <div className="flex gap-5 items-start mt-4 max-sm:flex-col sm:items-start max-md:items-center">
                        <h3 className="text-[40px] font-semibold leading-9 sm:text-4xl sm:leading-8 lg:leading-9 lg:text-[40px] ">4.95</h3>
                        <div className="flex flex-col items-start gap-1 max-sm:justify-center max-md:items-center">
                            <div className="flex items-center gap-1 text-[16px] text-[#edae00]">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className="text-[16px] font-medium sm:text-[14px] lg:text-[16px] max-sm:text-center">
                                Note Google (basée sur 320 avis clients satisfaits à Toulon)
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-start mt-7 max-sm:justify-center max-sm:mx-auto">
                        <Link href="/contact">
                            <Button
                                variant="submit"
                                size="xlg"
                                className="min-w-[200px] flex items-center gap-2 font-medium "
                            >

                                Demander un devis gratuit
                                <GoArrowRight
                                    className="text-[90px] w-10 h-10"
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
