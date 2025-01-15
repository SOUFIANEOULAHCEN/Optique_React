import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <h1 className="text-4xl font-bold text-center mb-6">À Propos de Nous</h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Optique Nouria est une entreprise passionnée par la mode et la santé visuelle. 
          Nous offrons une large gamme de lunettes de vue, de soleil et de sport pour répondre à tous vos besoins.
        </p>

        {/* Section Notre Histoire */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Notre Histoire</h2>
          <p className="text-gray-700 mb-4">
            Fondée en 2010, Optique Nouria a commencé comme un petit magasin familial dans le cœur de Paris. 
            Aujourd'hui, nous sommes fiers d'être l'une des principales enseignes d'optique en France, avec plus de 50 magasins à travers le pays.
          </p>
          <p className="text-gray-700">
            Notre mission est de fournir des lunettes de haute qualité, alliant style et confort, à des prix accessibles. 
            Nous croyons que chaque personne mérite de voir le monde avec clarté et style.
          </p>
        </div>

        {/* Section Notre Équipe */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
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
        </div>

        {/* Section Nos Valeurs */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
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
        </div>

        {/* Section Engagement Environnemental */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Engagement Environnemental</h2>
          <p className="text-gray-700 mb-4">
            Chez Optique Nouria, nous croyons en un avenir durable. C'est pourquoi nous nous engageons à réduire notre impact environnemental 
            en utilisant des matériaux recyclés et en soutenant des initiatives écologiques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Matériaux Recyclés</h3>
              <p className="text-gray-700">
                Toutes nos montures sont fabriquées à partir de matériaux recyclés ou biodégradables.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Initiatives Écologiques</h3>
              <p className="text-gray-700">
                Nous soutenons des projets de reforestation et de protection des océans à travers le monde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}