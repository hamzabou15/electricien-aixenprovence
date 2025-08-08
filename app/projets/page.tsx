import Hero from '@/components/projets/Hero';
import ListProjects from '@/components/projets/ListProjects';
import SchemaLocalBusiness from '@/components/schema-local-business';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Nos Réalisations Électriques à Aix-en-Provence | Électricien Expert",
  description: "Découvrez nos projets d'électricité à Aix-en-Provence : installations neuves, rénovations, dépannages urgents et mises aux normes NFC 15-100. 22 ans d'expertise locale.",
  keywords: [
    "réalisations électricien Aix-en-Provence",
    "projets électriques Aix-en-Provence",
    "installation électrique maison",
    "rénovation tableau électrique",
    "mise aux normes NFC 15-100",
    "dépannage électrique urgence",
    "électricien certifié Aix"
  ],
  openGraph: {
    title: "Projets Réalisés - Électricien Expert à Aix-en-Provence",
    description: "Exemples concrets de nos interventions électriques sur Aix-en-Provence et sa région. Plus de 3500 projets réussis depuis 2003.",
    url: "https://electricienaixenprovence-sos.fr/projets",
    images: [{
      url: "/images/og-projets-electricien-aix.jpg",
      width: 1200,
      height: 630,
      alt: "Projets électriques réalisés par notre électricien à Aix-en-Provence",
    }],
  },
  alternates: {
    canonical: "https://electricienaixenprovence-sos.fr/projets",
  }
};

export default function ProjetsPage() {
    return (
        <>
            <SchemaLocalBusiness />
            <header>
                <Hero />
            </header>
            <main className="flex flex-col items-center justify-center w-full">
                <section id="list-projects" aria-label="Nos réalisations" className="w-full bg-white">
                    <ListProjects />
                </section>
            </main>
        </>
    );
}
