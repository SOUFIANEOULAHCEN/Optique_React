// Checkout.jsx
import React, { useContext } from 'react'; // Importez useContext ici
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContext'; // Importez CartContext

const stripePromise = loadStripe('VOTRE_CLE_PUBLIQUE_STRIPE'); // Remplacez par votre clé publique Stripe

const CheckoutForm = ({ cart, total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Envoyer le paymentMethod.id à votre backend pour finaliser le paiement
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
        Payer {total} €
      </button>
    </form>
  );
};

export default function Checkout() {
  const { cart } = useContext(CartContext); // Utilisez useContext pour accéder au panier
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