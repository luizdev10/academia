import fotoIntro from "../../assets/img/fotointro.png"
function IntroHome() {

    return (
        <section style={{ backgroundImage: `url(${fotoIntro})` }} className="h-screen bg-cover bg-center bg-no-repeat">
            <div className=" flex flex-col h-full justify-end" >
                <h1 className="text-4xl w-60 text-orange-200 font-bold p-2">PROPORCIONANDO SAÚDE E BEM ESTAR.</h1>
                <p className="w-full p-2 text-orange-300 text-center mb-30">Transforme sua rotina com um treinamento de alta performance. Na Saulo Fitness temos acompanhamento especializado para você superar seus limites todos os dias.</p>
            </div>
        </section>
    )
}
export default IntroHome;

            