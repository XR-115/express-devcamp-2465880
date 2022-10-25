const sequelize = require('./seq')

//DEPENDENCIA A LA FUNCIÓN PARA CREAR MODELO
const UserModel = require('../models/user')
//DEPENDENCIA DATATYPES
const {DataTypes} = require('sequelize')
//CREAR MODELO
const User = UserModel( sequelize , DataTypes )

const colors = require('colors')

//CREAR FUNCIÓN ASÍNCRONA PARA CONEXIÓN 
const conexion = async() =>{

    try {
        await sequelize.authenticate()
        console.log('Conexión existosa'.bgCyan);
        //SELECCIONAR USUARIOS DISPONIBLES
        
        /*
        const users = await User.findAll()
        console.log(users);

        //CREAR USUARIO
        const alfredo = await User.create({ name: "Alfredo Jasmín", email: "ola@misena.edu.co"});
        console.log(`${alfredo.name} su id es: `, alfredo.id);
        console.log("Creando a: ", alfredo.name);
        */

    } catch (error) {
        console.error('la conexión ha fallado'.error);
    }
    
}

//EJECUTAR FUNCIÓN 
module.exports = conexion()