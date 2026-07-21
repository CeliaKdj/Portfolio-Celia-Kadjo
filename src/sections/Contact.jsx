import { useState } from "react";
import { Mail, Phone, MapPin, Copy } from "lucide-react";

export const Contact = () => {
    // pour memoriser l'élement qui vient d'être copié:
    const [copiedItem, setCopiedItem] = useState("");

    // fonction qui gere clic et copie
    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text); // copie dans le presse-papier
        setCopiedItem(type); // déclenche l'affichage du message "Copié"
        
        // fait disparaître le message "Copié" après 2 secondes
        setTimeout(() => {
            setCopiedItem("");
        }, 2000);
    };


    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Décoration de fond */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-2xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Prête à rejoindre votre équipe
                    </h2>
                
                </div>

                {/* Grille de contacts */}
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
                    
                    {/* Carte Email */}
                    <button 
                        onClick={() => handleCopy("celia.kadjo.pro@gmail.com", "email")}
                        className="group glass p-8 rounded-2xl flex items-center gap-6 hover:bg-primary/5 transition-colors duration-300 w-full text-left"
                    >
                        <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">Email</h3>
                            {/* Affichage dynamique du texte selon l'état */}
                            <p className={copiedItem === "email" ? "text-green-500 font-medium" : "text-muted-foreground"}>
                                {copiedItem === "email" ? "Adresse copiée !" : "celia.kadjo.pro@gmail.com"}
                            </p>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-primary">
                            <Copy className="w-5 h-5" />
                        </div>
                    </button>

                    {/* Carte Téléphone */}
                    <button 
                        onClick={() => handleCopy("06 25 89 35 59", "phone")}
                        className="group glass p-8 rounded-2xl flex items-center gap-6 hover:bg-primary/5 transition-colors duration-300 w-full text-left"
                    >
                        <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">Téléphone</h3>
                            <p className={copiedItem === "phone" ? "text-green-500 font-medium" : "text-muted-foreground"}>
                                {copiedItem === "phone" ? "Numéro copié !" : "06 25 89 35 59"}
                            </p>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-primary">
                            <Copy className="w-5 h-5" />
                        </div>
                    </button>

                    {/* Carte LinkedIn */}
                    <a href="https://www.linkedin.com/in/celia-kadjo" target="_blank" rel="noopener noreferrer" className="group glass p-8 rounded-2xl flex items-center gap-6 hover:bg-primary/5 transition-colors duration-300">
                        <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            {/* On utilise ton icône SVG ici au lieu de lucide-react */}
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
                            <p className="text-muted-foreground">Célia Kadjo</p>
                        </div>
                    </a>

                    {/* Carte Localisation */}
                    <div className="group glass p-8 rounded-2xl flex items-center gap-6 hover:bg-primary/5 transition-colors">
                        <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">Localisation</h3>
                            <p className="text-muted-foreground">Métropole Lilloise et alentours</p>
                        </div>
                    </div>
                </div>

                {/* Section Réseaux sociaux */}
                <div className="max-w-4xl mx-auto mt-12 flex justify-center items-center gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">Suivez-moi</span>
                    
                    {/* Lien GitHub */}
                    <a 
                        href="https://github.com/CeliaKdj" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>

                    {/* Lien LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/celia-kadjo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
};