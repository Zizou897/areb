


export const FloatButtonCv = () => {

    const handleCv = () => {
        const CV_PDF = "/AZEEZ-CV.pdf";
        window.open(CV_PDF, "_blank")
    }

    return(
        <button 
            onClick={handleCv}
            className="bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 fixed top-[80%] right-[5%] text-lg cursor-pointer">
            <i class="fa-solid fa-paste"></i>
        </button>
    )
}