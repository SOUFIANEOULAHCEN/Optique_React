import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.js';
// import (products) from '../data/products.js';

export default function CategoryPage() {
  const { category } = useParams(); // Récupère le nom de la catégorie depuis l'URL
  const { addToCart, toggleFavorite, favorites } = useContext(CartContext);

  // const products = [
  
  //   {
  //     id: 1,
  //     name: "Lunettes de vue Classique",
  //     description: "Des lunettes de vue élégantes et intemporelles, parfaites pour un usage quotidien. Disponibles en plusieurs coloris.",
  //     price: 120,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Vue"
  //   },
  //   {
  //     id: 2,
  //     name: "Lunettes de soleil Aviator",
  //     description: "Lunettes de soleil style aviateur avec verres polarisés pour une protection optimale contre les UV.",
  //     price: 150,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Soleil"
  //   },
  //   {
  //     id: 3,
  //     name: "Lunettes de vue Modern",
  //     description: "Un design moderne et épuré pour ces lunettes de vue, parfaites pour les amateurs de style contemporain.",
  //     price: 140,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Vue"
  //   },
  //   {
  //     id: 4,
  //     name: "Lunettes de soleil Ronde",
  //     description: "Lunettes de soleil rondes avec un look rétro, idéales pour un style unique et tendance.",
  //     price: 130,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Soleil"
  //   },
  //   {
  //     id: 5,
  //     name: "Lunettes de sport Performance",
  //     description: "Lunettes de sport légères et résistantes, conçues pour les activités intenses et les amateurs de plein air.",
  //     price: 90,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Sport"
  //   },
  //   {
  //     id: 6,
  //     name: "Lunettes de vue Minimaliste",
  //     description: "Lunettes de vue au design minimaliste, légères et discrètes, parfaites pour un style épuré.",
  //     price: 100,
  //     image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Vue"
  //   },
  //   {
  //     id: 7,
  //     name: "Lunettes de soleil Sport",
  //     description: "Lunettes de soleil spécialement conçues pour les sports de plein air, offrant une protection maximale contre les UV.",
  //     price: 110,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Sport"
  //   },
  //   {
  //     id: 8,
  //     name: "Lunettes de vue Vintage",
  //     description: "Lunettes de vue au style vintage, parfaites pour ceux qui aiment les designs rétro et élégants.",
  //     price: 160,
  //     image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Vue"
  //   },
  //   {
  //     id: 9,
  //     name: "Lunettes de soleil Mirroir",
  //     description: "Lunettes de soleil à verres miroir, offrant un style moderne et une protection optimale contre les reflets.",
  //     price: 170,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Soleil"
  //   },
  //   {
  //     id: 10,
  //     name: "Lunettes de sport Cyclisme",
  //     description: "Lunettes de sport spécialement conçues pour le cyclisme, avec une protection contre le vent et les UV.",
  //     price: 95,
  //     image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     category: "Lunettes de Sport"
  //   }
  // ];

  // Vérifiez si category est défini avant de filtrer les produits
  const filteredProducts = category
    ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    : [];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">{category || 'Catégorie non trouvée'}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
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
              <p className="text-gray-700 mb-4">{product.description}</p>
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
      </div>
    </div>
  );
}