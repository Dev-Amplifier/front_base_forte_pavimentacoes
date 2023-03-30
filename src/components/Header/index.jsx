import { useEffect } from "react";
import "./style-header.css"
import { Fade } from "react-awesome-reveal";

export default function Header() {
    // const scrollY = window.scrollY 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY != 0) {
               return document.querySelector("nav")?.classList.add("bg-navbar-custom")  
            } 

            return document.querySelector("nav")?.classList.remove("bg-navbar-custom")  
        })
    }, [])
      
    const closeMenuMobile = () => {
        const btnMenuMonile = document.querySelector("#btnMenuMobile");
        btnMenuMonile.click()
    }

    
    return (
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 w-100">
                    <div className="container">
                        
                            <a className="navbar-brand link-light" href="#">
                                <div className="logo"></div>
                            </a>
                            <button id="btnMenuMobile" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="bi bi-list"></i>
                            </button>
                            <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item" onClick={() => closeMenuMobile()}>
                                        <a className="nav-link active link-white fs-6" aria-current="page" href="#">INÍCIO</a>
                                    </li>
                                    <li className="nav-item" onClick={() => closeMenuMobile()}>
                                    <a href="#section-about" className="nav-link link-white fs-6">SOBRE A BASE FORTE</a>
                                    </li>
                                    <li className="nav-item" onClick={() => closeMenuMobile()}>
                                    <a href="#section-differential" className="nav-link link-white fs-6" >NOSSO DIFERENCIAL</a>
                                    </li>
                                    <li className="nav-item" onClick={() => closeMenuMobile()}>
                                        <a href="#section-gallery" className="nav-link link-white fs-6" >FOTOS</a>
                                    </li>
                                    <li className="nav-item" onClick={() => closeMenuMobile()}>
                                        <a href="#section-contact" className="nav-link link-white fs-6" >CONTATO</a>
                                    </li>
                                </ul>
                            </div>
                    
                    </div>
                </nav>
            </header>
    )
}