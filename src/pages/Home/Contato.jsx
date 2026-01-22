import { MessageCircle, Instagram, Facebook } from "lucide-react";

function Contato() {
  const contatos = [
    {
      nome: "WhatsApp",
      icon: <MessageCircle size={20} />,
      link: "https://wa.me/seunumeroaqui",
      corHover: "hover:bg-green-600 hover:border-green-600",
      estilo: "border-green-500 text-green-500"
    },
    {
      nome: "Instagram",
      icon: <Instagram size={25} />,
      link: "https://instagram.com/seu_perfil",
      // Usando aquele gradiente do Instagram que criamos!
      corHover: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent",
      estilo: "border-pink-500 text-pink-500"
    },
    {
      nome: "Facebook",
      icon: <Facebook size={20} />,
      link: "https://facebook.com/suapagina",
      corHover: "hover:bg-blue-600 hover:border-blue-600",
      estilo: "border-blue-500 text-blue-500"
    }
  ];

  return (
    <section className="bg-zinc-900 py-16 px-4 flex flex-col items-center justify-center border-t border-zinc-800">
      <div className="text-center mb-8">
        <h2 className="uppercase text-orange-500 font-black text-2xl md:text-3xl italic tracking-tighter">
          Entre em contato conosco
        </h2>
        <p className="text-zinc-400 mt-2 text-sm md:text-base">
          Escolha sua rede preferida e fale com a nossa equipe
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
        {contatos.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`
              btn btn-outline btn-lg min-w-160px flex items-center gap-3 
              transition-all duration-300 font-bold uppercase tracking-widest
              hover:text-white rounded-xl shadow-lg
              ${item.estilo} ${item.corHover}
            `}
          >
            {item.icon}
            {item.nome}
          </a>
        ))}
      </div>
      
      {/* Detalhe sutil de copyright ou localização opcional */}
      <p className="mt-12 text-zinc-600 text-xs uppercase">
        © 2024 Saulo Fitness - Todos os direitos reservados
      </p>
    </section>
  );
}

export default Contato;