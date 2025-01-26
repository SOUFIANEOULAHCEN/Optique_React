import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Heart } from 'lucide-react'; // Importez l'icône Heart

export default function Favorites() {
  const { favorites, addToCart, toggleFavorite } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Mes Favoris</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-gray-700">Vous n'avez aucun produit favori pour le moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`absolute top-4 right-4 p-2 rounded-full shadow hover:scale-105 transition-transform ${
                      favorites.some(fav => fav.id === product.id)
                        ? 'bg-green-800' // Fond vert si le produit est favori
                        : 'bg-white' // Fond blanc par défaut
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.some(fav => fav.id === product.id)
                          ? 'text-white' // Icône blanche si le produit est favori
                          : 'text-gray-500' // Icône grise par défaut
                      }`}
                    />
                  </button>
                </div>
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-900">
                    {product.price.toFixed(2)} Dh
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
        )}
      </div>
    </div>
  );
}