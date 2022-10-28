const express = require('express')
const color = require('colors')
const { getAllUsers, 
        getSingleUser,
        postUser,
        putUser,
        deleteUser    
    } = require('../controllers/UserController')
const router = express.Router()

//ESTABLECER RUTAS PARA LOS USUARIOS

router.route('/')
            .get(getAllUsers)
            .post(postUser)
router.route('/:id')
            .get(getSingleUser)
            .put(putUser)
            .delete(deleteUser)

module.exports = router