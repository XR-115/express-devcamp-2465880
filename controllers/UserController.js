//objeto de conexión
const sequelize = require('../config/seq')
//DATATYPES
const {DataTypes} = require('sequelize')
//MODELO
const UserModel = require('../models/user')
//CREAR OBJ USUARIO
const User = UserModel(sequelize, DataTypes)

//----------------------------- CREAR RUTAS (ENDPOINT, URI) PARA LOS USUARIOS -----------------------------//
exports.getAllUsers =async(req, res)=>{

const users = await User.findAll();
    res.status(200).json(
        {
            "succes"  : true,
            "data" : users,
            "message" : `Aquí se ven todos los usuarios`
        }
    )
}

//----------------------------- OBTENER RECUERSO POR ID -----------------------------//
exports.getSingleUser = async(req, res)=>{

    const usuarios = await User.findByPk(req.params.id);
    res.status(200).json(
        {   
            "succes"  : true,
            "data"    : usuarios,
            "message" : `Aquí se muestra un USUARIO cuyo id es ${req.params.id}`
        }
    )
}

//----------------------------- POST: CREAR --------------------------//
exports.postUser = async(req, res)=>{
    // Create a new user
    const newUser = await User.create(req.body);
    res.status(201).json({
        "success" : true,
        "data"    : req.body,
        "message" : "aquí crearemos un USUARIO"
    })
}

//----------------------------- PUT O PATCH PARA ACTUALIZAR -----------------------------//
exports.putUser = async(req , res)=>{
    //ACTUALIZAR USUARIOS POR ID
    await User.update(req.body,{
        where: {
            id: req.params.id
        }
    })

    //CONSTULTAR DATOS ACTUALIZADOS
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "succes" : true,
            "data" : upUser,
            "message": `Actualizar usuario: ${req.params.id}`
        }
    )
}

//-----------------------------DELETE PARA BORRAR UN USUARIO-----------------------------//
exports.deleteUser = async(req,res)=>{

    const deleteUser=await User.destroy({
        where: {
          id: req.params.id
        }
      })

    //CONSTULTAR DATOS ELIMINADO
   
    res.status(200).json(
        {   
            "succes" : true,
            "data"   : deleteUser,
            "message": `Se va a borrar el USUARIO ${req.params.id}`
        }
    )
}