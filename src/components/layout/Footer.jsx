import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">OPTIQUE CHIC</h3>
            <p className="text-gray-600 text-sm">
              Optique Chic est votre destination pour des lunettes de qualité. 
              Le meilleur choix pour votre style et votre confort visuel.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">INFORMATIONS</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-amber-500">Carrières</a></li>
              <li><a href="#" className="hover:text-amber-500">Nos Magasins</a></li>
              <li><a href="#" className="hover:text-amber-500">Actualités</a></li>
              <li><a href="#" className="hover:text-amber-500">Programme de Fidélité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SERVICE CLIENT</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-amber-500">Retours et Échanges</a></li>
              <li><a href="#" className="hover:text-amber-500">Livraison</a></li>
              <li><a href="#" className="hover:text-amber-500">Cartes Cadeaux</a></li>
              <li><a href="#" className="hover:text-amber-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">NOUS CONTACTER</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-900" />
                123 Rue de la Mode, 75001 Paris, France
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-900" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-900" />
                contact@optiquechic.fr
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 OPTIQUE CHIC. Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

