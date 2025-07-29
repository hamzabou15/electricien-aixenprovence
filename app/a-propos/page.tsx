import AboutCompany from '@/components/aboutUs/About-company'
import AboutSince from '@/components/aboutUs/About-since'
import AboutStats from '@/components/aboutUs/AboutStats'
import Companies from '@/components/aboutUs/Companies'
import Hero from '@/components/aboutUs/Hero'
import Specification from '@/components/aboutUs/Specification'
import Reviews from '@/components/home/reviews'
import ServiceCard from '@/components/home/ServiceCard'
import SchemaLocalBusiness from '@/components/schema-local-business'
import React from 'react'

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
                <section id="reviews" aria-label="Reviews Electriciens sur Toulon" className="w-full overflow-hidden">
                    <Reviews />
                </section>
                <section id="Companies" aria-label="Reviews Electriciens sur Toulon" className="w-full overflow-hidden">
                    <Companies />
                </section>
            </main>
        </>
    )
}

export default page
