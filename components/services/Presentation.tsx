'use client';

import Image from 'next/image';
import React from 'react';
import { PiPhoneCallLight } from 'react-icons/pi';
import Head from 'next/head';

const Presentation = () => {
    return (
        <>
            <Head>
                <title>Électricien à Nice – Services de diagnostic, installation et dépannage</title>
                <meta
                    name="description"
                    content="Électricien professionnel à Nice, proposant diagnostics, installations électriques, mise aux normes NF C 15‑100 et dépannage rapide. Devis gratuit."
                />
            </Head>

            <section className="w-full bg-white" id="services-intro-electricien-nice">
                <div className="px-12 py-16 flex flex-wrap lg:flex-nowrap gap-8 max-lg:flex-col-reverse">

                    {/* Image illustrative */}
                    <div className="w-full lg:w-[55%] max-lg:w-full items-center">
                        <Image
                            src="/images/constructeur-electricien-nice.webp"
                            alt="Électricien professionnel intervenant à Nice"
                            width={800}
                            height={600}
                            layout="responsive"
                            className="h-[600px] w-auto object-cover"
                            priority
                        />
                    </div>

                    {/* Blocs texte SEO-friendly */}
                    <div className="bg-white w-[calc(45%+70px)] ml-[-70px] p-12 mt-10 max-lg:w-full max-md:flex-col max-md:flex max-lg:items-center 
                max-lg:ml-0 max-lg:p-10 max-md:p-0
          ">
                        <span className="text-[12px] font-semibold text-[#f25000] uppercase tracking-[7px] max-sm:m-auto">
                            Nos Services
                        </span>
                        <h2 className="text-[30px] text-[#1b1e3f] font-bold tracking-[-1.5px] leading-tight mt-3 mb-6 max-sm:text-center ">
                            Diagnostic, installation & dépannage électrique à Nice
                        </h2>

                        <p className="text-[15px] font-light text-[#2E2937BF] leading-7 text-justify mb-8">
                            En tant qu’électricien local à Nice, nous intervenons pour :
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                <li><strong>Diagnostic de panne</strong> rapide et précis</li>
                                <li><strong>Installation de tableaux</strong> et câblage sécurisé</li>
                                <li><strong>Mise aux normes NF C 15‑100</strong> conforme aux réglementations</li>
                                <li><strong>Dépannage 7j/7</strong> pour pannes générales ou partielles</li>
                            </ul>
                        </p>

                        {/* Call to action */}
                        <div className="flex flex-col items-start lg:items-start group">
                            <span className="font-semibold text-[#1b1e3f] ">Contactez-nous dès maintenant</span>
                            <div className="flex items-center gap-2 mt-4 font-semibold cursor-pointer ">
                                <div className="w-16 h-16 bg-[#f0f0f0] flex items-center justify-center group-hover:bg-[#1b1e3f]  transition-colors duration-200 group-hover:text-white">
                                    <PiPhoneCallLight className="text-4xl" />
                                </div>
                                <a href="tel:+33756935200" aria-label="Appeler Électricien Nice">
                                    <span className="text-[18px] font-medium text-[#f25000] ">+33 7 56 93 52 00</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Presentation;
