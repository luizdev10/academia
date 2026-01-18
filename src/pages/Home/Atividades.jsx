import musc from "../../assets/img/musculacao.png"
import peso from "../../assets/img/peso.png"
import reabili from "../../assets/img/reabili.png"
function Atividades() {
    return (
        <section className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">

            <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase ">Serviços</h2>

            <div className="flex flex-col gap-12 w-full max-w-xs">


                <div className="flex flex-col items-center text-center">
                    <p className="font-bold text-gray-700 mb-2 border-b-2">MUSCULAÇÃO</p>
                    <div>
                        <img src={musc} alt="musculação" className="w-64 h-48 object-cover rounded-2xl border-orange-400 border-b-8 border-r-7 shadow-2xl" />
                    </div>
                    <p className="mt-3 text-gray-600 font-medium leading-tight">
                        Supere seus limites com treinos de força de alta performance
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="font-bold text-gray-700 mb-2 border-b-2">PERCA DE PESO</p>
                    <img src={peso} alt="perca de peso" className="w-64 h-48 object-cover rounded-2xl border-orange-400 border-b-8 border-r-7 shadow-2xl" />
                    <p className="mt-3 text-gray-600 leading-tight">
                        Alcance sua melhor versão com foco em queima calórica e saúde
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="font-bold text-gray-700 mb-2 border-b-2">REABILITAÇÃO</p>
                    <img src={reabili} alt="reabilitação" className="w-64 h-48 object-cover rounded-2xl border-orange-400 border-b-8 border-r-7 shadow-2xl" />
                    <p className="mt-3 text-gray-600 leading-tight">
                        Recupere sua mobilidade com acompanhamento especializado
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Atividades;