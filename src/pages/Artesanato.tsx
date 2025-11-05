import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import Lightbox from "@/components/Lightbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import artesanatoHero from "@/assets/artesanato-hero.jpg";
import cocarImage from "@/assets/products/cocar.jpg";
import colarImage from "@/assets/products/colar.jpg";
import pulseiraImage from "@/assets/products/pulseira.jpg";

const Artesanato = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [aldeiaFilter, setAldeiaFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const products = [
    {
      image: cocarImage,
      title: "Cocar Tradicional",
      shortDescription: "Feito por Aranã Txuiri",
      detailDescription: "Cocar cerimonial confeccionado com penas de arara e tucano, usado em rituais tradicionais.",
      artisan: "Aranã Txuiri",
      category: "adornos",
      aldeia: "Txuiri",
    },
    {
      image: colarImage,
      title: "Colar de Sementes",
      shortDescription: "Feito por Juma Karajá",
      detailDescription: "Colar artesanal com sementes naturais e miçangas coloridas em padrões geométricos tradicionais.",
      artisan: "Juma Karajá",
      category: "adornos",
      aldeia: "Canoanã",
    },
    {
      image: pulseiraImage,
      title: "Pulseira Trançada",
      shortDescription: "Feito por Ijanaru Javaé",
      detailDescription: "Pulseira tecida à mão com fibras naturais e miçangas, técnica ancestral preservada.",
      artisan: "Ijanaru Javaé",
      category: "adornos",
      aldeia: "Canoanã",
    },
    {
      image: cocarImage,
      title: "Brincos Étnicos",
      shortDescription: "Feito por Juma Karajá",
      detailDescription: "Brincos delicados com penas e sementes, representando elementos da natureza.",
      artisan: "Juma Karajá",
      category: "adornos",
      aldeia: "Canoanã",
    },
    {
      image: colarImage,
      title: "Cesto Utilitário",
      shortDescription: "Feito por Aranã Txuiri",
      detailDescription: "Cesto trançado com palha de buriti, tradicionalmente usado para armazenamento.",
      artisan: "Aranã Txuiri",
      category: "utilitarios",
      aldeia: "Txuiri",
    },
    {
      image: pulseiraImage,
      title: "Adorno de Parede",
      shortDescription: "Feito por Gabriel Javaé",
      detailDescription: "Peça decorativa com motivos geométricos tradicionais, ideal para decoração.",
      artisan: "Gabriel Javaé",
      category: "decoracao",
      aldeia: "Pimentel Barbosa",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    const matchesAldeia = aldeiaFilter === "all" || product.aldeia === aldeiaFilter;
    return matchesSearch && matchesCategory && matchesAldeia;
  });

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url(${artesanatoHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 overlay-gradient" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="section-title mb-6">Artesanato Indígena</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            Conheça e adquira peças autênticas produzidas pelos artesãos das aldeias Canoanã e Txuiri
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Cada peça conta uma história e ajuda a preservar a cultura indígena
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-accent rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-accent text-center">Como funciona?</h2>
            <ol className="space-y-4 text-lg">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">1.</span>
                <span>Escolha a peça que você deseja adquirir na galeria abaixo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">2.</span>
                <span>Clique no botão "Falar com o artesão"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">3.</span>
                <span>Você será direcionado para o WhatsApp do projeto</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">4.</span>
                <span>Negocie diretamente com o artesão sobre disponibilidade e detalhes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">5.</span>
                <span>Combine a forma de pagamento e entrega diretamente com o artesão</span>
              </li>
            </ol>
            <p className="mt-6 text-center text-sm text-muted-foreground italic">
              O projeto AWIRE DIGITAL não recebe comissão sobre as vendas. Todo o valor é repassado integralmente aos
              artesãos.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                <SelectItem value="adornos">Adornos</SelectItem>
                <SelectItem value="utilitarios">Utilitários</SelectItem>
                <SelectItem value="decoracao">Decoração</SelectItem>
              </SelectContent>
            </Select>
            <Select value={aldeiaFilter} onValueChange={setAldeiaFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Aldeia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as aldeias</SelectItem>
                <SelectItem value="Canoanã">Canoanã</SelectItem>
                <SelectItem value="Txuiri">Txuiri</SelectItem>
                <SelectItem value="Pimentel Barbosa">Pimentel Barbosa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Galeria de Produtos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">
            Galeria de <span className="gold-accent">Artesanato</span>
          </h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} {...product} onImageClick={() => openLightbox(product.image)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {lightboxOpen && (
        <Lightbox images={[currentImage]} currentIndex={0} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
};

export default Artesanato;
