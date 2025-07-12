'use client';

import Image from 'next/image';
import React from 'react';

const AboutStats = () => {
    return (
        <section
            className='w-full h-screen max-h-[600px] bg-[url("/images/electricien-de-sexe-masculin-travaillant-dans-un-central-electrique.webp")] bg-cover bg-center relative bg-fixed'
            id="stats-electricien-nice"
            aria-label="Chiffres clés de notre entreprise d'électricité à Nice"
        >
            <div className="py-2 flex justify-start px-10 items-center h-full text-[#f6f6f6] bg-[#00000062]">
                <div className="flex items-center gap-7 justify-start text-start max-w-3xl max-sm:flex-col ">
                    {/* Logo ou icône liée à l'électricité */}
                    <div className="cursor-pointer">
                        <Image
                            alt="Logo électricité Nice"
                            src="/images/high-voltage-svgrepo-com.svg"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>

                    {/* Texte SEO optimisé */}
                    <div>
                        <h2 className="text-5xl sm:text-5xl font-bold mb-4 leading-16 max-sm:text-center">
                            Votre partenaire d’électricité à Nice
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
