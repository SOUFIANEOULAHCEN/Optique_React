import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  // Tableau d'objets contenant les images et leurs titres
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Collection Printemps 2023',
    },
    {
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Lunettes Élégantes pour Femmes',
    },
    {
      image: 'https://images.unsplash.com/photo-1612817158486-7f0a7d0b8b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Styles Modernes pour Hommes',
    },
  ];

  return (
    <div className="relative h-[600px] bg-gray-100">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Défilement automatique toutes les 3 secondes
          disableOnInteraction: false, // Continue après interaction utilisateur
        }}
        pagination={{
          clickable: true, // Permet de cliquer sur les points de pagination
        }}
        navigation={true} // Active les flèches de navigation
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-lg text-white">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}