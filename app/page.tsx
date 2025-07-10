import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ServiceCard from "@/components/home/ServiceCard";
import SchemaLocalBusiness from "@/components/schema-local-business";


export default function Home() {
  return (
    <div className="w-full  ">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <SchemaLocalBusiness />
        <Hero />
        <About />
        <ServiceCard />

      </main>

    </div>
  );
}
