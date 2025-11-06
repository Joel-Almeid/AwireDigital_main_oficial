import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticipantCard from "@/components/ParticipantCard";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ilha-bananal.jpg";
import artesanatoHero from "@/assets/artesanato-hero.jpg";
import educationImage from "@/assets/awire-education.jpg";
import cocarImage from "@/assets/products/colar.jpg";
import colarImage from "@/assets/products/cocar.jpg";
import pulseiraImage from "@/assets/products/pulseira.jpg";

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: string[], index = 0) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const galleryImages = [educationImage, artesanatoHero, cocarImage, colarImage, pulseiraImage, heroImage];

  const participants = [
    {
      name: "Adriano Ribeiro Silva",
      role: "Coordenador e idealizador do Projeto",
      affiliation: "IFTO",
      description: "Coordenação geral do projeto e articulação com as comunidades.",
    },
    {
      name: "Joel de Almeida",
      role: "Bolsista",
      affiliation: "IFTO",
      description:
        "Estudante do curso de Informática, atua como professor no curso e trabalha com a produção dos materiais didáticos.",
    },
    {
      name: "Fernanda de Jesus",
      role: "Voluntária",
      affiliation: "IFTO",
      description: "Estudante do curso de Informática, atua como professora no curso e trabalha com a produção dos materiais didáticos.",
    },
    {
      name: "Phabliny Esthefanny",
      role: "Estudante voluntária",
      affiliation: "IFTO",
      description: "Apoia a organização de conteúdos digitais e colabora nas oficinas de capacitação tecnológica.",
    },
    {
      name: "Juma Karajá",
      role: "Bolsista",
      affiliation: "IFTO",
      description: "Mediação cultural e comunicação com os alunos.",
    },
    {
      name: "Ijanaru Javaé",
      role: "Estudante",
      affiliation: "IFTO",
      description: "Estudante do curso de Informática e atua no apoio às oficinas e na mediação cultural.",
    },
    {
      name: "Gabriel Maluiri Vinícius Batista Javaé",
      role: "Bolsista",
      affiliation: "IFTO",
      description: "Auxilia na mediação cultural e na aplicação das atividades de inclusão digital.",
    },
    {
      name: "Caio Gobbo",
      role: "Voluntário",
      affiliation: "IFTO",
      description: "Suporte técnico e logística.",
    },
    {
      name: "Vitor Vilas Boas",
      role: "Voluntário",
      affiliation: "IFTO",
      description: "Apoio em eventos e comunicação visual e orientador no desenvolvimento pedagógico do site.",
    },
  ];

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 overlay-gradient" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="section-title mb-6 fade-in-up">Conectando Tradição e Tecnologia</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "0.2s" }}>
            Promovendo inclusão digital e valorizando a cultura indígena na Ilha do Bananal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 text-lg px-8 py-6"
            >
              <a href="#sobre">Conheça o Projeto</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6"
            >
              <a href="/artesanato">Ver Artesanato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            Sobre o Projeto <span className="gold-accent">AWIRE DIGITAL</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">O que é o AWIRE DIGITAL</h3>
              <p className="leading-relaxed">
                Um projeto de extensão do Instituto Federal do Tocantins Campus Formoso do Araguaia (IFTO) que promove a inclusão digital nas
                comunidades indígenas da Ilha do Bananal, valorizando a cultura local e fortalecendo a identidade
                indígena.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Por que surgiu</h3>
              <p className="leading-relaxed">
                Para reduzir a exclusão digital e social das aldeias indígenas Canoanã e Txuiri, promovendo o acesso à
                tecnologia e o fortalecimento cultural.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Aldeias atendidas</h3>
              <p className="leading-relaxed">
                Canoanã e Txuiri, localizadas na Ilha do Bananal, maior ilha fluvial do mundo.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Objetivos</h3>
              <p className="leading-relaxed">
                Inclusão digital das comunidades indígenas e valorização da cultura por meio da arte, educação e
                comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-8">
            <span className="gold-accent">Onde</span> Atuamos
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ilha do Bananal - A maior ilha fluvial do mundo
          </p>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
{/* COLE ESTE CÓDIGO NO LUGAR DO IFRAME ANTIGO (linhas 202-209)
*/}

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LKFZClgTbH7Ggk-npAOm8Ao6nkP9yPM&ehbc=2E312F" width="640" height="480"></iframe> 
        </div>
        </div>
      </section>

      {/* Participantes Section */}
      <section id="participantes" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            Nossa <span className="gold-accent">Equipe</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {participants.map((participant, index) => (
              <ParticipantCard key={index} {...participant} />
            ))}
          </div>
        </div>
      </section>

      {/* Arte Indígena Section */}
      <section
        id="arte"
        className="py-20 relative"
        style={{
          backgroundImage: `url(${artesanatoHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 overlay-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-title text-center mb-8">
            Arte <span className="gold-accent">Indígena</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg leading-relaxed mb-6">
              A arte indígena é uma expressão fundamental da cultura e identidade dos povos originários, manifestada
              através de pinturas corporais, cestarias, cerâmicas e adornos que carregam significados ancestrais.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              O projeto AWIRE DIGITAL valoriza essa arte, especialmente os artesanatos produzidos nas aldeias Canoanã e
              Txuiri, conectando artesãos com pessoas interessadas em adquirir peças autênticas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="cursor-pointer hover-lift" onClick={() => openLightbox([cocarImage])}>
              <img src={cocarImage} alt="Cocar" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="cursor-pointer hover-lift" onClick={() => openLightbox([colarImage])}>
              <img src={colarImage} alt="Colar" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="cursor-pointer hover-lift" onClick={() => openLightbox([pulseiraImage])}>
              <img src={pulseiraImage} alt="Pulseira" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 text-lg px-8 py-6">
              <a href="/artesanato">Ver Galeria de Artesanato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos Section */}
      <section id="fotos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            Galeria de <span className="gold-accent">Fotos</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {galleryImages.slice(0, 8).map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift"
                onClick={() => openLightbox(galleryImages, index)}
              >
                <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent/10">
              <a href="/fotos">Ver Galeria Completa</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            <span className="gold-accent">Depoimentos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg">Adriano Ribeiro Silva</h4>
                  <p className="text-sm text-accent">Coordenador e idealizador do Projeto</p>
                </div>
              </div>
              <p className="italic text-lg leading-relaxed">
                "Ver a transformação digital chegando na aldeia é a realização de um sonho. Estamos conectando tradição
                e futuro."
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-lg">Juma Karajá</h4>
                  <p className="text-sm text-accent">Artesã e Bolsista</p>
                </div>
              </div>
              <p className="italic text-lg leading-relaxed">
                "O Awire Digital me ajudou a mostrar minha arte para o mundo. Antes eu não sabia usar o computador,
                agora eu converso com clientes de outros estados."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            Entre em <span className="gold-accent">Contato</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:awiredigital@gmail.com.br" className="text-muted-foreground hover:text-accent">
                    awiredigital@gmail.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/5563992747396" className="text-muted-foreground hover:text-accent">
                    (63) 99274-7396
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Instituto Federal do Tocantins - Campus Formoso do Araguaia
                    <br />
                    Rua do Açude/Lago municipal, s/n - Centro
                    <br />
                    Formoso do Araguaia - TO, 77470-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">Seg a Sexta 🕘8h às 12h - 🕒14h às 18h</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Faça Parte do AWIRE DIGITAL</h3>
              <p className="mb-6 leading-relaxed">
                Você pode contribuir para o fortalecimento da inclusão digital e valorização da cultura indígena na
                Ilha do Bananal. Junte-se a nós!
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:opacity-90"
              >
                <a
                  href="https://wa.me/5563992747396?text=Olá!%20Quero%20ser%20voluntário%20no%20Projeto%20AWIRE%20DIGITAL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero ser voluntário
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={
            lightboxImages.length > 1
              ? () => setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length)
              : undefined
          }
          onPrev={
            lightboxImages.length > 1
              ? () => setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
              : undefined
          }
        />
      )}
    </>
  );
};

export default Index;
