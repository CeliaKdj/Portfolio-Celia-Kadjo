const projects = [
    {
        title: "Générateur de CV",
        description: 
            "Conception d'un générateur de CV en ligne, permettant à un utilisateur de créer, visualiser, modifier et exporter un CV professionnel au format PDF.",
        image: "/projects/generateur-cv.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Boostrap", "Projet individuel"],
        link: "#",
        github: "#",
    
    },
    {
        title: "My Cinéma",
        description: 
            "Conception d'un back-office pour le gérant d'un cinéma afin qu'il puisse gérer le mieux possible son cinéma.",
        image: "/projects/generateur-cv.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Projet individuel"],
    
    },
    {
        title: "Portfolio",
        description: 
            "Conception et publication d'un portfolio professionnel multi-pages, destiné à présenter le profil, le parcours et les réalisations.",
        image: "/projects/generateur-cv.png",
        tags: ["Jekyll", "Markdown", "GitHub Pages", "GitHub Actions", "Projet individuel"],
    
    },
    {
        title: "Klivio",
        description: 
            "Premier projet d’intégration web : construction de la page d’accueil de Klivio, une plateforme proposant des formations en ligne.",
        image: "/projects/klivio.png",
        tags: ["HTML", "TailwindCSS", "Projet individuel"],
    
    },
]

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* section projets */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Mes projets</span>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">Aperçu de mes projets personnels ou réalisés dans le cadre de ma formation à Epitech</p>
            </div>

            {/* projets grid */}
            <div className="grid grid-cols-1 max-w-4xl mx-auto gap-12">
                {projects.map((project, idx)=> (
                    <div key={idx} 
                         className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col md:flex-row">
                        
                        <div className="relative overflow-hidden w-full md:w-1/2 aspect-video md:aspect-auto">
                            <img 
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>

                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            
                            {/* tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, tagIdx) => (
                                    <span 
                                        key={tagIdx} 
                                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>

    </section>
    )
}
