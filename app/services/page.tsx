import SchemaLocalBusiness from '@/components/schema-local-business';
import Hero from '@/components/services/Hero';
import ListServices from '@/components/services/ListServices';
import Presentation from '@/components/services/Presentation';
import WhyUs from '@/components/services/WhyUs';
import React from 'react';

const page = () => {
    return (
        <>
            {/* Schema.org LocalBusiness JSON-LD */}
            <SchemaLocalBusiness />

            <header>
                <Hero />
            </header>

            <main className="flex flex-col items-center justify-center w-full">
                {/* SECTION À PROPOS */}
                <section id="a-propos" aria-label="Présentation de l'entreprise" className='w-full'>
                    <Presentation />
                </section>

                <section
                    id="services"
                    aria-label="Services proposés par Electricien Toulon Expert"
                    className="w-full"
                >
                    <ListServices />
                </section>

                <section
                    id="pourquoi-nous"
                    aria-label="Pourquoi choisir notre entreprise d'électricité"
                    className="w-full"
                >
                    <WhyUs />
                </section>
            </main>
        </>
    );
};

export default page;
