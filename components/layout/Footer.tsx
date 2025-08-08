import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#003049] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#FFD600]">
            SOS Électricien<br />
            <span className="text-white">Aix-en-Provence</span>
          </h3>
          <p className="mb-6 text-white/80">
            Électricien certifié intervenant 24h/24 sur Aix-en-Provence et sa région pour tous vos dépannages électriques, installations et mises aux normes.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#FFD600] text-[#003049] p-3 rounded-full hover:bg-[#FFC400] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#FFD600] text-[#003049] p-3 rounded-full hover:bg-[#FFC400] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#FFD600] text-[#003049] p-3 rounded-full hover:bg-[#FFC400] transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6 border-b border-[#FFD600] pb-2">Services</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Dépannage électrique</a></li>
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Mise aux normes NF C15-100</a></li>
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Tableau électrique</a></li>
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Rénovation électrique</a></li>
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Diagnostic électrique</a></li>
            <li><a href="#" className="hover:text-[#FFD600] transition-colors">Éclairage et domotique</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6 border-b border-[#FFD600] pb-2">Zones d&lsquo;intervention</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Aix-en-Provence</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Marseille</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Vitrolles</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Gardanne</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Les Milles</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#FFD600]" /> Puyricard</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6 border-b border-[#FFD600] pb-2">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaPhone className="text-[#FFD600] mt-1" />
              <div>
                <p className="font-semibold">Téléphone</p>
                <a href="tel:+33756935200" className="hover:text-[#FFD600] transition-colors">07 56 93 52 00</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-[#FFD600] mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:contact@electricienaixenprovence-sos.fr" className="hover:text-[#FFD600] transition-colors">contact@electricienaixenprovence-sos.fr</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="text-[#FFD600] mt-1" />
              <div>
                <p className="font-semibold">Horaires</p>
                <p>24h/24 - 7j/7</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFD600] mt-1" />
              <div>
                <p className="font-semibold">Adresse</p>
                <p>12 Rue Masséna, 13100 Aix-en-Provence</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} SOS Électricien Aix-en-Provence - Tous droits réservés
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm">Mentions légales</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Politique de confidentialité</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;