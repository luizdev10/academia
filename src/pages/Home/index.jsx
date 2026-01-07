import "./style.css";
import minhaImg from "../../assets/img/logo.png";
import foto1 from "../../assets/img/foto1.png";
//import foto2 from "../../assets/img/logo.png";
//import foto3 from "../../assets/img/logo.png";
import { Dumbbell, Leaf, Activity, MapPinIcon, Phone, MailCheck, User, BookOpen, House, X, TableOfContents } from 'lucide-react';
import { useState } from "react";

function Home() {
    const fotos = [foto1, minhaImg];

    const [indice, setIndice] = useState(0);

    const proximo = () => {
        setIndice((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    };
    const anterior = () => {
        setIndice((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
    };

    const [menuAberto, setMenuAberto] = useState(false)
    
    return (
        <div id="section-body-inicio">
            <nav id="barra-nav-home">
                <div className="logo-menu-home">
                    <div id="area-logo">
                        <img src={minhaImg} alt="" className="img-logo-home"/>
                        <p>Saulo Fitness</p>
                    </div>
                    <div onClick={() => setMenuAberto(!menuAberto)} style={{ cursor: 'pointer' }}>
                        {menuAberto ? (
                            <X color="black" size={40}/>
                        ) : (
                            <TableOfContents color="black" size={40} />
                            
                        )}
                    </div>
                </div>

                <div>
                    <ul className={`list-menu-home ${menuAberto ? "active": ""}`}>
                        <li><a href=""><House color="black" size={15} />  INICIO</a></li>
                        <li><a href="">CONTATO</a></li>
                        <li><a href=""><BookOpen color="black" size={15} />  PLANOS</a></li>
                    </ul>
                </div>
            </nav>
            <div id="section-inicio">
                <h1>PROPORCIONANDO SAÚDE E BEM ESTAR</h1>
            </div>
            <div id="modalidades">
                <div id="titulo-model">
                    <h2>Nossas modalidades</h2>
                    <p>participe de nossas aulas</p>
                    <p>Animadas, eletrizantes e divertidas. É assim que nossas aulas são conhecidas. São muito mais do que músicas agitadas ou movimentos coreografados. É onde você constrói camaradagem e novas amizades com pessoas que têm os mesmos objetivos, paixões e motivações que você. Faça uma aula hoje mesmo e comece a movimentar-se.</p>

                </div>
                <div id="area-carrosel-model">

                    <button onClick={anterior} className="btn-left-home">❮</button>


                    <img
                        src={fotos[indice]}
                        alt="Modalidade"
                        style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                            borderRadius: '15px'
                        }}
                    />

                    <button onClick={proximo} className="btn-rigth-home">❯</button>
                </div>
            </div>
            <div className="sobre-container">
                <div className="sobre-imagens">
                    <img src={minhaImg} alt="Treino 1" className="img-menor" />
                    <img src={foto1} alt="Treino 2" className="img-maior" />
                </div>


                <div className="sobre-texto">
                    <h2><User color="black" size={20} />  SOBRE ELE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cumque repudiandae, consequatur commodi amet labore illum perferendis dicta, corporis vero delectus sed? Quasi nam aliquid necessitatibus, facere eos ab cum.</p>
                </div>
            </div>

            <div id="section-home-servicos">
                <div id="musculacao-home">
                    <h2 style={{ display: "flex", alignItems: "center", gap: "6px" }}><Dumbbell color="black" size={20} /> MUSCULAÇÃO</h2>
                    <p>Force seus limites e construa o corpo dos seus sonhos.</p>
                </div>
                <div id="perda-peso-home">
                    <h2><Leaf color="black" size={20} />  PERDA DE PESO</h2>
                    <p>Queime calorias, acelere seu metabolismo e conquiste o peso ideal.</p>
                </div>
                <div id="rebilitacao-home">
                    <h2><Activity color="black" size={20} />  REABILITAÇÃO</h2>
                    <p>Recupere-se com segurança e volte mais forte</p>
                </div>
            </div>
            <div id="section-footer-home">
                <h2>O único treino ruim é o
                    treino que não aconteceu.</h2>
                <div className="espaco-dados-home">
                    <div>

                        <p><MapPinIcon color="black" size={14} />ENDEREÇO</p>
                        <p>endereco ficticio n°1232312</p>
                    </div>
                    <div>
                        <p><Phone color="black" size={14} /> TELEFONE</p>
                        <p>88988853140</p>
                    </div>
                    <div>
                        <p><MailCheck color="black" size={14} /> E-MAIL</p>
                        <p>EXEMPLOQUALQUER@GMIAL.COM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home