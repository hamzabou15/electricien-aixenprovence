import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section
      id="pourquoi-nous"
      aria-label="Pourquoi choisir notre entreprise d'électricité"
      className="w-full bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-[#0055AA] uppercase tracking-[4px]">
            Notre différence
          </span>
          <h2 className="text-3xl font-bold text-[#003049] mt-3 mb-6">
            Pourquoi nous choisir à Aix-en-Provence ?
          </h2>
          
          <ul className="space-y-4">
            {[
              "Électriciens certifiés avec plus de 20 ans d'expérience",
              "Intervention en moins de 30 minutes sur Aix-en-Provence",
              "Matériel de qualité conforme aux normes françaises",
              "Devis gratuit et transparent sans surprise",
              "Garantie décennale sur tous nos travaux",
              "Service client disponible 7j/7"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-[#FFD600] mt-1 mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-[#0055AA] text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">24h/24</div>
              <div>Disponibilité</div>
            </div>
            <div className="bg-[#FFD600] text-[#0055AA] px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">3500+</div>
              <div>Interventions</div>
            </div>
            <div className="bg-[#003366] text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">98%</div>
              <div>Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Image
            src={"/images/un-electricien-sur-aixenprovence.webp"}
            alt=''
            width={500}
            height={500}
            className='border-2 border-dashed rounded-xl w-full h-[400px] object-cover'
  />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;