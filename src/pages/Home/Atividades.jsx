import musc from "../../assets/img/musculacao.png";
import peso from "../../assets/img/peso.png";
import reabili from "../../assets/img/reabili.png";

function Atividades() {
  const servicos = [
    {
      titulo: "Musculação",
      img: musc,
      desc: "Supere seus limites com treinos de força de alta performance.",
      cor: "border-orange-500"
    },
    {
      titulo: "Perca de Peso",
      img: peso,
      desc: "Alcance sua melhor versão com foco em queima calórica e saúde.",
      cor: "border-red-500"
    },
    {
      titulo: "Reabilitação",
      img: reabili,
      desc: "Recupere sua mobilidade com acompanhamento especializado.",
      cor: "border-blue-500"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Título com detalhe em laranja */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase italic">
            Nossos <span className="text-orange-600">Serviços</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-4"></div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {servicos.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-4 transition-all duration-300 hover:-translate-y-2"
            >
              
              <div className="relative mb-6">
                <img 
                  src={item.img} 
                  alt={item.titulo} 
                  className={`w-72 h-56 object-cover rounded-2xl shadow-xl border-b-8 border-r-8 ${item.cor} transition-transform duration-300 group-hover:scale-105`} 
                />
               
                <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-black text-zinc-800 uppercase tracking-wider">
                {item.titulo}
              </h3>
              
              <p className="mt-3 text-zinc-600 font-medium leading-relaxed max-w-250px">
                {item.desc}
              </p>

             
              <button className="mt-4 text-orange-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver Detalhes +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atividades;