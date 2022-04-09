import React from "react";
import "../styles/components/pages/ContactoPage.css"; 

const ContactoPage  = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto left">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna right">
            <h2 className="decorado">Otras vias de contacto</h2>
            <p>Tambien sepueden comunicar con nosotros:</p>
            <ul>
                <li>Telefono: 11-2400-****</li>
                <li>Email: eze*****@gmail.com</li>
                <li>Instagram:</li>
            </ul>
        </div>
        </main>
    );
}

export default ContactoPage;