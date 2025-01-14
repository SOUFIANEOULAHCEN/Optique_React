import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <span>Appelez-nous: +33 1 23 45 67 89</span>
            <span>Email: contact@boutiquelunettes.fr</span>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-transparent">
              <option>EUR</option>
              <option>USD</option>
            </select>
            <select className="bg-transparent">
              <option>Français</option>
              <option>English</option>
            </select>
            <Link to="/connexion">Connexion</Link>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-900">
            OPTIQUE CHIC
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-amber-500">
                BOUTIQUE <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-amber-500">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/panier" className="p-2 hover:text-amber-500 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

