import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";

// Import de la police Roboto avec différents poids
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: "Electricien Toulon | Dépannage électricité 24h/24 en urgence",
  description: "Electricien à Toulon pour vos installations, rénovations et dépannages électriques. Intervention rapide, professionnelle et conforme aux normes.",
  keywords: ["électricien Toulon", "travaux électriques", "dépannage électrique", "installations électriques", "mise aux normes", "électricien urgence Toulon"],
  authors: [{ name: "Electricien Toulon Expert", url: "https://electricientoulon-expert.fr" }],
  creator: "Electricien Toulon Expert",
  publisher: "Electricien Toulon Expert",
  metadataBase: new URL("https://electricientoulon-expert.fr"),

  openGraph: {
    title: "Electricien Toulon Expert | Travaux & Dépannage Électrique à Toulon",
    description: "Entreprise spécialisée dans les travaux électriques à Toulon. Service rapide et professionnel.",
    url: "https://electricientoulon-expert.fr", 
    siteName: "Electricien Toulon Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/constructeur-electricien-Toulon.webp", // à créer
        width: 1200,
        height: 630,
        alt: "Électricien Toulon Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Electricien Toulon Expert | Travaux & Dépannage Électrique à Toulon",
    description: "Entreprise spécialisée dans les travaux électriques à Toulon. Service rapide et professionnel.",
    images: ["/images/constructeur-electricien-Toulon.webp"],
    creator: "@ElectricienToulon",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#c1121f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.className}>
      <body className="antialiased">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
