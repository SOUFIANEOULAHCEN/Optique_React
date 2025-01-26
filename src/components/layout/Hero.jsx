import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

import lunette_hero from '../data/img/lunette_hero.webp'
import lunette_hero2 from '../data/img/lunette_hero2.webp'
import lunette_hero3 from '../data/img/lunette_hero3.webp'

export default function Hero() {
  const navigate = useNavigate();

  const slides = [
    {
      image: lunette_hero3, // Lunettes de vue
      imageMobile: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Version mobile
      title: 'Collection Printemps 2024 - Lunettes de Vue',
    },
    {
      image: lunette_hero, // Lunettes de soleil
      imageMobile: 'https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Version mobile
      title: 'Lunettes de Soleil Élégantes',
    }
    ,
    {
      image:lunette_hero2 ,// Lunettes de sport
      imageMobile: 'https://images.pexels.com/photos/3522526/pexels-photo-3522526.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Version mobile
      title: 'Lunettes de Sport Performantes',
    },
  ];

  const handleBuyNow = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('product-grid');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Animation pour le texte
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
                <motion.div
                  className="max-w-lg text-white"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-base md:text-lg mb-8">
                    Une collection de lunettes originale du célèbre designer italien,
                    proposant des styles optiques et solaires pour hommes et femmes.
                  </p>
                  <button
                    onClick={handleBuyNow}
                    className="bg-emerald-900 text-white px-6 py-2 md:px-8 md:py-3 hover:bg-amber-500 transition-colors"
                  >
                    ACHETER MAINTENANT
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}