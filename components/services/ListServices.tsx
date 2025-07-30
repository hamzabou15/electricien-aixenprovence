'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Link from 'next/link';

const ListServices = () => {
  const services = [
    {
      img: "/images/electricien-reaparation.webp",
      title: "Électricien urgence panne à Toulon",
      description: "Intervention rapide 7j/7 pour pannes électriques totales ou partielles.",
      href: "/services/depannage",
    },
    {
      img: "/images/electricien-sur-toulon3.webp",
      title: "Remise aux normes NF C 15‑100",
      description: "Mise en conformité de votre installation selon les normes French NF C 15‑100.",
      href: "/services/mise-aux-normes",
    },
    {
      img: "/images/electricien-sur-toulon2.webp",
      title: "Réparation de coupures générales ou partielles",
      description: "Réparation de coupure de courant à domicile ou en local pro à Toulon.",
      href: "/services/depannage",
    },
    {
      img: "/images/un-electricien-sur-toulon.webp",
      title: "Diagnostic de panne électrique à Toulon",
      description: "Analyse et test complet des circuits pour identifier les défauts électriques.",
      href: "/services/inspection",
    },
    {
      img: "/images/electricien-sur-toulon2.webp",
      title: "Remplacement de tableau électrique à Toulon",
      description: "Remplacement sécurisé d’un tableau vétuste ou endommagé à Toulon.",
      href: "/services/mise-aux-normes",
    },
  ];


  return (
    <>
      <Head>
        <title>Services d’électricien à Toulon – Urgence, Normes & Pannes</title>
        <meta
          name="description"
          content="Découvrez nos services d’électricien à Toulon : dépannage 7j/7, remise aux normes NF C 15‑100, diagnostic & remplacement de tableau."
        />
      </Head>

      <section
        id="services-electricien-Toulon"
        aria-label="Prestations électricien à Toulon"
        className="w-full py-24 px-16 bg-white max-md:px-8"
      >
        <div className="flex flex-col items-center mb-12 px-6 sm:px-20 gap-6 max-md:gap-5 xl:max-w-[1300px] xl:mx-auto">
          <p className="text-[14px] font-semibold text-[#c1121f] uppercase tracking-[7px] max-lg:text-[12px]">
            Nos Services
          </p>
          <h2 className="text-[40px] leading-[1.15em] font-bold tracking-[-1.5px] text-center text-[#003049] max-lg:text-[36px] max-md:text-[32px]">
            Services d’électricité à Toulon pour urgence, sécurité & conformité
          </h2>
          <p className="text-center text-[17px] text-[#2E2937BF] max-w-2xl">
            Nous proposons une gamme complète de services pour les particuliers et professionnels : dépannage d’urgence, diagnostics, mises aux normes, réparations et remplacements de tableau électrique.
          </p>
        </div>

        <Carousel
          opts={{ align: "start" }}
          orientation="horizontal"
          className="w-full max-w-7xl mx-auto max-sm:max-w-[92%] xl:max-w-[1300px] xl:mx-auto"
        >
          <CarouselContent className="-mt-1">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 h-[450px]"
                aria-label={`Service ${index + 1} sur ${services.length}: ${service.title}`}
              >
                <Link href={service.href}>
                <Card className="h-full w-full border-0 shadow-none bg-black group overflow-hidden relative cursor-pointer">
                  <CardContent className="flex flex-col justify-end items-center text-center gap-4 h-full relative p-0 text-white">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="object-cover absolute inset-0 w-full h-full opacity-90 transition-transform duration-500 ease-out group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="relative z-10 flex flex-col items-start bg-[#191c25d4] w-full p-6">
                      <h3 className="text-[18px] font-semibold text-start">
                        {service.title}
                      </h3>
                      <p className="text-[12px] text-[#e9e9e9bf] leading-6 mt-1 text-start">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default ListServices;
