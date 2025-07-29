import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services Électriques à Toulon | Dépannage, Installation & Mise aux Normes",
  description:
    "Découvrez tous les services proposés par notre entreprise d'électricité à Toulon : dépannage rapide, installations électriques, mises aux normes, rénovation. Disponible 7j/7.",
  keywords: [
    "services électricien Toulon",
    "dépannage électrique",
    "installation électrique",
    "rénovation électrique",
    "mise aux normes",
    "tableau électrique",
    "prise électrique",
    "disjoncteur",
  ],
  openGraph: {
    title: "Services d'Électricité à Toulon - Dépannage & Installation 7j/7",
    description:
      "Découvrez tous nos services d’électricité à Toulon : installations, dépannages, rénovations, mises aux normes. Intervention rapide garantie.",
    url: "https://electricientoulon-expert.fr/services",
    images: [
      {
        url: "https://electricientoulon-expert.fr/images/services-electricite-Toulon.jpg",
        width: 1200,
        height: 630,
        alt: "Services d'électricité à Toulon",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services d'Électricité à Toulon - Électricien certifié",
    description: "Installation, dépannage et rénovation électrique à Toulon. Un service de qualité assuré 7j/7.",
    images: ["https://electricientoulon-expert.fr/images/services-electricite-Toulon.jpg"],
  },
};
