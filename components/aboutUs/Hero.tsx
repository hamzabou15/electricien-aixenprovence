import React from 'react'
import HeroPages from '../layout/HeroPages'
import Head from 'next/head'

const Hero = () => {
    return (
        <>
            <Head>
                <title>Électricien à Nice - Services d&apos;urgence, tableaux et conformité</title>
                <meta
                    name="description"
                    content="Services d'électricité à Nice : urgence, réparation, remplacement de tableau, conformité NF C 15-100. Intervention rapide et certifiée."
                />
            </Head>
            <HeroPages
                actual='A propos'
                previous='Accueil'
                title='A propos'
                link='/'
            />
        </>
    )
}

export default Hero
