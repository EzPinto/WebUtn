var pool = require('./bd'); //llamando BD

async function getNovedades() {
        var query = 'select * from news order by id desc';
        var rows = await pool.query(query);
        return rows;
    } // cierra funcion

async function insertNovedad(obj) {
    try {
        var query = "insert into news set ? ";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    } // cierra catch
} // cierra funcion



module.exports= { getNovedades, insertNovedad }