import musc from "../../assets/img/musculacao.png"
import peso from "../../assets/img/peso.png"
import reabili from "../../assets/img/reabili.png"
function Services() {
    return (
        <section className="bg-amber-100 h-screen flex flex-col justify-center items-center">
            <div className=" h-52 flex flex-col items-center">
                <p>MUSCULAÇÃO</p>
                <img src={musc} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-60 text-center mt-1">Supere seus limites com treinos de força de alta performance</p>
            </div>
            <div className=" h-52 w-40 flex flex-col items-center">
                <p className="mt-10">PERCA DE PESO</p>
                <img src={peso} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-60 text-center mt-2">Supere seus limites com treinos de força de alta performance</p>
            </div>
            <div className=" h-52 mt-9 w-40 flex flex-col items-center">
                <p className="mt-10">REABILITAÇÃO</p>
                <img src={reabili} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-60 text-center mt-1">Supere seus limites com treinos de força de alta performance</p>
            </div>

        </section>
    )
}

export default Services;