import React from 'react';

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "LUNETTES RÉTRO CONTRASTÉES",
      price: 89.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiqueInspiration.jpg-7ieptrOoq3rv2bnx4NEMX2byKBM3Yn.jpeg",
      isNew: true,
    },
    {
      id: 2,
      name: "LUNETTES DE SOLEIL UGO GRISES",
      price: 75.50,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiqueInspiration.jpg-7ieptrOoq3rv2bnx4NEMX2byKBM3Yn.jpeg",
      isNew: false,
    },
    {
      id: 3,
      name: "LUNETTES RONDES GUCCI",
      price: 199.50,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiqueInspiration.jpg-7ieptrOoq3rv2bnx4NEMX2byKBM3Yn.jpeg",
      isNew: true,
    },
    {
      id: 4,
      name: "LUNETTES RONDES VINTAGE",
      price: 53.45,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiqueInspiration.jpg-7ieptrOoq3rv2bnx4NEMX2byKBM3Yn.jpeg",
      isSale: true,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">DÉCOUVREZ NOS PRODUITS</h2>
          <div className="flex justify-center gap-8 text-sm">
            <button className="text-emerald-900 font-medium">MEILLEURES VENTES</button>
            <button className="text-gray-500 hover:text-emerald-900">NOUVEAUTÉS</button>
            <button className="text-gray-500 hover:text-emerald-900">PLUS DEMANDÉS</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-emerald-900 text-white px-2 py-1 text-sm">
                    NOUVEAU
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 text-sm">
                    SOLDES
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-emerald-900">
                  {product.price.toFixed(2)} €
                </span>
                <button className="text-sm text-white bg-emerald-900 px-4 py-2 hover:bg-amber-500 transition-colors">
                  AJOUTER AU PANIER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

