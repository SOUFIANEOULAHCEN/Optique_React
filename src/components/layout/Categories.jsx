import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

export default function Categories() {

const categories = [
    {
      id: 1,
      name: 'Lunettes de Vue',
      image: 'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/lunettes-de-vue',
    },
    {
      id: 2,
      name: 'Lunettes de Soleil',
      image: 'https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/lunettes-de-soleil',
    },
    {
      id: 3,
      name: 'Lunettes de Sport',
      image: 'https://images.pexels.com/photos/3522526/pexels-photo-3522526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/lunettes-de-sport',
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