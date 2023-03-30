import "./style-differential.css"
import { Fade } from "react-awesome-reveal";

export default function Differential() {
    return (
        <section id="section-differential">
            <div className="space-menu"></div>
            <div className="container pb-5">
                <Fade>
                    <h2 className="fw-bold mb-3">O NOSSO DIFERENCIAL</h2>
                </Fade>
                <div className="w-100 d-flex justify-content-evenly flex-column flex-lg-row flex-md-row flex-sm-column">
                
                <div>
                    <Fade>      
                        <div className="card-differential m-3 mx-auto mx-lg-auto mx-md-3">
                            <div className="p-3">
                                <div className="iconStreet"></div>
                                <h4 className="my-2">Pavimentações</h4>
                            </div>
                            <p><i className="bi bi-info-circle mx-1"></i> Processo de terraplanagem e estrutura de pavimento da base da rua ao revestimento, seja de concreto ou asfalto.</p>
                        </div>
                    </Fade>
                </div>
                    
                <div>
                    <Fade>
                        <div className="card-differential m-3 mx-auto mx-lg-auto mx-md-3">
                            <div className="p-3">
                                <div className="iconPaving"></div>
                                <h4 className="my-2">Paver</h4>                      
                            </div>
                            <p><i className="bi bi-info-circle mx-1"></i> Paver.</p>
                        </div>
                    </Fade>
                </div>
                    
                <div>
                    <Fade>
                        <div className="card-differential m-3 mx-auto mx-lg-auto mx-md-3">
                            <div className="p-3">
                                <div className="iconEscavadeira"></div>
                                <h4 className="my-2">Terraplanagem</h4>
                            </div>

                            <p><i className="bi bi-info-circle mx-1"></i> Procedimento para nivelar o terreno e deixá-lo plano, evitando acidentes e resolvendo possíveis problemas antes mesmo de iniciar a construção.</p>
                        </div>
                    </Fade>
                </div>
                </div>

            
                <Fade>
                    <div className="w-100 text-center mb-5">
                        <p>Trabalhamos com os melhores materiais do mercado e temos em nossa equipe profissionais qualificados para sempre trazer tecnologia e qualidade.</p>
                    </div>
                </Fade>    
            </div>
            <Fade>
                <div className="d-flex justify-content-start">
                    <div className="logoBaseForteOrange"></div>
                </div>
            </Fade>
        </section>
    )
}