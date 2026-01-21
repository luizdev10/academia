import { useState, useEffect } from "react";
import minhaImg from "../../assets/img/logo.png";
import { House, BookOpen, Phone, X, Menu } from 'lucide-react';

function HomeNavBar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "INÍCIO", icon: <House size={18} />, href: "#" },
        { name: "PLANOS", icon: <BookOpen size={18} />, href: "#" },
        { name: "CONTATO", icon: <Phone size={18} />, href: "#" },
    ];

    return (
        <header
            style={{ zIndex: 999, position: 'fixed', top: 0, width: '100%' }}
            className={`left-0 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"
                } p-3`}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center">


                <div className="flex items-center gap-3">
                    <img src={minhaImg} alt="Logo" className="h-12 w-auto object-contain  rounded-sm" />
                    <span className="text-white font-black text-xl tracking-tighter uppercase italic">
                        Saulo <span className="text-orange-500">Fitness</span>
                    </span>
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="flex items-center gap-2 text-sm font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-widest"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>

              
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>

           
            <div className={`
                fixed inset-0 bg-black/95 z-[99] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
                ${menuAberto ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
            `}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuAberto(false)}
                        className="text-2xl font-black text-white hover:text-orange-500 flex items-center gap-4 uppercase italic"
                    >
                        {link.icon}
                        {link.name}
                    </a>
                ))}
                <button
                    onClick={() => setMenuAberto(false)}
                    className="btn btn-circle btn-outline border-orange-500 text-orange-500 mt-10"
                >
                    <X />
                </button>
            </div>
        </header>
    );
}

export default HomeNavBar;