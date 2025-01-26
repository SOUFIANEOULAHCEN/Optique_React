


// src/components/Checkout/Checkout.jsx
import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('VOTRE_CLE_PUBLIQUE_STRIPE');

const CheckoutForm = ({ cart, total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!user) {
      alert('Veuillez vous connecter pour effectuer un paiement.');
      navigate('/connexion');
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      alert('Paiement réussi !');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <CardElement className="mb-4" />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-emerald-900 text-white px-4 py-2 hover:bg-amber-500 transition-colors"
      >
        Payer {total} Dh
      </button>
    </form>
  );
};

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Paiement</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} total={total} />
        </Elements>
      </div>
    </div>
  );
}