import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

export default function Hero() {
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  // Tableau d'objets contenant les images et leurs titres
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Collection Printemps 2023',
    },
    {
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Lunettes Élégantes pour Femmes',
    },
    {
      image: 'https://images.unsplash.com/photo-1612817158486-7f0a7d0b8b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      imageMobile: 'https://images.unsplash.com/photo-1612817158486-7f0a7d0b8b8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Styles Modernes pour Hommes',
    },
  ];

  // Fonction pour rediriger vers la liste des produits et faire défiler la page
  const handleBuyNow = () => {
    navigate('/'); // Redirige vers la page d'accueil
    setTimeout(() => {
      const element = document.getElementById('product-grid'); // Cible la section ProductGrid
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Fait défiler jusqu'à la section
      }
    }, 100); // Petit délai pour s'assurer que la page est chargée
  };

  return (
    <div className="relative h-[600px] md:h-[700px] bg-gray-100">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        navigation={false}
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
              <img
                src={slide.imageMobile}
                alt={slide.title}
                className="md:hidden w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-lg text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-base md:text-lg mb-8">
                    Une collection de lunettes originale du célèbre designer italien,
                    proposant des styles optiques et solaires pour hommes et femmes.
                  </p>
                  <button
                    onClick={handleBuyNow} // Ajoutez l'événement onClick
                    className="bg-emerald-900 text-white px-6 py-2 md:px-8 md:py-3 hover:bg-amber-500 transition-colors"
                  >
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