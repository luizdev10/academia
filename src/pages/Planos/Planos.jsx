import Horario from "./horario" 

function Planos() {

    const listaPlano = [
        {
            periodo: "Mensal",
            status: "Mais Popular",
            preco: "R$ 75",
            corBorda: "border-orange-500",
            corBotao: "bg-orange-500",
            corTexto: "text-orange-500"
        },
        {
            periodo: "Quinzenal",
            status: "Basico",
            preco: "R$ 40",
            corBorda: "border-green-500",
            corBotao: "bg-green-500",
            corTexto: "text-green-500"
        },
        {
            periodo: "Semanal",
            status: "Comum",
            preco: "R$ 30",
            corBorda: "border-blue-500",
            corBotao: "bg-blue-500",
            corTexto: "text-blue-500"
        }
    ];
    return (
        <section className="min-h-28 bg-zinc-950 pt-28 pb-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-1.5 ">
                    <h2 className="text-white text-3xl font-black uppercase italic text-center mb-5 ">
                        Nossos <span className="text-orange-500">Planos</span>
                    </h2>
                    <div className="bg-orange-400 w-30 h-2 m-auto mb-4"></div>
                </div>


                <div className="flex w-full gap-4 overflow-x-auto pb-8 snap-x snap-mandatory md:justify-center">

                    {listaPlano.map((item, index) => {
                        return (
                            <div key={index} className={`card w-85 min-w-[320px] bg-zinc-900 shadow-sm snap-center border ${item.corBorda}`}>
                                <div className={`card-body text-white`}>
                                    <span className={`badge badge-xs uppercase ${item.corBotao} font-bold`}>{item.status}</span>
                                    <div className="flex justify-between items-center">
                                        <h2 className={`text-3xl font-bold italic uppercase ${item.corTexto}`}>{item.periodo}</h2>
                                        <span className={`text-xl `}>{item.preco}</span>
                                    </div>

                                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                                    </ul>
                                    <div className="mt-6">
                                        <button className={`btn  btn-block ${item.corBotao} uppercase italic font-black`}>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Horario />
        </section>
    );
}

export default Planos;