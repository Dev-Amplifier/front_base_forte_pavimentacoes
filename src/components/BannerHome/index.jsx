import "./style-banner-home.css"
import { Fade } from "react-awesome-reveal";

export default function BannerHome() {
    return (
        <section id="banner">
            <Fade>
                <div id="banner-image"></div>
                <div id="content-banner" className="text-light">
                    <div className="text-center">
                        <div id="logo-banner"></div>
                        <h5 className="title-banner">TECNOLOGIA E QUALIDADE</h5>
                    </div>
                    <div id="redes-link">
                        <div className="link-hover ">
                            <i className="bi bi-facebook fs-4"></i>
                        </div>
                        <div className="link-hover ">
                            <i className="bi bi-instagram fs-4"></i>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}