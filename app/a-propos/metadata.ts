import type { Metadata } from "next";

export const metadata: Metadata = {
    /* --- SEO de base --- */
    title: "À propos – Électricien Aix En Provence | Artisan certifié & expérience locale",
    description:
        "Découvrez l’équipe d’Électricien Aix En Provence Expert : plus de 15 ans d’expérience en dépannage, installation et mise aux normes électriques sur Aix En Provence et ses environs.",
    /* Facultatif : la balise keywords n’influence plus Google mais reste utile pour d’autres moteurs. */
    keywords: [
        "électricien Aix En Provence",
        "artisan électricien Aix En Provence",
        "dépannage électrique Aix En Provence",
        "mise aux normes installation électrique Aix En Provence",
        "expert électricité Aix En Provence"
    ],
    alternates: {
        canonical: "https://electricienaixenprovence-sos.Fr/a-propos",
    },

    /* --- Open Graph (Facebook, LinkedIn…) --- */
    openGraph: {
        title: "Notre entreprise d’électricité à Aix En Provence – savoir‑faire & valeurs",
        description:
            "Électricien Aix En Provence Expert, c’est une équipe certifiée pour vos urgences et projets électriques depuis 2009. Transparence, sécurité et proximité.",
        url: "https://electricienaixenprovence-sos.Fr/a-propos",
        siteName: "Électricien Aix En Provence Expert",
        locale: "fr_FR",
        type: "article",
        images: [
            {
                url: "/images/un-ouvrier-du-batiment-en-combinaison-un-electricien-en-combinaison (1).webp",
                width: 1200,
                height: 630,
                alt: "Électricien Aix En Provence Expert – Équipe et véhicules d’intervention",
            },
        ],
    },

    /* --- Twitter Card --- */
    twitter: {
        card: "summary_large_image",
        title: "Qui sommes‑nous ? | Électricien Aix En Provence Expert",
        description:
            "15 ans d’expérience en électricité générale à Aix En Provence : dépannage 24h/24, installations conformes NF C 15‑100 et devis gratuits.",
        images: ["/images/un-ouvrier-du-batiment-en-combinaison-un-electricien-en-combinaison (1).webp"],
        creator: "@ElectricienAix En Provence",
    },

    /* --- Accessibilité & PWA --- */
    robots: { index: true, follow: true },
    themeColor: "#c1121f",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};
