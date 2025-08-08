import AboutCompany from '@/components/aboutUs/About-company'
import AboutSince from '@/components/aboutUs/About-since'
import AboutStats from '@/components/aboutUs/AboutStats'
import Companies from '@/components/aboutUs/Companies'
import Hero from '@/components/aboutUs/Hero'
import Specification from '@/components/aboutUs/Specification'
import Reviews from '@/components/home/reviews'
import ServiceCard from '@/components/home/ServiceCard'
import SchemaLocalBusiness from '@/components/schema-local-business'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Électricien Aix-en-Provence | Expert Dépannage 24/7 depuis 2003",
  description: "Société d'électricité à Aix-en-Provence : 22 ans d'expérience en dépannage urgent, installations sécurisées et mise aux normes NF C15-100. Intervention rapide 7j/7, devis gratuit.",
  keywords: [
    "électricien aix en provence",
    "dépannage électrique urgence aix",
    "électricien pas cher aix",
    "entreprise électricien aix",
    "artisan électricien certifié aix",
    "réparation tableau électrique aix",
    "mise aux normes électrique aix",
    "électricien 24/24 aix en provence",
    "expert électricien aix",
    "urgence électricité aix"
  ],
  alternates: {
    canonical: "https://electricienaixenprovence-sos.fr/a-propos",
  },
  openGraph: {
    title: "À Propos - Électricien Expert à Aix-en-Provence depuis 2003",
    description: "Découvrez notre histoire et expertise en dépannage électrique urgent sur Aix-en-Provence et sa région. Plus de 3500 interventions réussies.",
    url: "https://electricienaixenprovence-sos.fr/a-propos",
    siteName: "SOS Électricien Aix-en-Provence",
    images: [
      {
        url: "/images/og-about-electricien-aix.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe d'électriciens professionnels intervenant à Aix-en-Provence",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Aix-en-Provence | Expert Dépannage 24/7 depuis 2003",
    description: "22 ans d'expérience en électricité sur Aix et sa région. Interventions urgentes 24h/24",
    images: ["/images/twitter-about-electricien-aix.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
    yandex: "votre-code-verification-yandex",
  },
  category: "services",
};

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
                <section id="a-propos" aria-label="Présentation de l'entreprise" className='bg-white w-full'>
                    <AboutCompany />
                </section>
                <section id="ServiceCard" aria-label="Présentation de l'entreprise" className='bg-white w-full'>
                    <ServiceCard />
                </section>
                <section id="stats" aria-label="Présentation de l'entreprise" className='w-full'>
                    <AboutStats />
                </section>
                <section id="since" aria-label="Présentation de l'entreprise" className='w-full bg-white'>
                    <AboutSince />
                </section>
                <section id="Specification" aria-label="Présentation de l'entreprise" className='w-full'>
                    <Specification />
                </section>
                <section id="reviews" aria-label="Reviews Electriciens sur Aix En Provence" className="w-full overflow-hidden">
                    <Reviews />
                </section>
                <section id="Companies" aria-label="Reviews Electriciens sur Aix En Provence" className="w-full overflow-hidden">
                    <Companies />
                </section>
            </main>
        </>
    )
}

export default page
