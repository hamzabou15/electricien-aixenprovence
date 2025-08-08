import React from 'react'
import { FaPlug, FaBolt, FaHome, FaTools, FaShieldAlt, FaLightbulb } from 'react-icons/fa'
import Link from 'next/link'

const ServicesGrid = () => {
  const services = [
    {
      icon: <FaBolt className="text-4xl text-[#FFD600]" />,
      title: "Dépannage électrique urgent",
      description: "Intervention rapide 24h/24 pour coupures, courts-circuits et pannes électriques à Aix-en-Provence",
      keywords: ["urgence électricité", "dépannage électrique Aix-en-Provence", "panne courant"]
    },
    {
      icon: <FaPlug className="text-4xl text-[#FFD600]" />,
      title: "Mise aux normes NF C 15-100",
      description: "Remise en conformité de votre installation électrique pour une sécurité optimale à Aix-en-Provence",
      keywords: ["norme électrique", "mise aux normes Aix", "NF C15-100"]
    },
    {
      icon: <FaHome className="text-4xl text-[#FFD600]" />,
      title: "Rénovation électrique complète",
      description: "Modernisation de votre installation électrique pour plus de confort et d'efficacité à Aix-en-Provence",
      keywords: ["rénovation électrique", "électricien rénovation", "remise à neuf électricité"]
    },
    {
      icon: <FaTools className="text-4xl text-[#FFD600]" />,
      title: "Installation tableau électrique",
      description: "Remplacement et installation de tableaux divisionnaires sécurisés à Aix-en-Provence",
      keywords: ["tableau électrique", "disjoncteur Aix", "remplacement tableau"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#FFD600]" />,
      title: "Diagnostic électrique",
      description: "Contrôle complet de votre installation pour identifier les risques et améliorations à Aix-en-Provence",
      keywords: ["diagnostic électrique", "contrôle installation", "expertise électricité"]
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#FFD600]" />,
      title: "Éclairage et domotique",
      description: "Installation de systèmes d'éclairage modernes et solutions domotiques à Aix-en-Provence",
      keywords: ["éclairage maison", "domotique Aix", "électricien domotique"]
    }
  ]

  return (
    <section 
      className="w-full py-16 bg-white"
      id="services"
      aria-label="Services d'électricien à Aix-en-Provence"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0055AA] uppercase tracking-[4px] mb-4">
            Solutions Électriques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0055AA] mb-6">
            Nos services d&apos;électricien à <span className="text-[#FFD600]">Aix-en-Provence</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Électricien expert pour tous vos besoins en installation, rénovation et dépannage électrique dans le 13
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0055AA] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.keywords.map((keyword, i) => (
                  <span key={i} className="bg-[#0055AA]/10 text-[#0055AA] text-xs px-3 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="text-[#0055AA] font-semibold flex items-center gap-2 group">
                Demander un devis
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <button className="bg-[#0055AA] hover:bg-[#004488] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg">
              Obtenir un diagnostic gratuit
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid