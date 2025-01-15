import React from 'react';

export default function Features() {
  // Données des caractéristiques (simulées)
  const features = [
    {
      id: 1,
      title: "Design Élégant",
      description: "Nos lunettes allient style et confort, avec des designs modernes et intemporels.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Matériaux Durables",
      description: "Nous utilisons des matériaux de haute qualité pour garantir la durabilité de nos produits.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Protection UV",
      description: "Nos verres offrent une protection optimale contre les rayons UV nocifs.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Confort Optimal",
      description: "Nos montures sont conçues pour un confort optimal, même après une longue journée.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Personnalisation",
      description: "Personnalisez vos lunettes selon vos préférences pour un style unique.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Service Client Exceptionnel",
      description: "Notre équipe est toujours disponible pour répondre à vos questions et besoins.",
      icon: (
        <svg
          className="w-12 h-12 text-emerald-900 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Titre */}
        <h1 className="text-4xl font-bold text-center mb-6">Caractéristiques</h1>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Découvrez les caractéristiques uniques de nos produits et services.
        </p>

        {/* Section Caractéristiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}