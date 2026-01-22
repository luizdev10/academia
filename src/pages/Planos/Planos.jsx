function Planos() {
    return (
        <section className="min-h-28 bg-zinc-950 pt-28 pb-10">
            <div className="container mx-auto px-4">
                <h2 className="text-white text-3xl font-black uppercase italic text-center mb-10">
                    Nossos <span className="text-orange-500">Planos</span>
                </h2>

                {/* CONTAINER DO CARROSSEL 
                    - snap-x: ativa o scroll horizontal com trava
                    - no-scrollbar: classe para esconder a barra (opcional)
                */}
                <div className="flex w-full gap-4 overflow-x-auto pb-8 snap-x snap-mandatory md:justify-center">
                    
                    {/* CARD 01 */}
                    <div className="card w-85 min-w-[320px] bg-zinc-900 shadow-sm snap-center border border-zinc-800">
                        <div className="card-body text-white">
                            <span className="badge badge-xs badge-warning uppercase font-bold">Básico</span>
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold italic uppercase">Mensal</h2>
                                <span className="text-xl">R$ 70</span>
                            </div>
                            {/* Edite sua lista aqui */}
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Acesso total</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block uppercase italic font-black">Comprar</button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 02 */}
                    <div className="card w-85 min-w-[320px] bg-zinc-900 shadow-sm snap-center border border-orange-500/50">
                        <div className="card-body text-white">
                            <span className="badge badge-xs badge-warning uppercase font-bold">Mais Popular</span>
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold italic uppercase">Premium</h2>
                                <span className="text-xl">R$ 80</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {/* Seus itens aqui */}
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-warning btn-block uppercase italic font-black">Comprar</button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 03 */}
                    <div className="card w-85 min-w-[320px] bg-zinc-900 shadow-sm snap-center border border-zinc-800">
                        <div className="card-body text-white">
                            <span className="badge badge-xs badge-zinc-500 uppercase font-bold">Fidelidade</span>
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold italic uppercase">Anual</h2>
                                <span className="text-xl">R$ 600</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {/* Seus itens aqui */}
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-outline text-white btn-block uppercase italic font-black">Comprar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Planos;