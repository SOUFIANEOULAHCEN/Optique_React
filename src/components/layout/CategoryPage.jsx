import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart, toggleFavorite, favorites } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Fonction pour convertir les URL avec tirets en format avec espaces
  const formatCategory = (categorySlug) => {
    return categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Débogage pour vérifier la valeur de formatCategory(category)
  console.log("Formatted Category:", formatCategory(category));

  const filteredProducts = category
    ? products.filter(product => 
        product.category.toLowerCase() === formatCategory(category).toLowerCase()
      )
    : [];

  // Calcul pour la pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          {formatCategory(category) || 'Catégorie non trouvée'}
        </h1>
        
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-700">Aucun produit trouvé dans cette catégorie.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
                  <div className="relative mb-4 flex-grow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover" // Hauteur fixe pour les images
                    />
                    <button
                      onClick={() => toggleFavorite(product)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.some(fav => fav.id === product.id) ? 'text-red-500' : 'text-gray-500'
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-900">
                      {product.price.toFixed(2)} €
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-sm text-white bg-emerald-900 px-4 py-2 hover:bg-amber-500 transition-colors"
                    >
                      AJOUTER AU PANIER
                    </button>
                  </div>
                </div>
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
          </>
        )}
      </div>
    </div>
  );
}