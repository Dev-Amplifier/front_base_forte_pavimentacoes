import "./style-footer.css"
import { useState } from "react"
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    const [actualDate, setActualDate] = useState(new Date().getFullYear())
    return (
        <footer className="w-100 bg-orange p-1 text-gray d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-sm-column flex-column">
            <Fade>
                <div className="d-flex align-items-center p-3">
                    <div className="link-hover mx-1 cursor-pointer">
                        <i className="bi bi-facebook fs-3"></i>
                    </div>
                    <div className="link-hover mx-1 cursor-pointer">
                        <i className="bi bi-instagram text-orenge fs-3"></i>
                    </div>
                </div>
                <div className="text-center">
                    <p>Todos os direitos reservados a Base Forte Pavimentações@{actualDate}</p>
                </div>
                <a href="https://www.devamp.com.br/" target="_blank" id="logoDevAmp" className="px-3 text-decoration-none link-light text-center d-flex flex-column align-items-center justify-content-center">
                    <span className="m-0 p-0">Desenvolvido por:</span>
                    <span className="fw-bold m-0 p-0 fs-6">DEV_AMP</span>
                    <span>S O F T W A R E</span>
                </a>
            </Fade>
        </footer>
    )
}