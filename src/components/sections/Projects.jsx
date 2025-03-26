import { RevealOnScroll } from "../RevealOnScroll"

 



 export const Project = () => {

    return (
        <section id="projects" className="min-h-screen flex justify-center py-20 bg-[url(/background-index.png)] bg-fixed">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                    Projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1] transition-all">
                        <h3 className="text-xl font-bold mb-2"> DE-MISSA </h3>
                        <p className="text-gray-400 mb-4">
                        Plateforme spécialisée dans les services de proximité à la personne
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {[ "HTML", "CSS" , "Vue(cdn)", "Git","Python", "Django", "MySQL"].map((tech, key) =>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">{tech}</span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://azeridwan10.pythonanywhere.com/" target="True" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Voir Projet →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Louhsira</h3>
                        <p className="text-gray-400 mb-4">
                            plateforme qui rassemble toutes les opportunités de vente et de location de maisons, ainsi que les agences immobilières, 
                            en un seul endroit
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {[ "HTML", "CSS" , "Vue(cdn)", "Git","Python", "Django", "MySQL", "Celery", "Redis"].map((tech, key) =>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">{tech}</span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://louhsira.pythonanywhere.com/" target="True" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Voir Projet →</a>
                        </div>
                    </div>

                  {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
                        <p className="text-gray-400 mb-4">
                            Scalable cloud infrastructure managment with real-time monitoring and automated scaling
                        </p>
                        <div>
                        {["Python", "Django", "FastApi", "MySQL"].map((tech, key) =>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition">{tech}</span>
                        ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                        </div>
                    </div> */}

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
 }