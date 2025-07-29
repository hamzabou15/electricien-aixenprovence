"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ElectricianCardProps {
    image: string;
    title: string;
    subtitle: string;
}

export default function ElectricianCard({ image, title, subtitle }: ElectricianCardProps) {
    return (
        <div className="relative group w-full h-[400px] overflow-hidden rounded-md cursor-pointer">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay orange au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#c1121f] via-[#c1121f]/80 to-transparent
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    max-sm:opacity-30
                 " />

            {/* Contenu affiché au hover */}
            <div
                className="
    absolute bottom-6 left-6 space-y-2 
    opacity-0 group-hover:opacity-100 transition duration-500 
    max-sm:opacity-75 max-sm:translate-y-2 max-sm:group-hover:translate-y-0 max-sm:group-hover:opacity-100
  "
            >                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#003049] text-white">
                    <FaArrowRight size={16} />
                </div>
                <div className="bg-[#fdf0d5] px-3 py-1 font-bold text-lg text-[#003049] w-fit rounded">
                    {title}
                </div>
                <div className="bg-[#fdf0d5] px-3 py-1 text-[#003049] text-sm w-fit rounded">
                    {subtitle}
                </div>
            </div>
        </div>
    );
}
