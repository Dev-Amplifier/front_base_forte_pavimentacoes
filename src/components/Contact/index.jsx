import "./style-contact.css"
import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal";
import api from "../../services/api";
import {mask, unMask} from "remask"



export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneContact, setPhoneContact] = useState("");
    const [comments, setComments] = useState("Olá, gostaria de solicitar um orçamento.");
    const [loading, setLoading] = useState(false);
    const [isDisabledBtnSend, setIsDisabledBtnSend] = useState(true);

    useEffect(() => {
        if (name != "" && email != "" && phoneContact != "" && comments != "") return setIsDisabledBtnSend(false)

        return setIsDisabledBtnSend(true)
    }, [name, email, phoneContact, comments]);


    const setValuePhone = (e) => {
        setPhoneContact(mask(unMask(e.target.value), ['(99) 9999-9999', '(99) 99999-9999']))
    }

    const sendContact = async () => {
        console.log("chamou")
        setLoading(true)
        
        
        const phoneFormat = unMask(phoneContact)
        try {
            const result = await api.post("send_email/", {name, email, phoneContact: phoneFormat, comments});
            const { status } = result
            console.log(status)
            if (status == 200) {
                document.querySelector(".alert")?.classList.remove("d-none");
                setName("");
                setEmail("");
                setPhoneContact("");
                setComments("");

                setTimeout(() => {
                    document.querySelector(".alert")?.classList.add("d-none");
                }, 3500);
            }
        } catch (err) {
            console.error("❌ Send email: ", err.message)
        } finally {
            setLoading(false)
        }
        
    }

    return (
        <section id="section-contact">
            <div className="space-menu"></div>
            <div className="container pb-5">
                <Fade>
                <div className="mb-5">
                    <h2 className="p-0 m-0">ENTRE EM CONTATO PARA SOLICITAR UM ORÇAMENTO</h2>
                    <div className="small text-orange p-0 m-0">Preencha todos os campos para poder solicitar o orçamento.</div>
                </div>
                </Fade>
                
                <Fade>
                    <div className="alert alert-success text-center d-none" role="alert">
                        Enviado com sucesso!! Assim que possível entraremos em contato <i className="bi bi-check-circle"></i>
                    </div>
                </Fade>
                <div className="d-flex justify-content-between w-100 flex-column flex-lg-row flex-md-row flex-sm-column">
                    <form className="w-100 m-3 mx-auto">
                        <Fade>
                        <a href="https://wa.me/5541999939196?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento" target="_blank" className="w-100 btn btn-whatsapp shadow-none">
                            Entre em contrato via Whatsapp <i className="bi bi-whatsapp"></i>
                        </a>
                        </Fade>

                        <Fade>
                            <p className="w-100 text-center py-3">ou</p>
                        </Fade>

                        <Fade>
                        <div className="mb-3 form-control w-100 divInput m-0 p-0 ps-2 d-flex align-items-center">
                            <input className="border-0 shadow-none w-100 text-gray" type="text" placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <i className="bi bi-person mx-2 fs-5 text-gray"></i>
                        </div>
                        </Fade>

                        <Fade>
                        <div className="mb-3 form-control w-100 divInput m-0 p-0 ps-2 d-flex align-items-center">
                            <input className="border-0 shadow-none w-100 text-gray" type="text" placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                            <i className="bi bi-envelope mx-2 fs-5 text-gray"></i>
                        </div>
                        </Fade>

                        <Fade>
                        <div className="mb-3 form-control w-100 divInput m-0 p-0 ps-2 d-flex align-items-center">
                            <input className="border-0 shadow-none w-100 text-gray" type="text" placeholder="Digite seu telefone"
                            value={phoneContact}
                            onChange={(e) => setValuePhone(e)}/>
                            <i className="bi bi-telephone mx-2 fs-5 text-gray"></i>
                                
                        </div>
                        </Fade>
                        
                        <Fade>
                            <textarea className="form-control shadow-none"
                        placeholder="Digite sua mensagem"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                        </Fade>

                        <Fade>
                        <div className="w-100 text-end py-4">
                            <button type="button" disabled={isDisabledBtnSend || loading} className="btn btn-orange" onClick={() => sendContact()}>
                                    {loading ? 
                                        <div className="spinner-border spinner-border-sm mx-4" role="status"></div>
                                        :
                                        <span>Enviar <i className="bi bi-check"></i></span>
                                    }
                            </button>
                        </div>
                        </Fade>

                       
                    </form>

                    <div className="w-100 m-3">
                        <Fade>
                            <div className="w-100 p-5">
                                <div className="mb-3">
                                    <h3>Localização: </h3>
                                    <p>Estamos localizados na Rua:  Rua Professor Duílio Calderari,
                                        <br /> 
                                        Nº 2322. Jardim Paulista - Campina Grande do Sul</p>
                                </div>
                                <div className="mb-3">
                                    <h4>Atendimento:</h4>
                                    <p>Atendimentos de seg a sáb. Das 8h00 as 18h00</p>
                                </div>

                                <a className="btn btn-light w-100" target="_blank" href="https://www.google.com/maps/place/R.+Prof.+Du%C3%ADlio+Calderari,+2322+-+Jardim+Paulista,+Campina+Grande+do+Sul+-+PR,+83430-000/@-25.3646118,-49.1050337,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcec0d9aa63b95:0x79f281674beff7d2!8m2!3d-25.3646118!4d-49.1050337!16s%2Fg%2F11b8_pj5g5">
                                    <span className="fw-bold text-gray">Como chegar ? <i className="bi bi-geo-fill"></i></span>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Fade>
                <div className="d-flex justify-content-start">
                    <div className="logoBaseForteOrange"></div>
                </div>
            </Fade>
        </section>
    )
}