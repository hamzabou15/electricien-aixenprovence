import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/layout/CTA";

export const metadata: Metadata = {
  title: "Electricien Aix-en-Provence | Dépannage électricité 24h/24 en urgence",
  description: "Électricien certifié à Aix-en-Provence pour dépannages, installations et mise aux normes NF C15-100. Intervention rapide 7j/7, devis gratuit. Urgence électrique 07 56 93 52 00.",
  keywords: [
    "électricien Aix-en-Provence", 
    "dépannage électrique urgence",
    "électricien pas cher Aix",
    "mise aux normes électrique",
    "tableau électrique Aix",
    "panne électrique",
    "électricien 24/7",
    "réparation électricité"
  ],
  authors: [{ name: "SOS Électricien Aix-en-Provence", url: "https://electricienaixenprovence-sos.fr" }],
  creator: "SOS Électricien Aix-en-Provence",
  publisher: "SOS Électricien Aix-en-Provence",
  metadataBase: new URL("https://electricienaixenprovence-sos.fr"),
  openGraph: {
    title: "Électricien Urgence à Aix-en-Provence - SOS Dépannage 24/7",
    description: "Électricien certifié intervenant en moins de 30 minutes sur Aix-en-Provence et ses environs",
    url: "https://electricienaixenprovence-sos.fr",
    siteName: "SOS Électricien Aix-en-Provence",
    locale: "fr_FR",
    type: "website",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Électricien professionnel intervenant à Aix-en-Provence",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Urgence à Aix-en-Provence - SOS Dépannage 24/7",
    description: "Intervention rapide 24h/24 pour tous vos problèmes électriques à Aix-en-Provence",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0055AA",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Chargement des polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 
      </head>
      <body className="antialiased">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}