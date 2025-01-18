// src/components/layout/Header.jsx
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Heart, Moon, Sun } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useTheme();
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
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-900">
            OPTIQUE NOURIA
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <Link to="/boutique" className="hover:text-amber-500">BOUTIQUE</Link>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Search Form (Hidden on Mobile) */}
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

            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="p-2 hover:text-amber-500">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
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