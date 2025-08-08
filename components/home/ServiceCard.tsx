import {
    FaExclamationTriangle,
    FaRegCheckCircle,
    FaPlug,
    FaLightbulb
} from "react-icons/fa";

const AboutServices = () => {
    const services = [
        {
            title: "Dépannage Urgence 24h/24",
            description: "Intervention rapide sur Aix-en-Provence pour toutes pannes électriques",
            icon: <FaExclamationTriangle className="text-white text-2xl" />
        },
        {
            title: "Mise aux Normes NFC 15-100",
            description: "Certification de vos installations électriques à Aix-en-Provence",
            icon: <FaRegCheckCircle className="text-white text-2xl" />
        },
        {
            title: "Tableaux Électriques",
            description: "Installation et rénovation de tableaux électriques sécurisés",
            icon: <FaPlug className="text-white text-2xl" />
        },
        {
            title: "Éclairage & Automatismes",
            description: "Solutions d'éclairage moderne pour maisons et entreprises",
            icon: <FaLightbulb className="text-white text-2xl" />
        }
    ];

    return (
        <section
            className="py-16 bg-gray-50"
            id="services-electricien-aix"
            aria-label="Nos services d'électricité à Aix-en-Provence"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0055AA] mb-4">
                        Nos Services Électriques à <span className="text-[#FFD600]">Aix-en-Provence</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Des solutions complètes pour particuliers et professionnels sur Aix et sa région
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all group"
                        >
                            <div
                                className="w-16 h-16 bg-[#0055AA] rounded-full flex items-center justify-center mb-6
                                transition-all duration-300 group-hover:bg-[#FFD600] group-hover:text-[#0055AA]"
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#003049] mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#0055AA] hover:bg-[#004488] text-white py-3 px-8 rounded-lg font-bold text-lg transition-colors">
                        Voir tous nos services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;