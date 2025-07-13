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
  title: "Electricien Nice Expert | Travaux & Dépannage Électrique à Nice",
  description: "Electricien à Nice pour vos installations, rénovations et dépannages électriques. Intervention rapide, professionnelle et conforme aux normes.",
  keywords: ["électricien Nice", "travaux électriques", "dépannage électrique", "installations électriques", "mise aux normes", "électricien urgence Nice"],
  authors: [{ name: "Electricien Nice Expert", url: "https://electricien-nice.netlify.app" }],
  creator: "Electricien Nice Expert",
  publisher: "Electricien Nice Expert",
  metadataBase: new URL("https://electricien-nice.netlify.app"),

  openGraph: {
    title: "Electricien Nice Expert | Travaux & Dépannage Électrique à Nice",
    description: "Entreprise spécialisée dans les travaux électriques à Nice. Service rapide et professionnel.",
    url: "https://electricien-nice.netlify.app", // a changer
    siteName: "Electricien Nice Expert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/constructeur-electricien-nice.webp", // à créer
        width: 1200,
        height: 630,
        alt: "Électricien Nice Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Electricien Nice Expert | Travaux & Dépannage Électrique à Nice",
    description: "Entreprise spécialisée dans les travaux électriques à Nice. Service rapide et professionnel.",
    images: ["/images/constructeur-electricien-nice.webp"],
    creator: "@ElectricienNice",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#f25000",
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
