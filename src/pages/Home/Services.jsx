import musc from "../../assets/img/musculacao.png"
import peso from "../../assets/img/peso.png"
import reabili from "../../assets/img/reabili.png"
function Services() {
    return (
        <section className="bg-amber-100 h-screen flex flex-col justify-center items-center">
            <div className=" h-52 mt-5 flex flex-col items-center">
                <img src={musc} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-50 text-center mt-1">Supere seus limites com treinos de força de alta performance</p>
            </div>
            <div className=" h-52 mt-7 w-40 flex flex-col items-center">
                <img src={peso} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-50 text-center mt-1">Supere seus limites com treinos de força de alta performance</p>
            </div>
            <div className=" h-52 mt-7 w-40 flex flex-col items-center">
                <img src={reabili} alt="musculação" className="h-40 rounded-2xl border-orange-400 border-b-8 border-r-6 shadow-xl " />
                <p className="w-50 text-center mt-1">Supere seus limites com treinos de força de alta performance</p>
            </div>

        </section>
    )
}

export default Services;