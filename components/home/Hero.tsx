import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '../ui/button';
import { GoArrowRight } from 'react-icons/go';

const Hero = () => {
  return (
    <section
      className="w-full grid grid-cols-2 relative text-white overflow-hidden bg-[#1b1e3f]"
      id="hero-electricien-nice"
      aria-label="Électricien urgence et dépannage à Nice"
    >
      <div
        className="bg-[url('/images/Electricien-niceV2.webp')] bg-cover bg-top h-full w-full bg-no-repeat"
        role="img"
        aria-label="Électricien intervenant à Nice pour pannes et remises aux normes"
      ></div>

      <div className="relative px-16 py-28 z-10 flex flex-col gap-6 bg-[url('/images/bg-img-home.webp')] bg-cover bg-center">
        <div className="flex flex-col items-start gap-7">
          <p className="text-[12px] font-semibold text-[#f25000] uppercase tracking-[7px]">
            Électricien certifié à Nice
          </p>

          <h1 className="text-[54px] font-bold tracking-[-3px] leading-tight">
            Urgence électricité à Nice – Réparation rapide 7j/7
          </h1>

          <p className="text-[17px] font-light text-[#ffffffb7] leading-8">
            Vous faites face à une <strong>coupure générale ou partielle</strong> ? Notre <strong>électricien en urgence à Nice</strong> intervient rapidement pour tout dépannage : 
            <strong> remplacement de tableau électrique</strong>, <strong>mise en conformité NF C 15-100</strong>, disjoncteur HS ou panne soudaine.
            Intervention 7j/7 – service certifié et fiable.
          </p>

          <div className="flex gap-5 items-start mt-4">
            <h3 className="text-[40px] font-semibold leading-9">4.95</h3>
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1 text-[16px] text-[#edae00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-l font-medium">
                Note Google (basée sur 320 avis clients satisfaits à Nice)
              </span>
            </div>
          </div>

          <div className="flex justify-start mt-7">
            <Button
              variant="submit"
              size="xlg"
              className="min-w-[200px] flex items-center gap-2 font-medium"
            >
              Demander un devis gratuit
              <GoArrowRight
                className="text-[90px] w-10 h-10"
                style={{ width: '24px', height: '24px' }}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
