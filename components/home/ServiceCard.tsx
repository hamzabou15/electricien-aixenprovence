import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const ServiceCard = () => {
    return (
        <section className="w-full px-4 py-24 ">
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed max-sm:border-0 max-sm:before:border-0">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300 max-lg:px-5 max-sm:items-center ">

                        {/* Image animée */}
                        <Image
                            src="/icons/power-drill.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%] max-lg:max-w[100%] max-sm:items-center">
                            <h3 className="text-2xl font-bold max-lg:text-xl max-sm:text-center">Outils professionnels</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7 max-lg:text-[14px] max-lg:leading-6 max-sm:text-center">
                                Un travail de qualité avec une touche personnelle et amicale
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all max-sm:-translate-x-0
                      ">
                                    <Link href={"/services"} >
                                        <span className="block  ">
                                            Savoir plus
                                        </span>
                                    </Link>

                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed max-sm:before:border-0">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300 max-lg:px-5 max-sm:items-center">

                        {/* Image animée */}
                        <Image
                            src="/icons/construction-safety.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%] max-lg:max-w[100%] max-sm:items-center">
                            <h3 className="text-2xl font-bold max-lg:text-xl max-sm:text-center ">Expert Électricien</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7 max-sm:tec">
                                De la panne à la performance, une expertise électrique à chaque intervention
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all max-sm:-translate-x-0
                      ">
                                    <Link href={"/services"} >
                                        <span className="block  ">
                                            Savoir plus
                                        </span>
                                    </Link>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed max-sm:border-0 max-sm:before:border-0">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300 max-lg:px-5 max-sm:items-center">

                        {/* Image animée */}
                        <Image
                            src="/icons/tool-box.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%] max-lg:max-w-[100%] max-sm:items-center">
                            <h3 className="text-2xl font-bold max-lg:text-xl max-sm:text-center">Large gamme de services</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7 max-sm:text-center">
                                Des experts locaux prêts à vous aider pour tous vos besoins domestiques aujourd&#39;hui
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all max-sm:-translate-x-0
                      ">
                                    <Link href={"/services"} >
                                        <span className="block  ">
                                            Savoir plus
                                        </span>
                                    </Link>
                                    <GoArrowRight className="text-[#f25000]  " style={{ width: "24px", height: "24px" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group before:h-full before:content-[''] before:absolute before:border-r-[2px] before:border-[#d8d8d8] before:border-dashed max-sm:border-0 max-sm:before:border-0">
                    <div className="flex flex-col items-start px-9 py-5 gap-7 relative transition-all duration-300 max-lg:px-5 max-sm:items-center">

                        {/* Image animée */}
                        <Image
                            src="/icons/security-protection.webp"
                            alt="Handyman Icon"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 group-hover:-translate-y-2"
                        />

                        {/* Titre + description */}
                        <div className="flex flex-col items-start gap-2 text-[#1b1e3f] max-w-[80%] max-lg:max-w[100%] max-sm:items-center">
                            <h3 className="text-2xl font-bold max-lg:text-xl max-sm:text-center">Assurance qualité</h3>
                            <span className="text-[15px] text-[#1b1e3f8f] font-[300] leading-7 max-sm:text-center">
                                Une aide fiable pour tous vos besoins de rénovation domiciliaire
                            </span>
                        </div>

                        {/* Bloc animé */}
                        <div className="overflow-hidden w-full group">
                            <a href="#" className="inline-block">
                                <span className="flex items-center gap-2 text-[16px] tracking-[-1px] font-semibold 
                      text-[#1b1e3f] -translate-x-[80%] transition-transform duration-300 group-hover:translate-x-0
                        hover:text-[#f25000]  hover:transition-all max-sm:-translate-x-0
                      ">
                                    <Link href={"/services"} >
                                        <span className="block  ">
                                            Savoir plus
                                        </span>
                                    </Link>
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
