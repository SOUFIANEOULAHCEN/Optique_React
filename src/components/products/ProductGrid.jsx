import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products.js';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ProductGrid() {
  const { addToCart, toggleFavorite, favorites } = useContext(CartContext);
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1); // État pour la page actuelle
  const productsPerPage = 8; // Nombre de produits par page

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);

  // Calcul des produits à afficher pour la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Nombre total de pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation pour les produits
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`py-16 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">DÉCOUVREZ NOS PRODUITS</h2>
          <div className="flex justify-center gap-8 text-sm">
            <button className="text-emerald-900 font-medium">MEILLEURES VENTES</button>
            <button className="text-gray-500 hover:text-emerald-900">NOUVEAUTÉS</button>
            <button className="text-gray-500 hover:text-emerald-900">PLUS DEMANDÉS</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={productVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative mb-4 aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-emerald-900 text-white px-2 py-1 text-sm z-10">
                    NOUVEAU
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 text-sm z-10">
                    SOLDES
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <button
                  onClick={() => toggleFavorite(product)}
                  className={`absolute top-4 right-4 p-2 rounded-full shadow hover:scale-105 transition-transform z-10 ${
                    favorites.some(fav => fav.id === product.id)
                      ? 'bg-green-800'
                      : 'bg-white'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.some(fav => fav.id === product.id)
                        ? 'text-white'
                        : 'text-gray-500'
                    }`}
                  />
                </button>
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-emerald-900">
                  {product.price.toFixed(2)} Dh
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="text-sm text-white bg-emerald-900 px-4 py-2 hover:bg-amber-500 transition-colors rounded"
                >
                  AJOUTER AU PANIER
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? 'bg-emerald-900 text-white'
                    : 'bg-white text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}