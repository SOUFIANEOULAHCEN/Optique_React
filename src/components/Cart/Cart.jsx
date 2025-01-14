// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Votre Panier</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-700">Votre panier est vide.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-700">{product.price.toFixed(2)} €</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-sm text-white bg-red-500 px-4 py-2 hover:bg-red-600 transition-colors"
                  >
                    Supprimer
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