const express = require('express')

const router = express.Router()

//ESTABLECER RUTAS PARA LOS USUARIOS

//RUTA DE PRUEBA

//----------------------------- CREAR RUTAS (ENDPOINT, URI) PARA LOS USUARIOS -----------------------------//
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "MESSAGE" : "bIENVENIDO USUARIO"
        }
    )
})


//----------------------------- OBTENER RECUERSO POR ID -----------------------------//
router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aquí se muestra un USUARIO cuyo id es ${req.params.id}`
        }
    )
})


//----------------------------- POST: CREAR --------------------------//
router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "aquí crearemos un USUARIO"
    })
})


//----------------------------- PUT O PATCH PARA ACTUALIZAR -----------------------------//
router.put('/:id', (req , res)=>{
    res.status(200).json(
        {
            "message": `Actualizar usuario: ${req.params.id}`
        }
    )
})


//-----------------------------DELETE PARA BORRAR UN USUARIO-----------------------------//
router.delete('/:id', (req,res)=>{
    res.status(200).json(
        {
            "message": `Se va a borrar el USUARIO ${req.params.id}`
        }
    )
})

module.exports = router