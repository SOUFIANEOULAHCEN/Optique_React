import React, { useContext } from 'react';
import { useAuth } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

export default function Profile() {
  const { user } = useAuth();
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">Mon Profil</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4 dark:text-gray-300">Informations Personnelles</h2>
          <p className="text-gray-700 mb-4 dark:text-gray-400">Email: {user?.email}</p>

          <h2 className="text-2xl font-bold text-emerald-900 mb-4 dark:text-gray-300">Historique des Achats</h2>
          {cart.length === 0 ? (
            <p className="text-gray-700 dark:text-gray-400">Vous n'avez effectué aucun achat pour le moment.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="border-b pb-4 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-emerald-900 dark:text-gray-300">{item.name}</h3>
                  <p className="text-gray-700 dark:text-gray-400">{item.quantity} x {item.price.toFixed(2)} Dh</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}