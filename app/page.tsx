import Head from "next/head";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServiceCard from "@/components/home/ServiceCard";
import SchemaLocalBusiness from "@/components/schema-local-business";
import About2 from "@/components/home/About2";
import StatsCard from "@/components/home/StatsCard";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Balises HTML SEO */}
        <title>Électricien à Nice - Intervention 7j/7 | Devis Gratuit</title>
        <meta
          name="description"
          content="Électricien certifié à Nice pour vos dépannages, installations électriques, mises aux normes. Intervention rapide 7j/7. Devis gratuit et travaux garantis."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="électricien Nice, dépannage électrique Nice, installation électrique Nice, mise aux normes Nice, urgence électricien Nice" />
        <link rel="canonical" href="https://electricien-nice.fr" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Électricien à Nice - Intervention rapide 7j/7" />
        <meta
          property="og:description"
          content="Dépannage électrique à Nice par un artisan local certifié. Intervention rapide et efficace. Devis gratuit. Disponible 7j/7."
        />
        <meta property="og:image" content="https://electricien-nice.fr/images/og-image.jpg" />
        <meta property="og:url" content="https://electricien-nice.fr" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Électricien à Nice - Intervention rapide 7j/7" />
        <meta name="twitter:description" content="Besoin d’un dépannage électrique à Nice ? Contactez un électricien certifié disponible 7j/7." />
        <meta name="twitter:image" content="https://electricien-nice.fr/images/og-image.jpg" />
      </Head>

      {/* Schema.org LocalBusiness JSON-LD */}
      <SchemaLocalBusiness />

      {/* HEADER / HERO */}
      <header>
        <Hero />
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="flex flex-col items-center justify-center w-full">
        {/* SECTION À PROPOS */}
        <section id="a-propos" aria-label="Présentation de l'entreprise">
          <About />
        </section>

        {/* SECTION SERVICES */}
        <section id="services" aria-label="Services proposés par l’électricien à Nice">
          <ServiceCard />
        </section>
        <section
          id="a-propos2"
          aria-label="Services proposés par l’électricien à Nice"
          className="w-full"
        >
          <About2 />
        </section>
        <section id="stats" aria-label="Statistique de l'entreprise" className="w-full">
          <StatsCard />
        </section>
      </main>

      {/* FOOTER (à compléter si tu as un footer global) */}
      <footer className="w-full bg-[#1b1e3f] text-white py-10 px-4 text-center">
        <p>© {new Date().getFullYear()} Électricien Nice - Tous droits réservés</p>
        <p>Intervention rapide – Devis gratuit – Artisan certifié</p>
      </footer>
    </>
  );
}
