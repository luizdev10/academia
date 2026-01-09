import musc from "../../assets/img/musculacao.png"
function Services(){
    return(
    <section className="bg-amber-100 h-screen flex flex-col justify-center items-center">
        <div className=" h-52 mt-5 ">
        <img src={musc} alt="" className="h-55 rounded-2xl border-orange-400 border-b-8 border-r-6"/>
        <p className="text">Supere seus limites com treinos de força de alta performance</p>
        </div>
        
        
        
       
    </section>
    )
}

export default Services;