//INSTALAR DEPENDENCIAS
//-NODEMON, SEQUILIZE, SEQUILIZE-CLIE, MYSQL2

//INICIAR SEQUELIZE: npx sequelize-cli init

//CREAR TABLA: npx sequelize model:generate --name User --attributes name:string,email:string,password:string

//INICIAR LA MIGRACION npx sequelize db:migrate

//REVERTIR npx sequelize db:migrate:undo

const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listenEndpoints = require('express-list-endpoints')



const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/userRoutes')
const ReviewsRoutes = require('./routes/ReviewsRoutes')
const ReviewsCourses = require('./routes/Courses')
//DEPENDENCIA A CONEXIÓN DB

const connectDB = require('./config/db')


//ESTABLECER ARCHIVO DE CONFIGURACIÓN 
//CON VARIABLES DE ENTORNO
dotenv.config({
    path: './config_env/config.env'
})


//CREAR OBJETO APLICACIÓN 
const app = express()
app.use(express.json())
//EJECUTAR LA CONEXIÓN A DB
// connectDB() 
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users' , userRoutes)
app.use('/api/v1/reviews' , ReviewsRoutes)
app.use('/api/v1/courses' , ReviewsCourses)

console.log(listenEndpoints(app));
//EJECURAR SERVIDOR DE DESARROLLO DE EXPRESS

app.listen(process.env.PORT, ()=>{
    console.log(`Iniciando servidor en el puerto: ${process.env.PORT}`.bgWhite);
})