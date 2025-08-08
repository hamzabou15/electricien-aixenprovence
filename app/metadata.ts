import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Électricien à Aix En Provence – Dépannage 7j/7 | Devis gratuit",
    description:
        "Artisan électricien à Aix En Provence. Intervention rapide pour dépannage, installation et mise aux normes. Devis gratuit, réactivité 24h/24.",
    keywords: [
        "électricien Aix En Provence",
        "dépannage électrique Aix En Provence",
        "installation électrique Aix En Provence",
        "mise aux normes Aix En Provence",
        "urgence électricien Aix En Provence",
    ],
    alternates: {
        canonical: "https://electricienaixenprovence-sos.Fr",
    },
    openGraph: {
        title: "Électricien à Aix En Provence – Dépannage rapide 7j/7",
        description:
            "Artisan local certifié. Dépannage électrique express à Aix En Provence. Devis gratuit.",
        url: "https://electricienaixenprovence-sos.Fr",
        siteName: "Électricien Aix En Provence Expert",
        images: [
            {
                url: "/images/Electricien-Aix En ProvenceV2.webp",
                width: 1200,
                height: 630,
                alt: "Électricien Aix En Provence",
            },
        ],
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Électricien à Aix En Provence – Dépannage rapide 7j/7",
        description: "Contactez un électricien certifié à Aix En Provence, devis gratuit.",
        images: ["/images/Electricien-Aix En ProvenceV2.webp"],
        creator: "@ElectricienAix En Provence",
    },
    robots: {
        index: true,
        follow: true,
    },
};
