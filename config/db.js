const sequelize = require('./seq')
const colors = require('colors')





//CREAR FUNCIÓN ASÍNCRONA PARA CONEXIÓN 
const conexion = async() =>{

    try {
        await sequelize.authenticate()
        console.log('Conexión existosa'.bgCyan);
  

    } catch (error) {
        console.error('la conexión ha fallado'.error);
    }
    
}

//EJECUTAR FUNCIÓN 
module.exports = conexion()