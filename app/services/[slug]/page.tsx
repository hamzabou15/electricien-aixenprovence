import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "../../../lib/data";
import { FaCheckCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { cn } from "@/lib/utils";
import React from "react";

interface ServicePageProps {

    params: Promise<{ slug: string }>
}


export default async function DepannageElectricitePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <div className="w-full mx-auto bg-white">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
        {/* === Menu latéral === */}
        <aside className="space-y-4">
          {servicesData.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className={cn(
                "flex items-center justify-between px-4 py-3 border rounded-md shadow-sm font-semibold transition hover:bg-[#c1121f] hover:text-white",
                {
                  "text-[#c1121f]": service.slug === item.slug,
                  "text-[#19182]": service.slug !== item.slug,
                }
              )}
            >
              {item.title}
              <span className="text-xl">➔</span>
            </Link>
          ))}

          <div className="max-w-sm rounded-md overflow-hidden shadow-md border max-md:mx-auto">
            {/* Image */}
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src="/images/lampe-suspendue.webp"
                alt="Technicien électricien en intervention"
                fill
                className="object-cover"
              />
            </div>
            {/* Bloc orange en bas */}
            <div className="bg-[#c1121f] text-white text-center py-6 px-4 space-y-2">
              <a href="tel:+33756935200" aria-label="Appeler le numéro +33 7 56 93 52 00" className="space-y-2 block">
                <div className="flex justify-center">
                  <div className="bg-white rounded p-2">
                    <MdPhone className="text-[#c1121f] text-3xl" />
                  </div>
                </div>
                <p className="font-semibold text-sm">Besoin d’aide immédiate ?</p>
                <p className="text-2xl font-bold tracking-wide">+33 756 935 200</p>
              </a>
            </div>
          </div>
        </aside>

        {/* === Colonne principale === */}
        <div className="md:col-span-2 space-y-8">
          {/* Image principale */}
          <div className="w-full h-64 md:h-96 relative rounded-md overflow-hidden">
            <Image
              src="/images/service-img.webp"
              alt="Dépannage électrique à Toulon"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenu principal */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-[#6a6f78] text-base md:text-[17px] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Avantages */}
          <div className="flex w-full gap-7 flex-col lg:flex-row">
            <div className="w-full flex flex-col items-start gap-12">
              <div className="text-[#6a6f78]">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Avantages des services</h3>
                {servicesData.map(
                  (item, index) =>
                    service.slug === item.slug && (
                      <p key={index} className="text-base md:text-[16px] leading-relaxed">
                        {item.serviceBenefitsDescription1}
                      </p>
                    )
                )}
              </div>

              <div className="w-full">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Pourquoi nous choisir ?</h3>
                <div className="flex flex-col md:flex-row items-start gap-8 mt-6">
                  <ul className="space-y-3 text-[15px] text-[#003049]">
                    {service.benefits.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#c1121f]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image à droite */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/images/Electricien-proxmité-Toulon.webp"
                alt="Intervention rapide"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Description longue avec retours à la ligne */}
          <div className="text-[#6a6f78] w-full text-base md:text-[16px] leading-relaxed text-justify">
            {servicesData.map(
              (item, index) =>
                service.slug === item.slug && (
                  <p key={index}>
                    {item.serviceBenefitsDescription2
                      .split(".")
                      .filter((sentence) => sentence.trim() !== "")
                      .map((sentence, i) => (
                        <React.Fragment key={i}>
                          {sentence.trim()}.
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}