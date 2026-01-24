function Nutricao() {
  return (
    <section className="bg-zinc-900 py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
            alt="Nutrição" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <span className="text-green-600 font-bold uppercase tracking-widest">Serviço Exclusivo</span>
          <h2 className="text-zinc-300 text-4xl font-black uppercase italic my-4">
            Nutrição <span className="text-green-600 text-3xl italic">Esportiva</span>
          </h2>
          <p className="text-zinc-400 mb-6">
            O treino é apenas 30% do resultado. Potencialize seus ganhos com um plano alimentar 
            personalizado feito por quem entende de performance e saúde.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-8 text-zinc-500 font-semibold">
            <li>✓ Bioimpedância</li>
            <li>✓ Plano Individual</li>
            <li>✓ Acompanhamento</li>
            <li>✓ Foco em Resultados</li>
          </ul>
          <button className="btn bg-green-600 border-none text-white hover:bg-green-700 px-8">
            Agendar Avaliação
          </button>
        </div>
      </div>
    </section>
  )
}

export default Nutricao