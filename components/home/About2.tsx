"use client";
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { Button } from '../ui/button';
import { GoArrowRight } from 'react-icons/go';
import { PiPhoneCallLight } from 'react-icons/pi';
import Image from 'next/image';

const About2 = () => {
  return (
    <section className='bg-white w-full px-4 h-auto max-sm:px-7'>
      <div className='flex gap-8 py-2 h-full max-lg:flex-col-reverse max-w-[1300px] m-auto'>
        {/* Image à gauche */}
        <div className='w-[60%] h-full pr-10 mt-20 max-lg:w-full max-lg:pr-0 '>
          <Image
            width={1000}
            height={1000}
            alt='Électricien professionnel intervenant à Toulon'
            src='/images/electricien-toulon-expert.webp'
            className='w-full object-cover object-top min-h-screen max-h-[900px] max-lg:max-h-[600px] max-lg:max-w-[500px] m-auto'
          />
        </div>

        {/* Texte à droite */}
        <div className='w-[40%] flex flex-col py-2 px-0 gap-8 mt-20 max-lg:w-full max-lg:items-center'>
          <div className='flex flex-col gap-2 max-lg:max-w-[600px] max-lg:items-center max-sm:px-7'>
            <p className='text-[12px] font-semibold text-[#c1121f] uppercase tracking-[7px] max-md:text-center'>
              Électricien certifié à Toulon
            </p>
            <h3 className='text-[54px] text-[#003049] m-0 leading-[1.15em] font-bold tracking-[-1.5px] pr-7 max-lg:p-0 max-lg:text-center max-lg:text-[46px] max-md:text-[40px] max-md:leading-[1.05em] max-sm:text-[28px] '>
              Des dépannages électriques fiables à Toulon, 7j/7
            </h3>
          </div>

          <p className='text-[15px] font-light text-[#2E2937BF] leading-7'>
            Artisan électricien basé à Toulon, j’interviens rapidement pour tous vos besoins : pannes, installations, mises aux normes, domotique, tableaux électriques. Travail certifié, devis gratuit, intervention le jour même possible.
          </p>

          <ul className='grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-2 '>
            <li className='flex items-center gap-2 font-light'>
              <BsCheck className='w-8 h-8 text-[#c1121f]' />
              <span className='text-[#003049] text-[17px] font-semibold max-sm:text-[16px]'>Intervention en 30 minutes</span>
            </li>
            <li className='flex items-center gap-2 font-light'>
              <BsCheck className='w-8 h-8 text-[#c1121f]' />
              <span className='text-[#003049] text-[17px] font-semibold max-sm:text-[16px]'>Devis & conseils gratuits</span>
            </li>
            <li className='flex items-center gap-2 font-light'>
              <BsCheck className='w-8 h-8 text-[#c1121f]' />
              <span className='text-[#003049] text-[17px] font-semibold max-sm:text-[16px]'>Certifié & assuré</span>
            </li>
            <li className='flex items-center gap-2 font-light'>
              <BsCheck className='w-8 h-8 text-[#c1121f]' />
              <span className='text-[#003049] text-[17px] font-semibold max-sm:text-[16px]'>Clientèle à Toulon et alentours</span>
            </li>
          </ul>

          <div className='flex items-end gap-4 mt-6 max-sm:flex-col max-sm:items-center'>
            <Button variant='read' size='xlg' className='min-w-[200px] flex items-center gap-2 font-medium'>
              Savoir Plus
              <GoArrowRight style={{ width: '20px', height: '20px' }} />
            </Button>

            <div className='flex items-center gap-2 mt-4 text-[#003049] font-semibold cursor-pointer relative group'>
              <div className='w-16 h-16 bg-[#f0f0f0] flex items-center justify-center group-hover:bg-[#003049] transition-colors duration-200 group-hover:text-white'>
                <PiPhoneCallLight className='text-4xl' />
              </div>
              <span className='text-[18px] font-medium'>+33 7 56 93 52 00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
