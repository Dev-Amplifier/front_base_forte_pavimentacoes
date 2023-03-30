import "./style-gallery.css"
import { useRef } from "react"
import { Fade } from "react-awesome-reveal";
 
import paver01 from "./../../assets/paver01.jpg";
import paver02 from "./../../assets/paver02.jpg";
import paver03 from "./../../assets/paver03.jpg";
import pavimentacao01 from "./../../assets/pavimentacao01.jpg";
import pavimentacao02 from "./../../assets/pavimentacao02.jpg";
import pavimentacao03 from "./../../assets/pavimentacao03.jpg";
import pavimentacao04 from "./../../assets/pavimentacao04.jpg";
import terraplanagem01 from "./../../assets/terraplanagem01.jpg";
import terraplanagem02 from "./../../assets/terraplanagem02.jpg";
import terraplanagem03 from "./../../assets/terraplanagem03.jpg";


export default function Gallery() {
    
    const galleryImgs = [
            paver01,
            paver02,
            paver03,
            pavimentacao01,
            pavimentacao02,
            pavimentacao03,
            pavimentacao04,
            terraplanagem01,
            terraplanagem02,
            terraplanagem03,
        ];
        
    const carousel = useRef(null);

    function handleLeftClick() {
        console.log("left: ", carousel);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    
    function handleRightClick() {
        console.log("right: ", carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    return (
        <section id="section-gallery" className="">
            <div className="space-menu"></div>
            <div className="container mb-5">
                <Fade>
                    <div className="mb-3">
                        <h2 className="text-light">Conheça um pouco do nosso trabalho</h2>
                        <div className="small text-gray">Formada por profissionais qualificados.</div>
                    </div>
                </Fade>

                <Fade>
                    <div className="card-gallary d-flex mb-5">
                        <button className="btn btn-gray my-2 mx-1" onClick={handleLeftClick}>
                            <i className="bi bi-caret-left-fill"></i>
                        </button>
                        
                        <div ref={carousel} className="carousel d-flex">
                            {galleryImgs.map((image, index) => (
                                <img key={ index } src={image} className="imgCarousel m-2" alt="" />
                            ))}
                        </div>

                        <button className="btn btn-gray my-2 mx-1" onClick={handleRightClick}>
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                </Fade>
            </div>
             <Fade>
                    <div className="d-flex justify-content-end">
                        <div className="logoBaseForteGray"></div>
                    </div>
            </Fade>
        </section>
    )
}