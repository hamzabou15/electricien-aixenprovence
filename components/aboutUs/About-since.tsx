'use client';

import Image from 'next/image';
import React from 'react';

const AboutSince = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#0055AA] mb-6">
            Notre Histoire à <span className="text-[#FFD600]">Aix-en-Provence</span>
          </h2>
          
          <div className="space-y-4">
            <p>
              Fondée en 2003, notre entreprise familiale s&apos;est imposée comme <strong>référence en électricité sur Aix-en-Provence</strong> grâce à notre engagement pour un service rapide et de qualité.
            </p>
            
            <p>
              De la simple prise défectueuse aux installations complexes, nous avons développé une expertise reconnue par les Aixois pour résoudre <strong>tous types de problèmes électriques</strong>.
            </p>
            
            <p>
              Aujourd&apos;hui, notre équipe de 5 électriciens certifiés intervient dans tout le <strong>pays d&apos;Aix : Luynes, Les Milles, Puyricard, Vitrolles</strong> et les communes alentours.
            </p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <Image 
            src="/images/electricien-aixenprovence-equipe.webp" 
            alt="Équipe d'électriciens à Aix-en-Provence"
            width={600}
            height={600}
            className="rounded-xl"
          />
          
          <div className="absolute -bottom-6 -right-6 bg-[#FFD600] text-[#0055AA] px-6 py-3 rounded-lg font-bold">
            <span>Depuis 2003 au service des Aixois</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSince;
