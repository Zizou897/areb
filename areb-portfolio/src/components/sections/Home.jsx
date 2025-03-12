import { RevealOnScroll } from "../RevealOnScroll"



export const Home = () => {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-[url(/background-index.png)] bg-fixed">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <hi className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    salut, je suis Azeez Ridwan
                </hi>
                <p className="text-white-400 text-lg mb-8 max-w-lg mx-auto">
                Je suis un développeur full-stack passionné, spécialisé en Django, 
                FastAPI, React, Next et MySQL. Je crées des applications web performantes, 
                évolutives et agréables à utiliser. 🚀
                </p>
                <div className="mb-4">
                
                    <span  className="mr-4 bg-blue-500/10 border border-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"><a href="https://www.linkedin.com/in/azeez-ridwan-25b889219/" target="true"> <i class="fa-brands fa-linkedin mr-2"></i> Linkdn </a></span>
                    <span  className="mr-4 bg-blue-500/10 border border-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"><a href="https://github.com/Zizou897" target="true"><i class="fa-brands fa-github mr-2"></i> GitHub</a></span>
                    <span  className="mr-4 bg-blue-500/10 border border-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"><a href="" target="true"><i class="fa-brands fa-discord mr-2"></i> Discord</a></span>
                    
                </div>
                <div className="flex justify-center space-x-4">
                    <a 
                    href="#projects" 
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58,130,246,0.4)]">
                        Voir les projets
                    </a>

                    <a 
                    href="#contact" 
                    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
                        Contactez-moi
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}