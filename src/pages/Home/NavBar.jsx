import "./NavBarStyle.css";
import minhaImg from "../../assets/img/logo.png";
import foto1 from "../../assets/img/foto1.png";
//import foto2 from "../../assets/img/logo.png";
//import foto3 from "../../assets/img/logo.png";
import { Dumbbell, Leaf, Activity, MapPinIcon, Phone, MailCheck, User, BookOpen, House, X, TableOfContents } from 'lucide-react';
import { useState } from "react";

function HomeNavBar() {
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
        <section id="section-body-inicio">
            <nav id="barra-nav-home">
                <div className="logo-menu-home">
                    <div id="area-logo">
                        <img src={minhaImg} alt="" className="img-logo-home" />
                        <p>Saulo Fitness</p>

                        <div onClick={() => setMenuAberto(!menuAberto)} >
                            {menuAberto ? (
                                <X color="black" size={40} />
                            ) : (
                                <TableOfContents color="black" size={40} />
                            )}
                        </div>
                    </div>
                </div>

                <div className=" area-li">
                    <ul className={`list-menu-home ${menuAberto ? "active" : ""}`}>
                        <li><House color="black" size={15} /><a href="">  INICIO</a></li>
                        <li><a href="">CONTATO</a></li>
                        <li><BookOpen color="black" size={15} /><a href="">  PLANOS</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default HomeNavBar