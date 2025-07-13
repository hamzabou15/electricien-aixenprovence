import React from 'react';
import ElectricianCard from './Card';
import Link from 'next/link';
import { listItems } from '@/lib/projetcs';


const ListProjects = () => {
    return (
        <section
            aria-label="Exemples de projets réalisés par notre électricien à Nice"
            className="w-full  py-16 px-8 max-md:px-2 xl:max-w-[1300px] xl:mx-auto"
        >
            <div className="text-center mb-12">
                <p className="text-[14px] font-semibold text-[#f25000] uppercase tracking-[7px]">
                    Réalisations
                </p>
                <h2 className="text-[40px] font-bold tracking-[-1.5px] text-[#1b1e3f] max-md:text-[32px] max-sm:text-[28px]">
                    Projets récents à Nice et alentours
                </h2>
                <p className="text-[16px] text-[#2E2937BF] mt-4 font-light">
                    Découvrez un aperçu de nos interventions, que ce soit en rénovation, installation ou dépannage électrique sur la Côte d’Azur.
                </p>
            </div>

            <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-md:px-2">
                {listItems.map((item, index) => (
                    <Link key={item.slug} href={`/projets/${item.slug}`}>
                        <ElectricianCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ListProjects;
