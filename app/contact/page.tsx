// app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "@/components/contact/Form";

// SEO spécifique à cette page
export const metadata: Metadata = {
    title: "Contactez Electricien Toulon Expert | Demande de devis ou intervention",
    description: "Prenez contact avec Electricien Toulon Expert pour vos travaux ou urgences électriques à Toulon. Réponse rapide assurée.",
    keywords: ["contact électricien Toulon", "demande devis électricien", "intervention électricien urgence Toulon", "Electricien Toulon Expert"],
    openGraph: {
        title: "Contactez Electricien Toulon Expert | Demande de devis ou intervention",
        description: "Prenez contact avec Electricien Toulon Expert pour vos travaux ou urgences électriques à Toulon.",
        url: "https://electricientoulon-expert.fr/contact",
        siteName: "Electricien Toulon Expert",
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contactez Electricien Toulon Expert | Demande de devis ou intervention",
        description: "Demandez votre devis ou votre intervention d'urgence à Toulon.",
    },
};

export default function ContactPage() {
    return (
        <div>
            <ContactForm />
        </div>
    );
}
