import AboutCompany from '@/components/aboutUs/About-company'
import AboutSince from '@/components/aboutUs/About-since'
import AboutStats from '@/components/aboutUs/AboutStats'
import Companies from '@/components/aboutUs/Companies'
import Hero from '@/components/aboutUs/Hero'
import Specification from '@/components/aboutUs/Specification'
import Reviews from '@/components/home/reviews'
import ServiceCard from '@/components/home/ServiceCard'
import SchemaLocalBusiness from '@/components/schema-local-business'
import Head from 'next/head'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                {/* Balises HTML SEO */}
                <title>Électricien à Nice - Intervention 7j/7 | Devis Gratuit</title>
                <meta
                    name="description"
                    content="Électricien certifié à Nice pour vos dépannages, installations électriques, mises aux normes. Intervention rapide 7j/7. Devis gratuit et travaux garantis."
                />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="électricien Nice, dépannage électrique Nice, installation électrique Nice, mise aux normes Nice, urgence électricien Nice" />
                <link rel="canonical" href="https://electricien-nice.fr" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Électricien à Nice - Intervention rapide 7j/7" />
                <meta
                    property="og:description"
                    content="Dépannage électrique à Nice par un artisan local certifié. Intervention rapide et efficace. Devis gratuit. Disponible 7j/7."
                />
                <meta property="og:image" content="https://electricien-nice.fr/images/og-image.jpg" />
                <meta property="og:url" content="https://electricien-nice.fr" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Électricien à Nice - Intervention rapide 7j/7" />
                <meta name="twitter:description" content="Besoin d’un dépannage électrique à Nice ? Contactez un électricien certifié disponible 7j/7." />
                <meta name="twitter:image" content="https://electricien-nice.fr/images/og-image.jpg" />
            </Head>

            {/* Schema.org LocalBusiness JSON-LD */}
            <SchemaLocalBusiness />
            <header>
                <Hero />
            </header>
            <main className="flex flex-col items-center justify-center w-full">
                {/* SECTION À PROPOS */}
                <section id="a-propos" aria-label="Présentation de l'entreprise">
                    <AboutCompany />
                </section>
                <section id="ServiceCard" aria-label="Présentation de l'entreprise" className='bg-white'>
                    <ServiceCard />
                </section>
                <section id="stats" aria-label="Présentation de l'entreprise" className='w-full'>
                    <AboutStats />
                </section>
                <section id="since" aria-label="Présentation de l'entreprise" className='w-full'>
                    <AboutSince />
                </section>
                <section id="Specification" aria-label="Présentation de l'entreprise" className='w-full'>
                    <Specification />
                </section>
                <section id="reviews" aria-label="Reviews Electriciens sur Nice" className="w-full overflow-hidden">
                    <Reviews />
                </section>
                <section id="Companies" aria-label="Reviews Electriciens sur Nice" className="w-full overflow-hidden">
                    <Companies />
                </section>
            </main>
        </>
    )
}

export default page
