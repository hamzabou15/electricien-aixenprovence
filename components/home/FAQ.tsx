import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: "Quels sont vos délais d'intervention à Aix-en-Provence ?",
      answer: "Pour les urgences électriques (coupure totale, danger immédiat), nous intervenons en moins de 30 minutes dans Aix-en-Provence centre. Pour les autres interventions, nous convenons d'un créneau sous 24h."
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      answer: "Oui, tous nos devis sont gratuits et sans engagement. Après un diagnostic précis de votre situation, nous vous transmettons un devis détaillé avec un prix transparent, sans surprise."
    },
    {
      question: "Êtes-vous spécialisé en mise aux normes NF C15-100 ?",
      answer: "Absolument. Notre équipe d'électriciens certifiés maîtrise parfaitement la norme NF C15-100. Nous réalisons des mises en conformité complètes pour les particuliers et professionnels d'Aix-en-Provence."
    },
    {
      question: "Intervenez-vous pour les petites réparations ?",
      answer: "Oui, nous intervenons pour tous types de travaux électriques, des plus simples (remplacement de prise, installation d'éclairage) aux plus complexes (rénovation complète, tableau électrique)."
    },
    {
      question: "Quelle est votre zone d'intervention autour d'Aix-en-Provence ?",
      answer: "Nous couvrons tout le département des Bouches-du-Rhône, avec une intervention prioritaire sur Aix-en-Provence, Marseille, Vitrolles, Gardanne, Les Milles, Puyricard et les communes environnantes."
    }
  ];

  return (
    <section 
      className="w-full py-16 bg-[#F5F7FA]"
      id="faq"
      aria-label="Questions fréquentes sur nos services d'électricien à Aix-en-Provence"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0055AA] uppercase tracking-[4px] mb-4">
            Informations Pratiques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0055AA] mb-6">
            Questions fréquentes sur nos services d&apos;électricien
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus posées sur nos interventions électriques à Aix-en-Provence
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md group"
            >
              <summary className="flex justify-between items-center cursor-pointer font-bold text-lg text-[#0055AA]">
                {faq.question}
                <FaChevronDown className="text-[#FFD600] group-open:hidden block" />
                <FaChevronUp className="text-[#FFD600] group-open:block hidden" />
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-[#0055AA] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Une question spécifique ?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe d&apos;électriciens experts à Aix-en-Provence est à votre disposition pour répondre à toutes vos interrogations sur vos travaux électriques.
          </p>
          <button className="bg-[#FFD600] hover:bg-[#FFC400] text-[#0055AA] font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Contactez-nous par téléphone
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;