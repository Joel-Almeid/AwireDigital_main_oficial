import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  shortDescription: string;
  detailDescription: string;
  artisan: string;
  onImageClick: () => void;
}

const ProductCard = ({
  image,
  title,
  shortDescription,
  detailDescription,
  artisan,
  onImageClick,
}: ProductCardProps) => {
  const whatsappNumber = "5563992747396";
  const message = `Olá! Tenho interesse no artesanato: ${title}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
      <div className="aspect-square overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-accent mb-2">{shortDescription}</p>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{detailDescription}</p>
        <Button asChild className="w-full bg-accent text-accent-foreground hover:opacity-90">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" size={18} />
            Falar com {artisan}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
