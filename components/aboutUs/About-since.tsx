'use client';

import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

const AboutSince = () => {
    return (
        <>
            <Head>
                <title>Électricien à Toulon depuis 2003 – Plus de 3500 projets réussis</title>
                <meta
                    name="description"
                    content="Électricien professionnel à Toulon depuis 2003. Plus de 3 500 interventions de dépannage, installations et remises aux normes NF C 15‑100 pour la Côte d’Azur."
                />
            </Head>

            <section
                id="chiffres-electricien-Toulon"
                aria-label="Chiffres clés électricité Toulon"
                className="w-full relative  py-16 xl:max-w-[1300px] xl:mx-auto"
            >
                <div className="flex flex-col lg:flex-row gap-4 max-lg:flex-col">
                    <div className="lg:w-2/5 p-8 ">
                        <h2 className="text-2xl font-bold text-[#003049] mb-4 max-lg:text-center">
                            Électricien à Toulon <strong>depuis 2003</strong>
                        </h2>
                        <p className="text-lg text-[#003049] max-lg:text-center max-md:max-w-[370px]">
                            Société d’électricité locale, reconnue pour ses interventions rapides et fiables. Plus de <strong>3 500 projets réalisés</strong> pour particuliers et professionnels sur la Côte d’Azur.
                        </p>
                    </div>

                    <div className='w-[60%]  mt-[-100px] bg-[#c1121f]  px-4 py-8 h-[max-content] max-lg:mt-0 max-lg:w-full justify-center max-lg:flex' >
                        <div className="border-l-2 border-dashed border-[#9e3a085e] flex flex-col md:flex-row">
                            <div className="flex items-center text-white px-8 py-6 gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="text-[60px] font-bold">3 500+</span>
                                    <span className="font-semibold text-lg">Projets réalisés</span>
                                </div>
                                <Image alt="Icône projet" src="/icons/fingerprint.svg" width={50} height={50} />
                            </div>
                            <div className="flex items-center text-white px-8 py-6 gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="text-[60px] font-bold">240+</span>
                                    <span className="font-semibold text-lg">Clients servis à Toulon</span>
                                </div>
                                <Image alt="Icône service" src="/icons/fingerprint.svg" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSince;
