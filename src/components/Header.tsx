import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import logoAwire from "@/assets/logo-awire.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoAwire} alt="AWIRE Digital Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">AWIRE DIGITAL</h1>
              <p className="text-xs text-muted-foreground">Inclusão Digital na Ilha do Bananal</p>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
  {/* Links de âncora (use <a>) */}
  <a href="/#sobre" className="text-foreground hover:text-accent transition-colors">
    Sobre
  </a>
  <a href="/#participantes" className="text-foreground hover:text-accent transition-colors">
    Participantes
  </a>
  <a href="/#arte" className="text-foreground hover:text-accent transition-colors">
    Arte Indígena
  </a>

  {/* Links de página (use <NavLink>) */}
  <NavLink to="/fotos" className="text-foreground hover:text-accent transition-colors"> {/* <-- CORRIGIDO AQUI */}
    Fotos
  </NavLink>
  <NavLink to="/artesanato" className="text-foreground hover:text-accent transition-colors">
    Artesanato
  </NavLink>

  {/* Link de âncora (use <a>) */}
  <a href="/#contato" className="text-foreground hover:text-accent transition-colors">
    Contato
  </a>
</nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
  {/* Links de âncora (use <a>) */}
  <a
    href="/#sobre"
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Sobre
  </a>
  <a
    href="/#participantes"
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Participantes
  </a>
  <a
    href="/#arte"
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Arte Indígena
  </a>

  {/* Links de página (use <NavLink>) */}
  <NavLink
    to="/fotos"  /* <-- CORRIGIDO AQUI */
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Fotos
  </NavLink>
  <NavLink
    to="/artesanato"
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Artesanato
  </NavLink>

  {/* Link de âncora (use <a>) */}
  <a
    href="/#contato"
    className="block text-foreground hover:text-accent transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Contato
  </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
