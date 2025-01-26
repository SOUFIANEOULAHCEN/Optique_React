// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
                    <p className="text-gray-700">{product.price.toFixed(2)} Dh</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      className="text-sm text-white bg-red-500 px-4 py-2 hover:bg-red-600 transition-colors"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      className="text-sm text-white bg-green-500 px-4 py-2 hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
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
            <div className="text-right mt-8">
              <h3 className="text-2xl font-bold">Total : {calculateTotal()} Dh</h3>
              {/* Bouton "Passer au paiement" */}
              <Link
                to="/checkout"
                className="inline-block text-sm text-white bg-emerald-900 px-4 py-2 hover:bg-amber-500 transition-colors mt-4"
              >
                Passer au paiement
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}