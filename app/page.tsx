import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServiceCard from "@/components/home/ServiceCard";
import SchemaLocalBusiness from "@/components/schema-local-business";
import About2 from "@/components/home/About2";
import StatsCard from "@/components/home/StatsCard";
import Services from "@/components/home/services";
import Reviews from "@/components/home/reviews";

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />

      <header>
        <Hero />
      </header>

      <main className="flex flex-col items-center justify-center w-full">
        <section id="a-propos" aria-label="Présentation de l'entreprise">
          <About />
        </section>

        <section id="services" aria-label="Services proposés par l’électricien à Toulon">
          <ServiceCard />
        </section>

        <section id="a-propos2" className="w-full" aria-label="Description de l’entreprise">
          <About2 />
        </section>

        <section id="stats" className="w-full bg-white" aria-label="Statistiques">
          <StatsCard />
        </section>

        <section id="services-2" className="w-full" aria-label="Services complémentaires">
          <Services />
        </section>

        <section id="reviews" className="w-full overflow-hidden" aria-label="Avis clients">
          <Reviews />
        </section>
      </main>
    </>
  );
}
