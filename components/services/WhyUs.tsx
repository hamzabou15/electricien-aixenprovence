'use client';

import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <>
            <Head>
                <title>Pourquoi nous choisir ? Électricien à Nice – Fiable, Certifié, Rapide</title>
                <meta
                    name="description"
                    content="Découvrez pourquoi choisir notre entreprise d'électricité à Nice : électriciens certifiés, interventions rapides, sécurité garantie et service client exemplaire."
                />
            </Head>

            <section
                id="pourquoi-nous-electricien-nice"
                aria-label="Pourquoi choisir notre entreprise d'électricité à Nice"
                className="w-full bg-white"
            >
                <div className="px-12 py-16 flex flex-wrap lg:flex-nowrap gap-8 max-lg:flex-col-reverse xl:max-w-[1300px] xl:mx-auto">

                    {/* Texte explicatif */}
                    <div className="bg-white w-full lg:w-[45%] max-lg:w-full">
                        <span className="text-[12px] font-semibold text-[#f25000] uppercase tracking-[7px]">
                            Pourquoi nous ?
                        </span>
                        <h2 className="text-[30px] text-[#1b1e3f] font-bold tracking-[-1.5px] leading-tight mt-3 mb-6">
                            Nos engagements à Nice :
                        </h2>

                        <ul className="text-[14px] font-medium text-[#2E2937BF] space-y-4">
                            {[
                                "Électriciens certifiés et vérifiés, intervention en toute confiance",
                                "Nous serions fiers de les envoyer chez nous : sérieux & rigueur",
                                "Équipement soigné, uniforme professionnel, sécurité maximale",
                                "Experts formés pour diagnostic, dépannage et conformité NF C 15‑100",
                                "Service client attentif, disponible et à l'écoute",
                                "Entreprise assurée, agréée, avec garanties structurées",
                                "Professionnels amicaux, fiables, chez vous en moins de 60 min"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheck className="text-[#f25000] mt-1" aria-hidden="true" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image illustrative */}
                    <div className="w-full lg:w-[55%] max-lg:w-full">
                        <Image
                            src="/images/homme-un-technicien-electricien-nice.webp"
                            alt="Une équipe d'électriciens professionnels à Nice"
                            width={200}
                            height={400}
                            layout="responsive"
                            className="h-[500px] w-auto object-cover max-h-[500px] max-w-[500px] m-auto"
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUs;
