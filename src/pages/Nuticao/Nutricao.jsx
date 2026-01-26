import React from 'react';
import { Activity, Apple, Zap, ClipboardCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Saulo from '../../assets/img/saulo.jpeg'

const Nutricao = () => {
  const whatsappLink = "https://wa.me/5588988847746?text=Olá! Gostaria de agendar uma consulta nutricional.";

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
      
      
<section className="relative pt-32 pb-20 px-4 overflow-hidden">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2 z-10">
      <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">Consultoria Especializada</span>
      <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mt-4 mb-6">
        Sua meta é <span className="text-emerald-500">Resultado?</span>
      </h1>
      <p className="text-zinc-400 text-lg mb-8 max-w-lg">
        O treino constrói, mas a nutrição define. Tenha um plano alimentar estratégico desenhado para o seu metabolismo e rotina.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href={whatsappLink} className="btn bg-emerald-500 hover:bg-emerald-400 border-none text-zinc-950 font-black uppercase px-8 shadow-lg shadow-emerald-500/20">
          Agendar Consulta
        </a>
        <a href="#metodologia" className="btn btn-outline border-zinc-700 text-zinc-300 hover:bg-zinc-900 uppercase">
          Saiba Mais
        </a>
      </div>
    </div>
    
    <div className="md:w-1/2 relative">
      {/* Moldura estilizada para a foto do Nutricionista */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
        <img 
          src={`${Saulo}`}
          alt="Nutricionista Profissional Homem"
          className="w-full h-[550px] object-cover object-top"
        />
        {/* Overlay para dar profundidade e ajudar no contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
        
        {/* Badge flutuante de autoridade */}
        <div className="absolute bottom-6 left-6 bg-zinc-900/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl">
           <p className="text-emerald-500 font-black text-xl leading-none">DR. SAULO</p>
           <p className="text-zinc-400 text-[10px] uppercase tracking-tighter">Nutrição Esportiva & Performance</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 2. STATS - Prova de Autoridade */}
      <section className="py-10 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-emerald-500">+500</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-500">-12kg</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Média de perda de gordura</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-500">100%</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Planos Individuais</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-500">CRN</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Registro Profissional</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PILARES - O que ele oferece */}
      <section id="metodologia" className="py-24 px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic italic">Pilares da <span className="text-emerald-500">Performance</span></h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
              <Activity className="text-emerald-500 group-hover:text-zinc-950" size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase">Bioimpedância</h3>
            <p className="text-zinc-400">Análise clínica completa da sua composição corporal: gordura, músculos e hidratação.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
              <Apple className="text-emerald-500 group-hover:text-zinc-950" size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase">Dieta Flexível</h3>
            <p className="text-zinc-400">Plano alimentar que respeita seus gostos. Resultados reais sem precisar passar fome ou restrições absurdas.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
              <Zap className="text-emerald-500 group-hover:text-zinc-950" size={30} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase">Performance</h3>
            <p className="text-zinc-400">Suplementação e protocolos pré/pós treino para você bater seus recordes pessoais na academia.</p>
          </div>
        </div>
      </section>

      {/* 4. CHECKLIST - O que inclui */}
      <section className="py-20 px-4 bg-emerald-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-zinc-950 text-4xl font-black uppercase italic mb-6">O acompanhamento completo</h2>
            <ul className="space-y-4">
              {[
                "Consulta Presencial ou Online",
                "Acesso ao App com sua Dieta",
                "Suporte via WhatsApp para dúvidas",
                "Guia de Compras no Supermercado",
                "Ebook de Receitas Fit exclusivas"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-900 font-bold">
                  <CheckCircle2 size={24} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <a href={whatsappLink} className="group bg-zinc-950 text-white p-10 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
              <MessageCircle size={48} className="text-emerald-500 mb-2" />
              <span className="font-black uppercase leading-tight">Quero começar agora!</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FOOTER DA NUTRIÇÃO */}
      <footer className="py-10 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-sm">
          © 2024 Dr. Saulo Nutrição Esportiva. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Nutricao;