//objeto de conexión
const sequelize = require('../config/seq')
//DATATYPES
const {DataTypes, ValidationError } = require('sequelize')
//MODELO
const UserModel = require('../models/user')
//CREAR OBJ USUARIO
const User = UserModel(sequelize, DataTypes)

//----------------------------- CREAR RUTAS (ENDPOINT, URI) PARA LOS USUARIOS -----------------------------//
exports.getAllUsers =async(req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "succes"  : true,
                "data" : users,
                "message" : `Aquí se ven todos los usuarios`
            }
        )
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//----------------------------- OBTENER RECUERSO POR ID -----------------------------//
exports.getSingleUser = async(req, res)=>{
    try {
        const usuarios = await User.findByPk(req.params.id);
        //SI USUARIO NO EXISTE
        if (!usuarios) {
            res.status(422).json(
                {   
                    "succes"  : false,
                    "errores"    : [
                        "Usuario no existe"
                    ],
                }
            )     
        }
        else{
        res.status(200).json(
        {   
            "succes"  : true,
            "data"    : usuarios,
            "message" : `Aquí se muestra un USUARIO cuyo id es ${req.params.id}`
        }
    )
        }
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
    
}

//----------------------------- POST: CREAR --------------------------//
exports.postUser = async(req, res)=>{
    try {
        // Create a new user
        const newUser = await User.create(req.body);
        res.status(201).json({
            "success" : true,
            "data"    : req.body,
            "message" : "aquí crearemos un USUARIO"
        })
    } catch (error) {
        //LLEVAR OBJETO DE LOS ERRORES
        if (error instanceof ValidationError ) {
            //VARIABLE QUE LLEVA MENSAJES DE ERROR
            const errores = error.errors.map((e)=> e.message )
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": errores
                })
        }else{
            //errores de servidor
            res
                .status(500)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}

//----------------------------- PUT O PATCH PARA ACTUALIZAR -----------------------------//
exports.putUser = async(req , res)=>{
    try {
        //CONSTULTAR DATOS ACTUALIZADOS
        const upUser = await User.findByPk(req.params.id)

        if (!upUser) {
            //RESPUESTA DE ERROR PARA USUARIO NO ENCONTRADO
            res.status(422).json(
                {   
                    "succes"  : false,
                    "errores"    : [
                        "Usuario no existe"
                    ],
                }
            )    
        }else{
            //actualizar usuario por id
            await User.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  userAct
            })
       }
    } catch (error) {
         
          //errores de servidor
          res
          .status(500)
          .json({
              "success": false,
              "errors": "error de servidor"
          })
    }
    
}

//-----------------------------DELETE PARA BORRAR UN USUARIO-----------------------------//
exports.deleteUser = async(req,res)=>{

    const deleteUser = await User.findByPk(req.params.id)
    await User.destroy({
        where: {
          id: req.params.id
        }
      })

    //CONSTULTAR DATOS ELIMINADO
   
    res.status(200).json(
        {   
            "succes" : true,
            "data"   : deleteUser,
            "message": deleteUser.name
        }
    )
}