const express = require('express'); // Se requiere el modulo instalado de EXPRESS y se la atribuye a una variable constante
const mongoose = require("mongoose");
require('dotenv').config();


const userRoutes = require("./routes/users")


const app = express(); // se ejecuta express y se retorna el objeto de la aplicacion
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',userRoutes);

//rutas
app.get("/",(req,res)=>{
    res.send("Welcome to my API")
})

//mongodb conexion
mongoose.connect(
    process.env.mongoDB_uri
).then(()=> console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error))


app.listen(port, () => console.log('server listen in',port))