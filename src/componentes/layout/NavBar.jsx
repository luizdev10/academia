import { useState, useEffect, useRef } from "react"; // Adicionado useRef
import minhaImg from "../../assets/img/logo.png";
import { House, BookOpen, Phone, X, Menu, Leaf } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function HomeNavBar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null); // Referência para o container do menu
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {

            if (menuAberto && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAberto(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuAberto]);

    useEffect(() => {
        setMenuAberto(false);
    }, [location]);

    const handleNavigation = (e, target) => {
        if (target.includes("#")) {
            e.preventDefault();
            const id = target.split("#")[1];
            
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }
        }
        setMenuAberto(false);
    };

    const navLinks = [
        { name: "INÍCIO", icon: <House size={18} />, to: "/#home" },
        { name: "PLANOS", icon: <BookOpen size={18} />, to: "/planos" },
        { name: "CONTATO", icon: <Phone size={18} />, to: "/#contato" },
        { name: "NUTRIÇÃO", icon: <Leaf size={18} />, to: "/Nutricao" }
    ]
    return (
        <header
            style={{ zIndex: 9999, position: 'fixed', top: 0, width: '100%' }}
            className={`left-0 transition-all duration-300 ${scrolled ? "bg-black shadow-lg py-2" : "bg-transparent py-4"} p-3`}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center relative z-10001">
                <Link to="/" className="flex items-center gap-3">
                    <img src={minhaImg} alt="Logo" className="h-12 w-auto object-contain rounded-sm" />
                    <span className="text-white font-black text-xl tracking-tighter uppercase italic">
                        Saulo <span className="text-orange-500">Fitness</span>
                    </span>
                </Link>

                
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                onClick={(e) => handleNavigation(e, link.to)}
                                className={`flex items-center gap-2 text-sm font-bold ${link.cor} hover:text-orange-500 transition-colors uppercase tracking-widest`}
                            >
                                {link.icon} {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

              
                <button
                    className="md:hidden text-white p-2 focus:outline-none relative z-10002"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <X size={32} className="text-orange-500" /> : <Menu size={32} />}
                </button>
            </nav>

            
            <div 
                className={`
                    fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
                    ${menuAberto ? "opacity-100 visible z-10000" : "opacity-0 invisible pointer-events-none"}
                `}
            >
                
                <div ref={menuRef} className="flex flex-col items-center gap-8 w-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={(e) => handleNavigation(e, link.to)}
                            className="text-2xl font-black text-white hover:text-orange-500 flex items-center gap-4 uppercase italic"
                        >
                            {link.icon} {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default HomeNavBar;