'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const reviews = [
        {
            img: "/images/user1.webp",
            name: "Jean Dupont",
            description: "Suite à une coupure générale, l'électricien est intervenu en moins d'une heure à Nice. Travail rapide et conforme aux normes.",
        },
        {
            img: "/images/user4.webp",
            name: "Claire Martin",
            description: "Nous avons fait appel pour un remplacement de tableau électrique à Nice. Très professionnel, avec mise aux normes NF C 15-100.",
        },
        {
            img: "/images/user2.webp",
            name: "Marc Laurent",
            description: "Électricien compétent à Nice. Il a identifié la panne électrique rapidement et effectué la réparation le jour-même.",
        },
        {
            img: "/images/user5.webp",
            name: "Sophie Bernard",
            description: "Excellent service à Nice pour une remise aux normes de notre installation. Travail soigné, je recommande cet électricien.",
        }
    ]

    return (
        <section
            id="avis-electricien-nice"
            aria-label="Avis clients sur notre électricien à Nice"
            className="w-full py-24"
        >
            <div className="flex flex-col items-center justify-center mb-12 px-6 sm:px-20 gap-6 max-sm:gap-4 xl:max-w-[1300px] xl:mx-auto">
                <p className="text-[14px] font-semibold text-[#f25000] uppercase tracking-[7px] max-lg:text-[12px]">
                    Témoignages
                </p>
                <h2 className="text-[54px] leading-[1.15em] font-bold tracking-[-1.5px] text-center text-[#1b1e3f] max-lg:text-[46px] max-md:text-[40px] max-md:leading-[1.05em] max-sm:text-[28px]">
                    Ce que disent nos <span className="text-[#f25000]">clients à Nice</span> sur nos interventions électriques
                </h2>
                <p className="text-[17px] text-[#2E2937BF] text-center max-w-3xl leading-7 max-md:text-base">
                    Nos clients à Nice nous font confiance pour les interventions en urgence, le remplacement de tableaux électriques ou la remise aux normes NF C 15-100. Découvrez leurs témoignages !
                </p>
            </div>

            <Carousel setApi={setApi} opts={{ loop: true }}>
                <CarouselContent className="max-sm:flex">
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className="basis-3/7 p-0 h-screen max-sm:basis-[100%]  gap-4  ">
                            <Card
                                className={cn(
                                    "text-[#585964] text-[18px] leading-7 transition-all duration-500 h-[450px] bg-[#1b1e3f] max-sm:m-[20px] max-sm:w-[90%]  max-sm:ml-[40px] max-sm:rounded-lg",
                                    {
                                        "bg-[white]": index !== current - 1,
                                    }
                                )}
                            >
                                <CardContent className="flex flex-col items-center justify-around py-11 px-9 gap-8">
                                    <div>
                                        <div className="flex text-2xl items-center justify-center gap-2 mb-4 text-[#e3e300]">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <p className={cn(
                                            'p-0 text-center text-[white] font-light',
                                            { "text-[#63646c] font-normal": index !== current - 1 }
                                        )}>
                                            {review.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 mt-4">
                                        <Image
                                            src={review.img}
                                            alt={`Témoignage client de ${review.name} sur nos services d'électricité à Nice`}
                                            width={100}
                                            height={100}
                                            className="rounded-full w-16 h-16 object-cover"
                                        />
                                        <h3 className={cn('text-[white] text-[16px] font-semibold mt-2', {
                                            "text-[#1b1e3f]": index !== current - 1,
                                        })}>
                                            {review.name}
                                        </h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious data-slot="button" />
                <CarouselNext data-slot="button" />
            </Carousel>
        </section>
    )
}

export default Reviews
