import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

const skills = [
    "HTML","CSS","JavaScript","React", "Tailwind", "Java", "Spring Boot", "SQL", "Laravel" , "Docker","MongoDB","Express.js", "Node.js", "Git", "Git Actions", "TypeScript"
]

export const Hero = () => {
    return (
    <section id="apropos" className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" 
            alt="Hero image"
            className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">

            </div>
        </div>

        {/* green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, index) => (
                <div 
                key={index}
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#42171c",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* contenu */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* colone gauche - contenu texte */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-lg text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Développeuse web - Étudiante
                        </span>
                    </div>
                    {/* headline  */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Recherche une <span className="text-primary glow-text">alternance</span> en Developpement Web pour <span className="text-primary glow-text">Septembre 2026</span> (durée de <span className="text-primary glow-text font-serif italic font-normal">14 mois).</span>
                        </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hello ! Je m'appelle Célia, je suis étudiante à 
                                Épitech Lille à la Web@cadémie. <br/> Je me spécialise dans le développement 
                                fullstack avec une forte affinité pour le Front-end. Passionnée par la 
                                création d'interfaces modernes et intuitives, je souhaite également 
                                consolider mes compétences côté Back-end. Ma formation m'apporte des 
                                bases solides ainsi qu'une grande autonomie.
                            </p>
                    </div>
                    {/* contact */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Me contacter <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button size="lg">
                            Télécharger mon CV <Download className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* reseaux sociaux */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
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
                {/* colonne droite - image de profil */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* phote de profil */}
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/photopro.png" alt="Célia Kadjo" className="w-full aspect-[5/5] object-cover rounded-2xl"/>
                            {/* badge flotant */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-medium uppercase">Open to work</span>
                                </div>
                            </div>
                            {/* badge stat */}
                        </div>
                    </div>
                </div>
            </div>
            {/* { section skils } */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                {/* <p className="text-sm text-muted-foreground mb-6 text-center uppercase">Hard Skills</p> */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-skills">
                        {[...skills, ...skills].map((skill, idx)=>(
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
