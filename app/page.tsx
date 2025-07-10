import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ServiceCard from "@/components/home/ServiceCard";
import SchemaLocalBusiness from "@/components/schema-local-business";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Électricien à Nice - Dépannage 7j/7</title>
        <meta name="description" content="Dépannage électrique à Nice, installation, mise aux normes. Service rapide, certifié et local." />

        {/* Open Graph */}
        <meta property="og:title" content="Électricien à Nice - Dépannage 7j/7" />
        <meta property="og:description" content="Dépannage électrique à Nice, installation, mise aux normes. Service rapide, certifié et local." />
        <meta property="og:image" content="https://electricien-nice.fr/images/og-image.jpg" />
        <meta property="og:url" content="https://electricien-nice.fr" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Électricien à Nice - Dépannage 7j/7" />
        <meta name="twitter:description" content="Dépannage électrique à Nice, installation, mise aux normes. Service rapide, certifié et local." />
        <meta name="twitter:image" content="https://electricien-nice.fr/images/og-image.jpg" />
      </Head>
      <SchemaLocalBusiness />

      <header>
        <Hero />
      </header>

      <main>
        <About />
        <section aria-label="Nos services d'électricité à Nice">
          <ServiceCard />
        </section>
      </main>

      <footer>
        {/* À compléter : Ton footer ici */}
      </footer>
    </>
  );
}
