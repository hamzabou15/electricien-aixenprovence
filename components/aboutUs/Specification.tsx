// components/Expertise.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

const Expertise = () => {
    return (
        <>
            <Head>
                <title>Électricien à Toulon – Expertise & services détaillés</title>
                <meta
                    name="description"
                    content="Électricien professionnel à Toulon : diagnostic, réparation, installation, mise aux normes NF C 15‑100. Expertise certifiée pour tous vos besoins électriques."
                />
            </Head>

            <div className='w-full bg-white'>
                <div className='px-8 py-16 flex gap-5 justify-between items-start flex-wrap lg:flex-nowrap xl:max-w-[1300px] xl:mx-auto'>

                    <div className='flex items-center w-full lg:w-[50%]'>
                        <Image
                            alt="Électricien inspectant une installation électrique à Toulon"
                            width={500}
                            height={500}
                            src="/images/home-journal.jpg"
                            className='w-full object-cover'
                            priority
                        />
                    </div>

                    <div className='w-full lg:w-[40%] mt-7 flex flex-col py-2 px-0 gap-8 max-lg:w-full max-lg:items-center'>
                        <div className='flex flex-col gap-2 max-lg:max-w-[600px] max-lg:items-center max-sm:px-7'>
                            <p className='text-[12px] font-semibold text-[#c1121f] uppercase tracking-[7px]'>
                                Notre expertise
                            </p>
                            <h3 className='text-[54px] text-[#003049] m-0 leading-[1.15em] font-bold tracking-[-1.5px] pr-7 max-lg:p-0 max-lg:text-center max-lg:text-[46px] max-md:text-[40px] max-md:leading-[1.05em] max-sm:text-[28px]'>
                                Intervention rapide & conformité électrique à Toulon
                            </h3>
                        </div>

                        <p className='text-[15px] font-light text-[#2E2937BF] leading-7 text-justify max-sm:text-center max-lg:text-center'>
                            Depuis 2003, notre société d’électricité à Toulon propose un service complet : diagnostic de panne, dépannage en urgence, installation de tableaux électriques, câblage, mise aux normes NF C 15‑100, et maintenance fiable pour professionnels et particuliers.
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Expertise;
