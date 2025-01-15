import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Heart } from 'lucide-react'; // Ajoutez l'icône Heart pour les favoris
import { CartContext } from '../../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Première section : Informations de contact et sélecteurs de langue/devise */}
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

        {/* Deuxième section : Logo, navigation et panier */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-900">
            OPTIQUE NOURIA
          </Link>

          {/* Menu Hamburger pour mobile */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation pour desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <Link to="/boutique" className="hover:text-amber-500">BOUTIQUE</Link>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Formulaire de recherche (masqué sur mobile) */}
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded-l"
              />
              <button type="submit" className="p-2 bg-emerald-900 text-white rounded-r hover:bg-amber-500">
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Icône des favoris */}
            <Link to="/favorites" className="p-2 hover:text-amber-500">
              <Heart className="w-5 h-5" />
            </Link>

            {/* Panier */}
            <Link to="/panier" className="p-2 hover:text-amber-500 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation pour mobile */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-4 py-4 border-t">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <Link to="/boutique" className="hover:text-amber-500">BOUTIQUE</Link>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>
        )}
      </div>
    </header>
  );
}