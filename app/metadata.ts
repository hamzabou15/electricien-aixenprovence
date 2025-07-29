import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Électricien à Toulon – Dépannage 7j/7 | Devis gratuit",
    description:
        "Artisan électricien à Toulon. Intervention rapide pour dépannage, installation et mise aux normes. Devis gratuit, réactivité 24h/24.",
    keywords: [
        "électricien Toulon",
        "dépannage électrique Toulon",
        "installation électrique Toulon",
        "mise aux normes Toulon",
        "urgence électricien Toulon",
    ],
    alternates: {
        canonical: "https://electricientoulon-expert.fr",
    },
    openGraph: {
        title: "Électricien à Toulon – Dépannage rapide 7j/7",
        description:
            "Artisan local certifié. Dépannage électrique express à Toulon. Devis gratuit.",
        url: "https://electricientoulon-expert.fr",
        siteName: "Électricien Toulon Expert",
        images: [
            {
                url: "/images/Electricien-ToulonV2.webp",
                width: 1200,
                height: 630,
                alt: "Électricien Toulon",
            },
        ],
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Électricien à Toulon – Dépannage rapide 7j/7",
        description: "Contactez un électricien certifié à Toulon, devis gratuit.",
        images: ["/images/Electricien-ToulonV2.webp"],
        creator: "@ElectricienToulon",
    },
    robots: {
        index: true,
        follow: true,
    },
};
