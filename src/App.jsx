import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductGrid from './components/products/ProductGrid';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

