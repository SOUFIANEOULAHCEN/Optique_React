import React from 'react';
import { motion } from 'framer-motion'; // Importez motion depuis framer-motion

export default function About() {
  // Animation pour les sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <h1 className="text-4xl font-bold text-center mb-6">À Propos de Nous</h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Bienvenue sur Optique Noria, votre site dédié à la présentation de nos produits et services dans le domaine de l'optique.
        </p>

        {/* Section Introduction */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Notre Mission</h2>
          <p className="text-gray-700 mb-4">
            Nous avons conçu cette plateforme pour vous offrir une navigation simple, fluide et agréable, tout en mettant en valeur nos solutions adaptées à vos besoins.
          </p>
          <p className="text-gray-700">
            Avec une interface moderne et organisée, vous pouvez :
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Explorer notre collection de produits et découvrir nos services en détail.</li>
            <li>Ajouter vos articles préférés à une liste de favoris pour les retrouver facilement.</li>
            <li>Utiliser notre page de contact pour toute question ou demande d’information.</li>
          </ul>
        </motion.div>

        {/* Section Notre Engagement */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Notre Engagement</h2>
          <p className="text-gray-700 mb-4">
            Notre mission est de vous permettre de découvrir nos offres en toute simplicité, tout en reflétant notre engagement envers la qualité et la satisfaction de nos clients.
          </p>
          <p className="text-gray-700">
            Merci de nous faire confiance et bienvenue dans l’univers d’Optique Noria.
          </p>
        </motion.div>

        {/* Section Notre Équipe */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Notre Équipe</h2>
          <p className="text-gray-700 mb-4">
            Notre équipe est composée de professionnels passionnés, allant des opticiens certifiés aux designers de montures.
            Chaque membre de notre équipe partage une passion commune pour la santé visuelle et la mode.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Membre de l'équipe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sophie Martin</h3>
              <p className="text-gray-600">Optométriste</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Membre de l'équipe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jean Dupont</h3>
              <p className="text-gray-600">Designer de Montures</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Membre de l'équipe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Laura Petit</h3>
              <p className="text-gray-600">Responsable Clientèle</p>
            </div>
          </div>
        </motion.div>

        {/* Section Nos Valeurs */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Qualité</h3>
              <p className="text-gray-700">
                Nous nous engageons à offrir des produits de haute qualité, fabriqués avec des matériaux durables et respectueux de l'environnement.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                Nous sommes constamment à la recherche de nouvelles technologies et designs pour améliorer l'expérience de nos clients.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Service Client</h3>
              <p className="text-gray-700">
                Notre équipe est dévouée à fournir un service client exceptionnel, avec des conseils personnalisés pour chaque client.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}