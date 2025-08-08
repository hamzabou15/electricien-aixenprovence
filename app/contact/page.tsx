import { Metadata } from "next";
import ContactForm from "@/components/contact/Form";

// SEO spécifique à cette page
export const metadata: Metadata = {
    title: "Contactez votre Électricien à Aix-en-Provence | Devis gratuit & Intervention rapide",
    description: "Besoin d'un dépannage électrique ou d'une mise aux normes à Aix-en-Provence ? Contactez nos électriciens certifiés pour une intervention rapide 24h/24 et 7j/7. Devis gratuit.",
    keywords: [
        "contact électricien Aix-en-Provence",
        "demande devis électricien Aix-en-Provence",
        "dépannage urgent électricien Aix-en-Provence",
        "mise aux normes électrique Aix-en-Provence",
        "électricien certifié Aix-en-Provence"
    ],
    openGraph: {
        title: "Contactez votre Électricien à Aix-en-Provence | Devis gratuit & Intervention rapide",
        description: "Intervention électrique 24h/24 et 7j/7 à Aix-en-Provence. Demandez votre devis gratuit dès maintenant.",
        url: "https://electricienaixenprovence-sos.fr/contact",
        siteName: "Electricien Aix-en-Provence Expert",
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contactez votre Électricien à Aix-en-Provence | Devis gratuit & Intervention rapide",
        description: "Électricien certifié à Aix-en-Provence – dépannage urgent et devis gratuit.",
    },
};

export default function ContactPage() {
    return (
        <main>
            <ContactForm />
        </main>
    );
}
