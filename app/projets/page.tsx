import Hero from '@/components/projets/Hero';
import ListProjects from '@/components/projets/ListProjects';
import SchemaLocalBusiness from '@/components/schema-local-business';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nos Réalisations - Projets d'Électricité à Toulon | Electricien Toulon Expert",
    description: "Découvrez les projets réalisés par notre entreprise d'électricité à Toulon : installations, rénovations, dépannages électriques. Un savoir-faire local et fiable.",
    keywords: [
        "réalisations électricien Toulon",
        "projets électriques Toulon",
        "électricité générale Toulon",
        "installation électrique",
        "rénovation électrique",
        "Electricien Toulon Expert",
    ],
    openGraph: {
        title: "Nos Projets d'Électricité à Toulon | Electricien Toulon Expert",
        description: "Parcourez nos projets électriques réalisés à Toulon : rénovations, installations, dépannages. Expertise, qualité et satisfaction client au rendez-vous.",
        url: "https://electricientoulon-expert.fr/projets",
        siteName: "Electricien Toulon Expert",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "https://electricientoulon-expert.fr/images/projets-electricite-Toulon.jpg",
                width: 1200,
                height: 630,
                alt: "Projets Electricité Toulon",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nos Réalisations - Electricien à Toulon",
        description: "Découvrez nos réalisations électriques à Toulon : installations, dépannages, mises aux normes. Travail certifié et soigné.",
        images: ["https://electricientoulon-expert.fr/images/projets-electricite-Toulon.jpg"],
    },
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
