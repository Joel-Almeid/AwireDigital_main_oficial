import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Lightbox from "@/components/Lightbox";
import heroImage from "@/assets/hero-ilha-bananal.jpg";
import artesanatoHero from "@/assets/artesanato-hero.jpg";
import educationImage from "@/assets/awire-education.jpg";
import cocarImage from "@/assets/products/cocar.jpg";
import colarImage from "@/assets/products/colar.jpg";
import pulseiraImage from "@/assets/products/pulseira.jpg";

const Fotos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allPhotos = [
    heroImage,
    artesanatoHero,
    educationImage,
    cocarImage,
    colarImage,
    pulseiraImage,
    heroImage,
    artesanatoHero,
    educationImage,
    cocarImage,
    colarImage,
    pulseiraImage,
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-8">
            Galeria de <span className="gold-accent">Fotos</span> do Projeto
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Acompanhe os momentos marcantes do Projeto AWIRE DIGITAL nas aldeias Canoanã e Txuiri
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {allPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift"
                onClick={() => openLightbox(index)}
              >
                <img src={photo} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {lightboxOpen && (
        <Lightbox
          images={allPhotos}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % allPhotos.length)}
          onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length)}
        />
      )}
    </>
  );
};

export default Fotos;
