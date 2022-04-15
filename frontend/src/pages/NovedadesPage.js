import React from "react";
import "../styles/components/pages/NovedadesPage.css";

const NovedadesPage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/imghome.jpg" alt="imagenHome" />
            </div>
            <div className="columnas">
            <div className="bienvenidos left">
                <h2 className="decorado">Bienvenidos</h2>
                <p>Esta es una pagina, para la concientizacion sobre la importancia
                    de la <strong>Donacion de Sangre</strong>. 
                </p>
                <p>Aquí van a poder encontrar información sobre el procedimiento de la extracción, 
                    los cuidados pre y post donacón, y los medios de contacto para hablar con cualquiera de los
                    profesionales en el area, para poder aclarar sus dudas y ayudarlos a ayudar.
                </p>
                                    
            </div>
            <div className="testimonios right">
                <h2 className="decorado size">
                    Tengan en cuenta:
                </h2>
                <div className="testimonio">
                    <p>El acceso a la sangre es un derecho, y la donacion es el unico
                        metodo de obtencion..
                    </p>
                </div>
            </div>
            </div>
        </main>
    );
}

export default NovedadesPage;