import React from 'react'

const About = () => {
  return (
    <section
      className="w-full px-9 py-24 md:px-12 md:py-20  sm:py-16 max-sm:px-7 max-md:px-9 max-w-[1300px] "
      id="a-propos-electricien-Toulon"
      aria-label="Présentation de l'entreprise d'électricité à Toulon"
    >
      <div className="flex items-start text-[#003049]  gap-12 max-lg:gap-8 max-sm:flex-col max-sm:items-start">
        {/* Texte principal */}
        <div className="flex flex-col gap-4 xl:pr-9 max-w-[600px] items-start max-sm:items-center">
          <p className="text-[12px] font-semibold text-[#c1121f] uppercase tracking-[7px] max-sm:text-[11px] text-start max-md:text-[10px] max-sm:text-center">
            À propos de l&apos;entreprise
          </p>
          <h2 className="text-[42px] leading-[1.15em] font-bold tracking-[-1.5px] max-sm:text-[32px] text-start max-lg:text-[36px] max-md:text-[32px] max-sm:text-center">
            Spécialiste en dépannage électrique et mise en conformité à Toulon
          </h2>
          <p className="text-[17px] font-light leading-8 max-ms:text-center">
            Depuis plus de 10 ans, nous accompagnons les particuliers et les professionnels de la région niçoise pour tous leurs besoins en électricité : <strong>pannes soudaines</strong>, <strong>coupures générales ou partielles</strong>, <strong>remplacement de tableaux électriques à Toulon</strong>, ou encore <strong>remise aux normes NF C 15-100</strong>.
          </p>
          <p className="text-[17px] font-light leading-8 max-ms:text-center">
            Nos interventions débutent toujours par un <strong>diagnostic de panne complet</strong> et des <strong>tests précis de vos circuits électriques</strong>. Ensuite, nous procédons aux réparations, au remplacement des équipements défectueux, ou à la mise en conformité selon la norme en vigueur.
          </p>
        </div>

        {/* Zone complémentaire */}
        <div className="max-w-[500px] px-14 max-lg:px-0 max-md:max-w-[100%]">
          <p className="text-[17px] font-light leading-8 max-ms:text-center mb-4">
            En choisissant notre entreprise, vous faites appel à un électricien certifié, fiable et réactif, basé à Toulon. Nous assurons une disponibilité 7j/7 pour les urgences et garantissons des installations durables, sécurisées et conformes.
          </p>
          <p className="text-[17px] font-light leading-8 max-ms:text-center">
            N&apos;attendez pas qu une panne devienne un danger. Contactez dès maintenant votre <strong>électricien urgence panne à Toulon</strong> pour un <strong>devis gratuit</strong> ou une <strong>intervention rapide</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
