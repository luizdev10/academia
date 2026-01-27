import React from 'react';
import { Activity, Apple, Zap, ClipboardCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Saulo from '../../assets/img/saulo.jpeg'

const Nutricao = () => {
  const whatsappLink = "https://wa.me/5588988847746?text=Olá! Gostaria de agendar uma consulta nutricional.";

  const pilaresNutricao = [
    {
      id: 1,
      titulo: "Bioimpedância",
      descricao: "Análise clínica detalhada da sua composição corporal, medindo com precisão gordura, massa muscular e hidratação.",
      icone: <Activity size={32} />,
      cor: "text-orange-700",
      bg: "bg-orange-500/10"
    },
    {
      id: 2,
      titulo: "Plano Alimentar",
      descricao: "Protocolos nutricionais 100% individualizados e flexíveis. Coma o que gosta e alcance o shape que sempre quis.",
      icone: <Apple size={32} />,
      cor: "text-orange-700",
      bg: "bg-orange-500/10"
    },
    {
      id: 3,
      titulo: "Performance",
      descricao: "Estratégias de suplementação e nutrição pré/pós treino para maximizar sua força e acelerar sua recuperação.",
      icone: <Zap size={32} />,
      cor: "text-orange-700",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">


      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 z-10">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Consultoria Especializada</span>
            <h1 className="text-5xl md:text-6xl font-black italic uppercase leading-none mt-4 mb-6">
              Sua meta é <span className="text-orange-500">Resultado?</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-lg">
              O treino constrói, mas a nutrição define. Tenha um plano alimentar estratégico desenhado para o seu metabolismo e rotina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} className="btn bg-orange-500 hover:bg-orange-200 border-none text-zinc-950 font-black uppercase px-8 shadow-lg shadow-emerald-500/20">
                Agendar Consulta
              </a>
              <a href="#pilares" className="btn btn-outline border-zinc-700 text-zinc-300 hover:bg-zinc-900 uppercase">
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">

            <div className="relative rounded-3xl overflow-hidden border-2 border-orange-500/20 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <img
                src={`${Saulo}`}
                alt="Nutricionista Profissional Homem"
                className="w-full h-[550px] object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl">
                <p className="text-orange-500 font-black text-xl leading-none">DR. SAULO</p>
                <p className="text-zinc-400 text-[10px] uppercase tracking-tighter">Nutrição Esportiva & Performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full px-4">
        <div className="flex flex-col w-full mb-6">
          <div className=" w-full flex flex-col items-center ">
            <h2 className=" w-full uppercase  items-center text-5xl font-black md:text-6xl leading-none tracking-tighter italic text-center">pilares da <span className="text-orange-500 ">performance</span></h2>
            <div className=" w-40 h-2 bg-amber-600 rounded mt-3 mb-4 md:w-80"></div>
          </div>

          
          <div id="pilares" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10">
            {pilaresNutricao.map((item, id) => (
              <div key={id} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500/30 transition-all">
                <div className={`w-12 h-12 ${item.bg} ${item.cor} flex justify-center items-center rounded-full mb-6`}>
                  {item.icone}
                </div>
                <h2 className="font-black text-2xl pb-2 italic text-orange-700 uppercase tracking-tighter">{item.titulo}</h2>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="h-140 w-full bg-zinc-900">
        <div className="flex flex-col items-center">
          <div className="  w-full flex flex-col text-center mt-4">
            <h2 className="font-black text-3xl uppercase  italic text-center ">
              <span className="text-orange-700">acompanhamento</span> completo
              <div className=" w-40 h-2 bg-orange-700 rounded mt-3 mb-4 mx-auto md:w-80"></div>
            </h2>
          </div>

          <div>
            <ul className="space-y-4">
              {[
                "Consulta Presencial ou Online",
                "Acesso ao App com sua Dieta",
                "Suporte via WhatsApp para dúvidas",
                "Guia de Compras no Supermercado",
                "Ebook de Receitas Fit exclusivas"
              ].map((itens, cod) => {
                return (
                  <li key={cod} className='flex gap-3 text-zinc-400'>
                    <CheckCircle2 size={30} /> <p className='text-zinc-300 text-xl '>{itens}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <div className='mt-25'>
              <a href={whatsappLink} className="uppercase font-black p-4 rounded shadow-lg shadow-white/30  bg-orange-500  hover:bg-orange-400 ">
                fale com a gente!!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Nutricao;