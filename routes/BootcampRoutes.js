const express = require('express')

const router = express.Router()

//ESTABLECER LAS RUTAS DEL BOOTCAMP

//CREAR RUTA DE PRUEBA



//CREAR RUTAS (ENDPOINT, URI) PARA LOS BOOTCAMPS
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "MESSAGE" : "Oliwis"
        }
    )
})


//OBTENER RECUERSO POR ID
router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aquí se muestra un bootcamp cuyo id es ${req.params.id}`
        }
    )
})


//POST: CREAR
router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "aquí crearemos un bootcamp"
    })
})


//PUT O PATCH PARA ACTUALIZAR UWU
router.put('/:id', (req , res)=>{
    res.status(200).json(
        {
            "message": `pero boludo tamo actualizando el: ${req.params.id}`
        }
    )
})


//DELETE PARA BORRAR UN BOOTCAMP
router.delete('/:id', (req,res)=>{
    res.status(200).json(
        {
            "message": `Se va a borrar el bootcamp ${req.params.id}`
        }
    )
})


module.exports = router