// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Hero from './components/layout/Hero';
// import ProductGrid from './components/products/ProductGrid';
// import Footer from './components/layout/Footer';
// import Categories from './components/layout/Categories';

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-1">
//           <Hero />
//           <Categories />
//           <ProductGrid />
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/layout/Footer';
import Categories from './components/layout/Categories';
// import Home from './pages/Home'; // Votre page d'accueil
import LunettesDeVue from './components/pages/LunettesDeVue'; // Page pour Lunettes de Vue
import LunettesDeSoleil from './components/pages/LunettesDeSoleil'; // Page pour Lunettes de Soleil
import LunettesEnfants from './components/pages/LunettesEnfants'; // Page pour Lunettes pour Enfants

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Route pour la page d'accueil */}
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
            {/* Route pour la page Lunettes de Vue */}
            <Route path="/lunettes-de-vue" element={<LunettesDeVue />} />
            {/* Route pour la page Lunettes de Soleil */}
            <Route path="/lunettes-de-soleil" element={<LunettesDeSoleil />} />
            {/* Route pour la page Lunettes pour Enfants */}
            <Route path="/lunettes-enfants" element={<LunettesEnfants />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}