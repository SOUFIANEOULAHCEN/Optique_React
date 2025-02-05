import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/layout/Footer';
import Categories from './components/layout/Categories';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import CategoryPage from './components/layout/CategoryPage';
import Checkout from './components/Checkout/Checkout';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Features from './components/pages/Features';
import Shop from './components/pages/Shop';
import Favorites from './components/pages/Favorites';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile'; // Importez le composant Profile

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
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
                        <div id="product-grid">
                          <ProductGrid />
                        </div>
                      </>
                    }
                  />
                  <Route path="/:category" element={<CategoryPage />} />
                  <Route path="/panier" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/a-propos" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/caracteristiques" element={<Features />} />
                  <Route path="/boutique" element={<Shop />} />
                  <Route path="/search" element={<ProductGrid />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/connexion" element={<Login />} />
                  <Route path="/inscription" element={<Register />} />
                  <Route path="/profil" element={<Profile />} /> {/* Ajoutez cette route */}
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}