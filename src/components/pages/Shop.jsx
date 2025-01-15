import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Importez le CartContext

export default function Shop() {
  // Données des produits (simulées)
  const products = [
    {
      id: 1,
      name: "Lunettes de vue Classique",
      price: 120,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Vue",
    },
    {
      id: 2,
      name: "Lunettes de soleil Aviator",
      price: 150,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Soleil",
    },
    {
      id: 3,
      name: "Lunettes de sport Performance",
      price: 90,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Sport",
    },
    {
      id: 4,
      name: "Lunettes de vue Minimaliste",
      price: 100,
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Vue",
    },
    {
      id: 5,
      name: "Lunettes de soleil Ronde",
      price: 130,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Soleil",
    },
    {
      id: 6,
      name: "Lunettes de sport Cyclisme",
      price: 95,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Lunettes de Sport",
    },
  ];

  // Catégories de produits (simulées)
  const categories = [
    { id: 1, name: "Tous" },
    { id: 2, name: "Lunettes de Vue" },
    { id: 3, name: "Lunettes de Soleil" },
    { id: 4, name: "Lunettes de Sport" },
  ];

  // État pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Utilisation du contexte pour accéder aux fonctions du panier
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts = selectedCategory === "Tous"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Calculer le total du panier
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <h1 className="text-4xl font-bold text-center mb-6">Boutique</h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Explorez notre collection complète de lunettes de vue, de soleil et de sport.
        </p>

        {/* Section Filtres par Catégorie */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 bg-white text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition-colors ${
                selectedCategory === category.name ? 'bg-emerald-900 !text-white' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Section Produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-emerald-900 mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-900">
                    {product.price.toFixed(2)} €
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-sm text-white bg-emerald-900 px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Panier */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Votre Panier</h2>
          {cart.length === 0 ? (
            <p className="text-gray-700">Votre panier est vide.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-emerald-900">{item.name}</h3>
                      <p className="text-gray-700">
                        {item.quantity} x {item.price.toFixed(2)} €
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <div className="border-t pt-4">
                <p className="text-xl font-bold text-emerald-900">
                  Total : {total.toFixed(2)} €
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}