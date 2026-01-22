function Horario() {
    return (
        <>
            <section className="flex justify-center mt-10" >
                <div className="h-60 w-90 bg-neutral-900 rounded-2xl border border-yellow-200 flex flex-col items-center">
                    <h2 className="text-black-100 uppercase text-center mt-1.5  text-orange-300">horório de funcionamento</h2>
                    <p className="text-[15px] w-80 text-center">Aqui, Acreditamos que podemos extrair de <span className="text-orange-400">VOCÊ</span> sua melhor versão. Se não acredita venha nós visitar. E faça uma aula experimental.</p>
                    <div className="mt-9">
                        <p>Segunda a Sexta : <span className="text-orange-600">05:00 as 21:00</span></p>
                        <p>Sábado : <span className="text-orange-600">07:00 as 12:00</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Horario;