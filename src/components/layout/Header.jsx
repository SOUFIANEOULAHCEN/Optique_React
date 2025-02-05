import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Heart, Moon, Sun, User } from 'lucide-react'; // Ajoutez l'icône User
import { CartContext } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext'; // Importez useAuth pour accéder au profil


import logo_principal from '../data/img/logo/logo_principal.png'
export default function Header() {
  const { cart } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useAuth(); // Utilisez useAuth pour accéder à l'utilisateur
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} border-b`}>
      <div className="container mx-auto px-4">
        {/* Top Section: Contact Info and Language/Currency Selectors */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <span>Appelez-nous: +212 62 377 599</span>
            <span>Email: nouriaoptique@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <select className={`bg-transparent ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <option>Français</option>
              <option>Arabe</option>
            </select>
            <Link to="/connexion" className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connexion
            </Link>
          </div>
        </div>

        {/* Main Section: Logo, Navigation, and Cart */}
        <div className="flex items-center justify-between py-1">
          <Link to="/" className="w-28">
           <img src={logo_principal} alt=""  />
          </Link>

          {/* Hamburger Menu for Mobile and Tablet */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation for Desktop, Tablet, and Mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <Link to="/boutique" className="hover:text-amber-500">BOUTIQUE</Link>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Search Form (Hidden on Mobile and Tablet) */}
            <form onSubmit={handleSearch} className="hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`border p-2 rounded-l ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              />
              <button type="submit" className="p-2 bg-emerald-900 text-white rounded-r hover:bg-amber-500">
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Favorites Icon */}
            <Link to="/favorites" className="p-2 hover:text-amber-500">
              <Heart className="w-5 h-5" />
            </Link>

            {/* Cart Icon */}
            <Link to="/panier" className="p-2 hover:text-amber-500 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>

            {/* Profile Icon */}
            <Link to="/profil" className="p-2 hover:text-amber-500">
              <User className="w-5 h-5" /> {/* Icône pour accéder au profil */}
            </Link>

            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="p-2 hover:text-amber-500">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Navigation Menu */}
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













