import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importez motion depuis framer-motion

export default function Blog() {
  // Données des articles de blog (simulées)
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances lunettes 2023",
      description: "Découvrez les dernières tendances en matière de lunettes pour 2023, des montures audacieuses aux designs minimalistes.",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "15 octobre 2023",
      category: "Tendances",
    },
    {
      id: 2,
      title: "Comment choisir la bonne monture pour votre visage",
      description: "Guide complet pour choisir la monture de lunettes qui correspond le mieux à la forme de votre visage.",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "10 octobre 2023",
      category: "Conseils",
    },
    {
      id: 3,
      title: "Les avantages des verres anti-lumière bleue",
      description: "Protégez vos yeux des écrans avec des verres anti-lumière bleue. Découvrez leurs avantages et comment ils fonctionnent.",
      image: "https://images.unsplash.com/photo-1612817158486-7f0a7d0b8b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "5 octobre 2023",
      category: "Santé",
    },
    {
      id: 4,
      title: "Lunettes de soleil : comment bien les choisir",
      description: "Tout ce que vous devez savoir pour choisir des lunettes de soleil qui protègent vos yeux tout en restant stylées.",
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "1 octobre 2023",
      category: "Conseils",
    },
    {
      id: 5,
      title: "Les lunettes de sport : un must-have pour les athlètes",
      description: "Découvrez pourquoi les lunettes de sport sont essentielles pour les athlètes et comment choisir les bonnes.",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "25 septembre 2023",
      category: "Sport",
    },
    {
      id: 6,
      title: "Les lunettes vintage : un retour en force",
      description: "Les lunettes vintage sont de retour en force. Découvrez comment les intégrer à votre style.",
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "20 septembre 2023",
      category: "Tendances",
    },
  ];

  // Catégories de blog (simulées)
  const categories = [
    { id: 1, name: "Tendances" },
    { id: 2, name: "Conseils" },
    { id: 3, name: "Santé" },
    { id: 4, name: "Sport" },
    { id: 5, name: "Nouveautés" },
  ];

  // État pour la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState(null);

  // État pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Nombre d'articles par page

  // Filtrer les articles en fonction de la catégorie sélectionnée
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Calculer les articles à afficher pour la page actuelle
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Animation pour les articles
  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Découvrez nos articles sur les dernières tendances en matière de lunettes et de santé visuelle.
        </p>

        {/* Section Catégories */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1); // Réinitialiser la pagination lors du changement de catégorie
            }}
            className={`px-4 py-2 bg-white text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition-colors ${
              selectedCategory === null ? 'bg-emerald-900 !text-white' : ''
            }`}
          >
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.name);
                setCurrentPage(1); // Réinitialiser la pagination lors du changement de catégorie
              }}
              className={`px-4 py-2 bg-white text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition-colors ${
                selectedCategory === category.name ? 'bg-emerald-900 !text-white' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Section Articles de Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={postVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date} • {post.category}</span>
                <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <button className="text-emerald-900 font-semibold hover:text-amber-500 transition-colors">
                  Lire la suite →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Pagination */}
        <div className="flex justify-center mt-12">
          {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 bg-white text-emerald-900 rounded-lg hover:bg-emerald-900 hover:text-white transition-colors ${
                currentPage === i + 1 ? 'bg-emerald-900 !text-white' : ''
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}