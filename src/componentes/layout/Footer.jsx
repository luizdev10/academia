import { Mail, Phone, MapPin, Copyright } from "lucide-react";
import minhaImg from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 px-6 border-t border-zinc-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
      
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={minhaImg} alt="Logo" className="h-10 w-auto opacity-80 rounded" />
              <h2 className="text-white font-black text-xl uppercase italic tracking-tighter">
                Saulo <span className="text-orange-600">Fitness</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-center md:text-left max-w-xs">
              Sua academia de alta performance em Juazeiro do Norte. 
              Focados em resultados reais e bem-estar constante.
            </p>
          </div>

      
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 border-b border-orange-600 pb-1">
              Contato
            </h3>
            
            <a href="mailto:saulofitness2015@gmail.com" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
              <Mail size={18} className="text-orange-600" />
              <span className="text-sm text-zinc-300">saulofitness2015@gmail.com</span>
            </a>

            <a href="tel:8835722481" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
              <Phone size={18} className="text-orange-600" />
              <span className="text-sm text-zinc-300">(88) 3572-2481</span>
            </a>
          </div>

       
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2 border-b border-orange-600 pb-1">
              Endereço
            </h3>
            <div className="flex items-start gap-3 text-center md:text-left">
              <MapPin size={20} className="text-orange-600 shrink-0" />
              <p className="text-sm text-zinc-300">
                R. Raimundo Saraiva Coelho, 281 <br />
                Aeroporto, Juazeiro do Norte - CE <br />
                CEP: 63020-730
              </p>
            </div>
          </div>

        </div>

       
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Copyright size={12} />
            <span>2026 Saulo Fitness - Todos os direitos reservados</span>
          </div>
          <span className="text-zinc-600">CNPJ: 18.001.151/0001-20</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;