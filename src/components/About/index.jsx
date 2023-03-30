import "./style-about.css"
import { Fade } from "react-awesome-reveal";

export default function About() {
    return (
        <section id="section-about">
            <div className="space-menu"></div>
            <div className="container-about container w-100 mb-5">
                <Fade>
                    <h2 className="mb-5 fw-bold">UM POUCO SOBRE NÓS</h2>
                </Fade>
                
                <Fade>
                    <p className="text-about fs-5">A Base Forte é uma empresa, que garante os melhores serviços, qualidade e compromisso com a entrega, oferecemos serviços de paver, locação de maquinário, escavação, sinalização, terraplanagem e pavimentação asfáltica de alta qualidade, aplicada por profissionais experientes, utilizando a mais moderna tecnologia para garantir uma base forte, resistência e durabilidade aos nossos serviços. Atendemos empresas, condomínios, estacionamentos, sempre primando pela excelência, satisfazendo cada vez mais nossos clientes a cada trabalho realizado, respeito, agilidade e garantia de qualidade em nossos serviços. Atendimento personalizado, priorizando suas necessidades e fazendo de seus objetivos os nossos.</p>
                </Fade>        
            </div>
            
            <Fade>
                <div className="d-flex justify-content-end">
                    <div className="logoBaseForteGray"></div>
                </div>
            </Fade>
        </section>
    );
}