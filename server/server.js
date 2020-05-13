require('./config/config')
const express = require('express')
const mongoose = require('mongoose');
const app = express()



const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//Configuración global de rutas
app.use(require('./rutas/index'))

// parse application/x-www-form-urlencoded


// parse application/json
app.use(bodyParser.json())


//conexion de BD
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) {
            throw err
        }
        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log("Escuchando en puerto", process.env.PORT)
})