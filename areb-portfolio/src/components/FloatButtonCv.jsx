import { Tooltip } from 'react-tooltip';
import "react-tooltip/dist/react-tooltip.css";

export const FloatButtonCv = () => {

    const handleCv = () => {
        const CV_PDF = "/AZEEZ-CV.pdf";
        window.open(CV_PDF, "_blank")
    }

    return(
        <>
        <button 
        id='myCV'
            onClick={handleCv}
            className="bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 fixed top-[80%] right-[5%] text-lg cursor-pointer transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58,130,246,0.2)]">
            <i class="fa-solid fa-paste"></i>
        </button>
        
        <Tooltip 
            anchorSelect="#myCV"
            content="Obtenir mon CV " />
        </>
    )
}