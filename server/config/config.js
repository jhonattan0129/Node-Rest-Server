//puerto
process.env.PORT = process.env.PORT || 3000

//Entorno 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//Base de datos, Local o en la Nube
let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://jrpm0129:bLIVXIwSslIeLd5C@cafe-6cctx.mongodb.net/test?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB