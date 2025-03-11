import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const SERVICE_ID = "service_ozxqc5m"
    const TEMPLATE_ID = "template_pywm0rv"
    const PUBLIC_API = "CiF2itIcjdrdjzCnk"

    const handleSubmit = (e) => {
        e.preventdefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_API).then((result) => {
            alert("Message sent !");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => alert("Oops! Something went wrong. Please try again."))
    }

    return(
        <section id="contact" className="min-h-screen flex justify-center py-20 bg-[url(/background-index.png)] bg-fixed">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form action="" className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name} 
                                name="name"
                                placeholder="Name.." 
                                required 
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                value={formData.email} 
                                name="email" 
                                placeholder="example@gmail.com"
                                required
                                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>
                        <div className="relative">
                            <textarea 
                                type="message" 
                                id="message" 
                                value={formData.message} 
                                message="message" 
                                rows={5} 
                                placeholder="Your Message..." 
                                required 
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130;246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )

}