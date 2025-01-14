import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

export default function Categories() {
  // Données des catégories
  const categories = [
    {
      id: 1,
      name: 'Lunettes de Vue',
      image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '/lunettes-de-vue', // Lien vers la catégorie
    },
    {
      id: 2,
      name: 'Lunettes de Soleil',
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '/lunettes-de-soleil', // Lien vers la catégorie
    },
    {
      id: 3,
      name: 'Lunettes pour Enfants',
      image: 'https://images.unsplash.com/photo-1612817158486-7f0a7d0b8b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '/lunettes-enfants', // Lien vers la catégorie
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              to={category.link} // Utilisation de Link pour la navigation
              key={category.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}