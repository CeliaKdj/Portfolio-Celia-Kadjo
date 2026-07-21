import { Button } from "../components/Button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
    {href: "#apropos", label: "À propos"},
    {href: "#projects", label: "Projets"},
    // {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-widest hover:text-primary">
                CK<span className="text-primary">.</span>
            </a>

            {/* barre de navigation pour ordinateur */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 px-1 flex items-center gap-1">
                {navLinks.map((link, index) => (
                 <a href={link.href} 
                    key={index} 
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                    {link.label}
                 </a>
                ))}
                </div>
            </div>

            {/* contact bouton ordinateur */}
            <a href="#contact" className="hidden md:block">
                <Button size="sm">
                    Contactez-moi
                </Button>
            </a>

            {/* bouton menu mobile */}
            <button 
                className="md:hidden p-2 text-foreground cursor-pointer" 
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </nav>

        {/* mobile menu */}
        {isMobileMenuOpen && (
        <div className="md:hidden glass-strong">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animate-fade-in">
                {navLinks.map((link, index) => (
                 <a href={link.href} 
                    key={index} 
                    className="text-lg text-muted-foreground hover:text-foreground py-2">
                    {link.label}
                 </a>
                ))}
            </div>
        </div>
        )}
    </header>
    );
};
