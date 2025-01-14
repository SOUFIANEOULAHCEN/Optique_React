import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/optiqueInspiration.jpg-7ieptrOoq3rv2bnx4NEMX2byKBM3Yn.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-bold mb-4">LUNETTES GIORDANO</h1>
          <p className="text-lg mb-8">
            Une collection de lunettes originale du célèbre designer italien, 
            proposant des styles optiques et solaires pour hommes et femmes.
          </p>
          <button className="bg-emerald-900 text-white px-8 py-3 hover:bg-amber-500 transition-colors">
            ACHETER MAINTENANT
          </button>
        </div>
      </div>
    </div>
  );
}

