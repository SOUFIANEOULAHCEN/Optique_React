import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-800 text-gray-950" : "bg-gray-50 text-gray-900"
      } pt-16 pb-8`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Section 1 : Logo et description */}
          <div>
            <h3 className="text-xl font-bold text-gray-950 dark:text-gray-950 mb-4">
              OPTIQUE NOURIA
            </h3>
            <p className="text-gray-900 dark:text-gray-950 text-sm">
              Optique Nouria est votre destination pour des lunettes de qualité.
              Le meilleur choix pour votre style et votre confort visuel.
            </p>
          </div>

          {/* Section 2 : Informations */}
          <div>
            <h4 className="font-bold text-gray-950 dark:text-gray-950 mb-4">
              INFORMATIONS
            </h4>
            <ul className="space-y-2 text-sm text-gray-900 dark:text-gray-950">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Carrières
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Nos Magasins
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Programme de Fidélité
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 : Service client */}
          <div>
            <h4 className="font-bold text-gray-950 dark:text-gray-950 mb-4">
              SERVICE CLIENT
            </h4>
            <ul className="space-y-2 text-sm text-gray-900 dark:text-gray-950">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Retours et Échanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Livraison
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  Cartes Cadeaux
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 : Nous contacter */}
          <div>
            <h4 className="font-bold text-gray-950 dark:text-gray-950 mb-4">
              NOUS CONTACTER
            </h4>
            <ul className="space-y-4 text-sm text-gray-900 dark:text-gray-950">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-900 dark:text-gray-950" />
                Route nationale N9 devant le marché quotidien de tarmigt
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-900 dark:text-gray-950" />
                +212 62 377 599
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-900 dark:text-gray-950" />
                nouriaoptique@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center text-sm text-gray-900 dark:text-gray-950">
          <p>&copy; 2025 OPTIQUE NOURIA. Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}