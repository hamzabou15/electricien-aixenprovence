import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const ServiceCard = () => {
    return (
        <section className="w-full px-4 py-24 ">
            <div className="grid grid-cols-4 ">
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300">

                        {/* Image animée */}
                        <Image
                            src="/icons/power-drill.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%]">
                            <h3 className="text-2xl font-bold">Outils professionnels</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7">
                                Un travail de qualité avec une touche personnelle et amicale
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all
                      ">
                                    <span className="block  ">
                                        Savoir plus
                                    </span>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300">

                        {/* Image animée */}
                        <Image
                            src="/icons/construction-safety.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%]">
                            <h3 className="text-2xl font-bold">Expert Électricien</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7">
                                De la panne à la performance, une expertise électrique à chaque intervention
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all
                      ">
                                    <span className="block  ">
                                        Savoir plus
                                    </span>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300">

                        {/* Image animée */}
                        <Image
                            src="/icons/tool-box.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%]">
                            <h3 className="text-2xl font-bold">Large gamme de services</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7">
                                Des experts locaux prêts à vous aider pour tous vos besoins domestiques aujourd&#39;hui
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all
                      ">
                                    <span className="block  ">
                                        Savoir plus
                                    </span>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300">

                        {/* Image animée */}
                        <Image
                            src="/icons/security-protection.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%]">
                            <h3 className="text-2xl font-bold">Assurance qualité</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7">
                                Une aide fiable pour tous vos besoins de rénovation domiciliaire
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all
                      ">
                                    <span className="block  ">
                                        Savoir plus
                                    </span>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceCard
