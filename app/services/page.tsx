import SchemaLocalBusiness from '@/components/schema-local-business';
import Hero from '@/components/services/Hero';
import ListServices from '@/components/services/ListServices';
import Presentation from '@/components/services/Presentation';
import WhyUs from '@/components/services/WhyUs';
import Head from 'next/head';
import React from 'react';

const page = () => {
    return (
        <>
            <Head>
                {/* Balises HTML SEO spécifiques à la page Services */}
                <title>Nos Services Électriques à Nice | Dépannage, Installation & Mise aux Normes</title>
                <meta
                    name="description"
                    content="Découvrez tous les services proposés par notre entreprise d'électricité à Nice : dépannage rapide, installations électriques, mises aux normes, rénovation. Disponible 7j/7."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="services électricien Nice, dépannage électrique, installation électrique, rénovation électrique, mise aux normes, tableau électrique, prise électrique, disjoncteur"
                />
                <link rel="canonical" href="https://electricien-nice.fr/services" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Services d'Électricité à Nice - Dépannage & Installation 7j/7"
                />
                <meta
                    property="og:description"
                    content="Découvrez tous nos services d’électricité à Nice : installations, dépannages, rénovations, mises aux normes. Intervention rapide garantie."
                />
                <meta
                    property="og:image"
                    content="https://electricien-nice.fr/images/services-electricite-nice.jpg"
                />
                <meta property="og:url" content="https://electricien-nice.fr/services" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Services d'Électricité à Nice - Électricien certifié"
                />
                <meta
                    name="twitter:description"
                    content="Installation, dépannage et rénovation électrique à Nice. Un service de qualité assuré 7j/7."
                />
                <meta
                    name="twitter:image"
                    content="https://electricien-nice.fr/images/services-electricite-nice.jpg"
                />
            </Head>

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
                    aria-label="Services proposés par Electricien Nice Expert"
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
