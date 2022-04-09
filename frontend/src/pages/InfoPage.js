import React from "react";
import "../styles/components/pages/InfoPage.css";

const InfoPage = (props) => {
    return (
        <section className="holder">
            <h2 className="decorado titulo1">Informacion y Consejos</h2>
        <div className="info">
            <div className="procedimiento">
                <h3 className="titulo2">Procedimiento</h3>
                <p className="parrafo">El procedimiento de la donacion de sangre, es sencillo, rapido y no duele.<br/>
                Y se divide en 4 etapas:</p>
                <ul>
                    <li>
                        <h3 className="decorado subtitulo">La recepcion del donante:</h3>
                        <p className="parrafo">En esta etapa se recepciona al donante y se le entrega un formulario con
                            información para que
                            lea y complete con total sicenridad, ya que luego se lo entregará a quien lo entreviste.
                        </p>
                    </li>
                    <li>
                        <h3 className="decorado subtitulo">La entrevista:</h3>
                        <p className="parrafo">Una vez completado el formulario; se lo llamará a una entrevista, aquí
                            entregará el
                            formulario y se le realizara un chequeo medico, para verificar que esta apto para donar
                            fisicamente, y se realizaran unas preguntas adicionales confidenciales,
                            ya que uno de los puntos mas importantes en la donacion de sangre es la sinceridad del
                            donante para evitar poner en riesgo la vida de quienes recibiran la sangre o cualquier
                            derivado.
                        </p>
                    </li>
                    <li>
                        <h3 className="decorado subtitulo">Donacion:</h3>
                        <p className="parrafo">Una vez pasadas las dos etapas anteriores; quiere decir que usted esta apto
                            para donar y aqui
                            comienza el proceso. <br/>
                            El proceso en sí, es rapido ya que el tiempo promedio de una donacion son entre 5 y 10
                            minutos. Una vez ingresa en la sala de donacion, se corroborara su identidad y lo invitaran
                            a que se siente en un sillon. Luego se utilizará una bolsa de recoleccion (segun el servicio
                            a donde usted haya ido, pueden ser distintos los modelos de bolsas), esta se abrirá en su
                            presencia
                            para demostrar que vienen esterilizadas y selladas, se revisaran ambos antebrazos en
                            busca de una vena apta para la puncion; se procede a realizar una asepsia del sitio de
                            puncion con una solucion de Yodo y luego con Alcohol, y se realiza la puncion. <br/>
                            En este punto usted ya esta donando sangre, la cantidad que se extrae son aproximadamente
                            450ml, lo que equivale a una botella de agua chica; y de estos 450ml luego se separan en
                            distintos componentes:
                            Globulos Rojos, Plasma, Plaquetas y en algunos servicios Crioprecipitados; cada uno de estos
                            componentes puede ser destinado
                            a distintas personas que los necesiten, por eso al donar sangre con tan solo 15 minutos de
                            tu tiempo; podes ayudar a salvar <strong>mas </strong>
                            de una vida.
                        </p>
                    </li>
                    <li>
                        <h3 className="decorado subtitulo">Post-Donacion:</h3>
                        <p className="parrafo">Una vez finalizado el proceso de extraccion; quedan los cuidados post
                            donacion. En esta etapa una vez extraida la aguja; se le entrega
                            una ficha de Autoexclusion, la cual es muy importante ya que si esta ficha no esta completa
                            la unidad de sangre no se podra utilizar,
                            tambien se le entrega un voucher para que desayune nuevamente, se le informan las 
                            <a className="parrafo-recomendacion" href="#recomendaciones">recomendaciones</a> para el dia y
                            si lo requiere se le brinda el
                            certificado para el trabajo.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="info-importante">
                <h3 className="titulo2">Informacion Importante</h3>
                <div className="contenido-info">
                    <div className="">
                          <h3 className="decorado subtitulo">Periodo de Ventana</h3>
                         <p className="parrafo-info-imp">Existe un período variable entre el ingreso del agente infeccioso al
                           organismo y la posibilidad de detectarlo mediante un estudio. Pero la infección igual puede ser
                             transmitida al receptor. A este periodo se lo denomina "período ventana". <br/>
                             Cada enfermedad tiene un período ventana diferente que puede variar entre algunos días hasta
                             algunos meses. <br/>
                             Por eso, si sos donante de sangre, es importante que en la entrevista previa a la donación,
                             informes al personal de salud cualquier situación de posible riesgo que hayas podido tener en
                             relación a alguna de estas infecciones.
                         </p>
                    </div>

                    <div className="">
                        <h3 className="decorado subtitulo">Vacunas Covid-19</h3>
                        <div className="info-vacunas">
                        <p className="parrafo-info-imp">Si te vacunaste recientemente contra el Covid-19, para poder donar sangre tenes que esperar un tiempo que varia segun la vacuna que te hayan puesto. <br/>
                            <br/>
                            El tiempo de espera para cada vacuna es el siguiente:
                        </p>
                        <table >
                         <tbody>
                            <tr className="vacuna">
                                <td>Vacunas</td>
                                <td>Tiempo</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Moderna</td>
                                <td>1 Semana</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Sputmik-V</td>
                                <td>4 Semanas</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Oxford-AstraZeneca</td>
                                <td>4 Semanas</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Coronavac</td>
                                <td>4 Semanas</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Sinopharm</td>
                                <td>4 Semanas</td>
                            </tr>
                            <tr className="vacuna">
                                <td>Covaxin</td>
                                <td>4 Semanas</td>
                            </tr>
                         </tbody>
                        </table>
                        </div>
                                
                    </div>
                </div>
            </div>

            <div className="requisitos">
                <img className="requisitos" src="images/img5.jpg" alt="Requisitos"/>
            </div>
            <div className="recomendaciones" id="recomendaciones">
                <h3 className="titulo2">Recomendaciones</h3>
                <p className="parrafo">Las recomendaciones para el dia, luego de una donacion de sangre son:</p>
                <ul className="parrafo">
                    <li>Beber abundande liquido. (Agua, bebidas isotonicas, jugos, etc)</li>
                    <li>No hacer esfuerzos, ni cargar peso con el brazo para evitar hematomas.</li>
                    <li>No realizar tareas de alto riesgo, ni ejercicios de alto impacto.</li>
                    <li>No hacer cambios bruscos de posicion.</li>
                    <li>Ante sensacion de mareo, sentarte lentamente o recostarte y levantar ligeramente las piernas
                    </li>
                    <li>No beber alcohol dentro de las 6 Hs post-donacion.</li>
                    <li>No fumar, por lo menos las primeras dos horas.</li>
                    <li>En caso de sentir algun malestar, (fiebre, diarrea, vomitos, gripe, etc) <br/>
                        informar al centro donde realizaste la donacion.
                    </li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default InfoPage;