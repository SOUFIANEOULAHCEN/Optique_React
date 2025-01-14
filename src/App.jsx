// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/layout/Footer';
import Categories from './components/layout/Categories';
import LunettesDeVue from './components/pages/LunettesDeVue';
import LunettesDeSoleil from './components/pages/LunettesDeSoleil';
import LunettesEnfants from './components/pages/LunettesEnfants';
import Cart from './components/Cart/Cart'; // Importez le composant Cart
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Categories />
                    <ProductGrid />
                  </>
                }
              />
              <Route path="/lunettes-de-vue" element={<LunettesDeVue />} />
              <Route path="/lunettes-de-soleil" element={<LunettesDeSoleil />} />
              <Route path="/lunettes-enfants" element={<LunettesEnfants />} />
              <Route path="/panier" element={<Cart />} /> {/* Route pour le panier */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}