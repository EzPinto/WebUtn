var express = require("express");
var router = express.Router();
var novedadesModel = require("./../models/novedadesModel");
var cloudinary = require("cloudinary").v2;
var nodemailer = require("nodemailer");

router.get("/novedades", async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedades => {
        if (novedades.img_id) {
        const imagen = cloudinary.url(novedades.img_id, {
            width: 200,
            height: 200,
            crop: "pad"
        });
        return {
            ...novedades,
            imagen
        } 
    } else {
        return {
            ...novedades,
            imagen: ""
        }
      }
  });
    res.json(novedades);
});

router.post("/contacto", async (req,res) => {
    const mail = {
        to: "ezpinto@frba.utn.edu.ar",
        subject: "Contacto Web",
        html: `Se contacto ${req.body.apellido}, ${req.body.nombre} solicitando mas informacion a
        este correo: ${req.body.email} <br> Ademas, dejo el siguiente mensaje ${req.body.mensaje}. <br>
        Su telefono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport ({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); //cierra transport

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: "Mensaje enviado"
    });

}); //cierra post/api




module.exports = router;