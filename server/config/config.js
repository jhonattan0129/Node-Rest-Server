//puerto
process.env.PORT = process.env.PORT || 3000

//Entorno 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

process.env.SEMILLA = process.env.SEMILLA || "secret"

//Base de datos, Local o en la Nube
let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URL
}



process.env.URLDB = urlDB