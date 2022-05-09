import { useState } from 'react';
import axios from "axios";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage  = (props) => {
    
    const initialForm = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        mensaje: ""
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState("");
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg("");
        setSending(true)
        const response = await axios.post(`http://localhost:3000/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder">
            <div className="columna contacto left">
                <h2>Complete el siguiente formulario</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Apellido</label>
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}


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


/* import emailjs from "emailjs-com";

export const ContactoPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('EzPinto250719', 'template_1f5nghr', form.current, '3O9R43pWfB4_sUiQ6')
      .then((result) => {
        alert("Hemos recibido su consulta. Nos comunicaremos a la brevedad")
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
      <main className="holder">
            <div className="columna contacto left">
                <h2>Complete el siguiente formulario</h2>
                <form ref={form} onSubmit={sendEmail} action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" id='nombre' />
                    </p>
                    <p>
                        <label>Apellido</label>
                        <input type="text" name="apellido" id='apelldio' />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" id='email'/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" id='telefono' />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" id='mensaje'></textarea>
                    </p>
                    <p className="centrar">
                        <button  class="btn" type="submit" value="Enviar">Enviar</button>
                    </p>
                </form>
            </div>
            <div className="columna right">
            <h2 className="decorado">Otras vias de contacto</h2>
            <p>Tambien se pueden comunicar con nosotros:</p>
            <ul>
                <li>Telefono: 11-2400-****</li>
                <li>Email: eze*****@gmail.com</li>
                <li>Instagram:</li>
            </ul>
        </div>
        </main>
  );
};

export default ContactoPage; */