import Hero from '@/components/projets/Hero';
import ListProjects from '@/components/projets/ListProjects';
import SchemaLocalBusiness from '@/components/schema-local-business';
import Head from 'next/head';
import React from 'react';

const page = () => {
    return (
        <>
            <Head>
                {/* Balises HTML SEO */}
                <title>Nos Réalisations - Projets d&apos;Électricité à Nice | Electricien Nice Expert</title>
                <meta
                    name="description"
                    content="Découvrez les projets réalisés par notre entreprise d'électricité à Nice : installations, rénovations, dépannages électriques. Un savoir-faire local et fiable."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="réalisations électricien Nice, projets électriques Nice, électricité générale Nice, installation électrique, rénovation électrique, Electricien Nice Expert"
                />
                <link rel="canonical" href="https://electricien-nice.fr/projets" />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Nos Projets d'Électricité à Nice | Electricien Nice Expert"
                />
                <meta
                    property="og:description"
                    content="Parcourez nos projets électriques réalisés à Nice : rénovations, installations, dépannages. Expertise, qualité et satisfaction client au rendez-vous."
                />
                <meta
                    property="og:image"
                    content="https://electricien-nice.fr/images/projets-electricite-nice.jpg"
                />
                <meta property="og:url" content="https://electricien-nice.fr/projets" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Nos Réalisations - Electricien à Nice"
                />
                <meta
                    name="twitter:description"
                    content="Découvrez nos réalisations électriques à Nice : installations, dépannages, mises aux normes. Travail certifié et soigné."
                />
                <meta
                    name="twitter:image"
                    content="https://electricien-nice.fr/images/projets-electricite-nice.jpg"
                />
            </Head>

            {/* Schema.org LocalBusiness JSON-LD */}
            <SchemaLocalBusiness />

            <header>
                <Hero />
            </header>

            <main className="flex flex-col items-center justify-center w-full">
                <section
                    id="list-projects"
                    aria-label="Nos réalisations"
                    className="w-full bg-white"
                >
                    <ListProjects />
                </section>
            </main>
        </>
    );
};

export default page;
