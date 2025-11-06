import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { NavLink } from "./NavLink";
import logoAwire from "@/assets/logo-awire.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoAwire} alt="AWIRE Digital" className="h-16 mb-4" />
            <h3 className="font-bold text-lg mb-2">PROJETO AWIRE DIGITAL</h3>
            <p className="text-sm text-muted-foreground">Inclusão Digital na Ilha do Bananal</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Links Rápidos</h4>
            <nav className="space-y-2 text-sm">
              <a href="/#sobre" className="block hover:text-accent transition-colors">
                Sobre
              </a>
              <a href="/#participantes" className="block hover:text-accent transition-colors">
                Participantes
              </a>
              <a href="/#arte" className="block hover:text-accent transition-colors">
                Arte Indígena
              </a>
              <NavLink to="/fotos" className="block hover:text-accent transition-colors">
                Fotos
              </NavLink>
              <NavLink to="/artesanato" className="block hover:text-accent transition-colors">
                Artesanato
              </NavLink>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Instituições</h4>
            <nav className="space-y-2 text-sm">
              <a
                href="https://www.ifto.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent transition-colors"
              >
                IFTO
              </a>
              <p className="text-muted-foreground">FUNAI</p>
              <p className="text-muted-foreground">Secretaria de Cultura</p>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 AWIRE DIGITAL - Todos os direitos reservados</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <NavLink to="/login" className="hover:text-accent transition-colors">
              Login Admin
            </NavLink>
            <a href="#" className="hover:text-accent transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
