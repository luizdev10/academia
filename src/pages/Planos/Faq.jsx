function FAQ() {


    const duvidas = [
        {
            pergunta: "Quais as formas de pagamento?",
            resposta: "Aceitamos Pix, cartão, dinheiro ou débito."
        },
        {
            pergunta: "Tem taxa de matrícula ou anuidade?",
            resposta: "Não temos taxa alguma, apenas o Valor da mensalidade."
        },
        {
            pergunta: "Preciso de contrato de fidelidade?",
            resposta: "Não precisa de contrato algum."
        },
        {
            pergunta: "Os professores ajudam a montar a ficha?",
            resposta: "Com toda certeza, temos profissionais pronto para lhe ajudar nos seus treinos."
        },
        {
            pergunta: "Quais os horários de pico?",
            resposta: "Costuma ser em dois horarios 05:00 da manha ate as 7:00 e 17:00 as 21:00"
        },
        {
            pergunta: "Aceitam Gympass?",
            resposta: "Sim aceitamos Gympass"
        }
    ]
    return (
        <>
            <section>
                <div className="justify-center mt-10">
                    <h1 className=" text-warning uppercase text-center text-3xl font-black italic mb-3">Perguntas <span className="text-white">frequentes</span></h1>
                    <div className="bg-orange-400 w-30 h-2 m-auto mb-4"></div>
                </div>
                {duvidas.map((duv, check) => {
                    return (
                        <div className=" flex justify-center">
                            <div key={check}
                                className="collapse bg-base-100 border border-base-300 m-2 w-95 ">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title font-semibold ">{duv.pergunta}</div>
                                <div className="collapse-content text-sm text-orange-500 ">{duv.resposta}</div>
                            </div>
                        </div>
                    )
                })}

            </section>
        </>
    )
}
export default FAQ;