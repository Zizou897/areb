
import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"


export const Contact = () => {
   
    const [formData, setFormaData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const SERVICE_ID = "service_ozxqc5m"
    const TEMPLATE_ID = "template_pywm0rv"
    const PUBLIC_API = "c2j8fD3VF3w9QtC_g"

    const handleChange = (e) => {
        setFormaData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/sent",{
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_API,
                template_params: {
                to_name: "Areb.dev",
                from_name: formData.name,
                email: formData.email,
                message: formData.message,
             },
           
            });
            toast.success("Message envoyé avec succès 🚀", {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
               
            })
            setFormaData({name: "", email: "", message: ""});
        } catch (error){
            toast.error("Erreur lors de l'envoi de l'email");
        } finally {
            setLoading(false);
        }
    };


    return(
        <section id="contact" className="min-h-screen flex justify-center py-20 bg-[url(/background-index.png)] bg-fixed">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form  className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                placeholder="Name.." 
                                required 
                                value={ formData.name }
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="example@gmail.com"
                                required
                                value={ formData.email }
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>
                        <div className="relative">
                            <textarea 
                                type="message" 
                                id="message" 
                                name="message"
                                message="message" 
                                rows={5} 
                                placeholder="Your Message..." 
                                required 
                                value={ formData.message }
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130;246,0.4)] cursor-pointer">
                            {loading ? "Envoi..." : "Envoyer message"}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
            <ToastContainer 
            className="text-gray-300 font-semibold shadow-lg rounded-lg p-4"
            theme="dark"/>
        </section>
    )
}