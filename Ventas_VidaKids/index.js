const express = require('express')
const path = require('path')//TRABAJAR CON RUTAS
const hbs = require('hbs')// INCORPORAR MOTOR CON PLANTILLAS

const app = express()

const port = 8787

//SERVIDOR DE CONTENIDO ESTATICO
app.use(express.static('public'))

//INGIENERIA DE LAS VISTAS: HBS
//ASIGNAR LA UBICACION DE LOS ARCHIVOS HBS

app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//CONFIGURACION DEL DIRECTORIO QUE GUARDARA LOS ARCHIVOS PARTIALS HBS
hbs.registerPartials(__dirname+'/public/views/partials')

app.get('/', (req, res) => {
    res.render('index', {
        "nombre": "Sebastian Castaño",
        "email": "sebas.czr@gmail.com"
    })//REDIRECCIONAR HACIA EL ARCHIVO HBS
})

app.get('/productos', (req, res) => {
    res.render('productos')//REDIRECCIONAR HACIA EL ARCHIVO HBS
})

app.get('/contacto', (req, res) => {
    res.render('contacto')//REDIRECCIONAR HACIA EL ARCHIVO HBS
})

app.listen(port, () => {
    console.log(`Listen to port: ${port}`)
})