const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const bootcampRoutes = require('./routes/BootcampRoutes')

//ESTABLECER ARCHIVO DE CONFIGURACIÓN 
//CON VARIABLES DE ENTORNO
dotenv.config({
    path: './config_env/config.env'
})


//CREAR OBJETO APLICACIÓN 
const app = express()

app.use('/api/v1/bootcamps', bootcampRoutes)



//EJECURAR SERVIDOR DE DESARROLLO DE EXPRESS

app.listen(process.env.PORT, ()=>{
    console.log(`Iniciando servidor en el puerto: ${process.env.PORT}`.bgWhite);
})