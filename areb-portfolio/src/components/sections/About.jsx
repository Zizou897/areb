import { RevealOnScroll } from "../RevealOnScroll"



export const About = () => {

    const FrontendSkills = ["HTML", "CSS","TailwindCSS","React", "Vue (cdn)", "TypeScript"]
    const BackendSkills = ["Python", "Django", "DjangoRestFramework", "FastApi", "DjangoNinja","MySQL"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-2 bg-[url(/background-index.png)] bg-fixed">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">À propos de Moi</h2>

                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Développeur passionné avec une expertise dans 
                    la création d'applications Web évolutives et la
                    création de solutions innovantes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="round-xl p-6 hover:-trabslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Front-End </h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"> {tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="reound-xl p-6 hover:-trabslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Back-End </h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"> {tech}</span>
                                ))}
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Licence 3 Informatique </strong> ASTC Groupe (2021-2022)
                            </li>
                            <li>
                               <strong>Certification Python</strong> à NaN: (2020-2021)
                            </li>
                            <li>
                               <strong>BTS Informatique</strong> à Cefiat: (2019-2020)
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Experiences</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Developpeur FullStack chez Demissa (2020 - Present)</h4>
                                <p className=" text-gray-400"> Développement du backend, réflexion sur l’architecture, intégration du frontend et gestion du déploiement.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">SoftWare Engineer chez COSIT (jan 2023 - jan 2024) à distance </h4>
                                <p className=" text-gray-400">Conception, maintenance et déploiement de chatbots WhatsApp et de dashboards pour diverses structures administratives.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}