import { FaWhatsapp } from "react-icons/fa"; // 1. Mudei o import (usando o ícone novo)

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5563992747396" // (Este é o número que estava no prompt)
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato WhatsApp AWIRE DIGITAL"
      
      // 2. Mudei as cores: de bg-accent (amarelo) para o verde oficial do WhatsApp
      //    e adicionei um efeito de hover (escurecer)
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover-lift hover:bg-green-700 transition-all"
    >
      {/* 3. Mudei o ícone e a cor dele para branco */}
{/* CÓDIGO CORRIGIDO (MAIOR) */}
<FaWhatsapp className="w-14 h-14 text-black" />    </a>
  );
};

export default WhatsAppButton;

