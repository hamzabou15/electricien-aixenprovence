// app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "@/components/contact/Form";

// SEO spécifique à cette page
export const metadata: Metadata = {
    title: "Contactez Electricien Nice Expert | Demande de devis ou intervention",
    description: "Prenez contact avec Electricien Nice Expert pour vos travaux ou urgences électriques à Nice. Réponse rapide assurée.",
    keywords: ["contact électricien Nice", "demande devis électricien", "intervention électricien urgence Nice", "Electricien Nice Expert"],
    openGraph: {
        title: "Contactez Electricien Nice Expert | Demande de devis ou intervention",
        description: "Prenez contact avec Electricien Nice Expert pour vos travaux ou urgences électriques à Nice.",
        url: "https://electricien-nice.netlify.app/contact",
        siteName: "Electricien Nice Expert",
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contactez Electricien Nice Expert | Demande de devis ou intervention",
        description: "Demandez votre devis ou votre intervention d'urgence à Nice.",
    },
};

export default function ContactPage() {
    return (
        <div>
            <ContactForm />
        </div>
    );
}
