import React, { useContext, useState } from 'react'; // Importez useContext
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { CartContext } from '../../context/CartContext'; // Importez CartContext

export default function Header() {
  const { cart } = useContext(CartContext); // Accédez à cart depuis le contexte
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-900">
            OPTIQUE NOURIA
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-amber-500">ACCUEIL</Link>
            <Link to="/boutique" className="hover:text-amber-500">BOUTIQUE</Link>
            <Link to="/caracteristiques" className="hover:text-amber-500">CARACTÉRISTIQUES</Link>
            <Link to="/a-propos" className="hover:text-amber-500">À PROPOS</Link>
            <Link to="/blog" className="hover:text-amber-500">BLOG</Link>
            <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
          </nav>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="flex items-center">
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
            <Link to="/panier" className="p-2 hover:text-amber-500 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length} {/* Utilisez cart ici */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}