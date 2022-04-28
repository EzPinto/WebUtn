var pool = require('./bd'); //llamando BD

// Traer novedades
async function getNovedades() {
        var query = 'select * from news order by id desc';
        var rows = await pool.query(query);
        return rows;
    } // cierra funcion


// Agregar Novedades
async function insertNovedad(obj) {
    try {
        var query = "insert into news set ? ";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    } // cierra catch
} // cierra add


// Eliminar Novedades
async function deleteNovedadById(id) {
    var query = "delete from news where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
} // cierra delete

//Modificar Novedades
async function getNovedadById(id) {
    var query = "select * from news where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query = "update news set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    } // cierra catch
} // cierra edit


module.exports= { getNovedades, insertNovedad, deleteNovedadById,
getNovedadById, modificarNovedadById }