import React from "react";
import "../styles/components/pages/NosotrosPage.css";

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
            <h2 className="decorado">Nosotros</h2>
            <p>
                Somos un grupo de tecnicos en hemoterapia que decidimos realizar una Web, 
                donde se pueda obtener toda la información unificada del procedimiento 
                de donacion de sangre.
            </p>
            <p>
                Donde tambien puedan tener contacto directo con profesionales para poder aclarar
                todas las dudas que se les ocurran y poder aclararlas.

            </p>
        </div>

        <div className="profesionales">
            <h2 className="decorado">Profesionales</h2>
            <div className="profesional izquierda">
                <img className="foto_perfil" src="images/SiluetaM.gif" alt="foto de perfil" width="200"/>
                <div className="texto_perfil">
                    <h3 className="name">Ezequiel</h3>
                    <h4 className="trabajo">Tec. en hemoterapia</h4>
                    <p className="parrafo_perfil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi ducimus alias perferendis minima eius, est unde labore necessitatibus, ullam, nobis similique? Hic quaerat distinctio cumque. Facere possimus ullam doloribus.</p>
                </div>
            </div>
            <div className="profesional derecha">
                <img className="foto_perfil" src="images/siluetaF.png" alt="foto de perfil" width="200"/>
                <div className="texto_perfil">
                    <h3 className="name">Florencia</h3>
                    <h4 className="trabajo">Tec. en hemoterapia</h4>
                    <p className="parrafo_perfil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe, excepturi amet corporis tempora quis pariatur dolore autem vel, fugit vitae ipsum dicta tempore optio sit omnis culpa natus quia.</p>
                </div>
            </div>
            <div className="profesional izquierda">
                <img className="foto_perfil" src="images/SiluetaM.gif" alt="foto de perfil" width="200"/>
                <div className="texto_perfil">
                    <h3 className="name">Martin</h3>
                    <h4 className="trabajo">Tec. en hemoterapia</h4>
                    <p className="parrafo_perfil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi id magnam animi similique error quidem nihil, obcaecati aut est. Soluta maiores aliquam rem ab fugiat saepe sit at quasi.</p>
                </div>
            </div>
            <div className="profesional derecha">
                <img className="foto_perfil" src="images/siluetaF.png" alt="foto de perfil" width="200"/>
                <div className="texto_perfil">
                    <h3 className="name">Manuela</h3>
                    <h4 className="trabajo">Tec. en hemoterapia</h4>
                    <p className="parrafo_perfil">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo quia adipisci architecto quo totam magni, similique doloremque neque excepturi, numquam rerum placeat ea consectetur, facilis temporibus eligendi! Magnam, nesciunt.</p>
                </div>
            </div>
        </div>
        </section>
    );
}

export default NosotrosPage;