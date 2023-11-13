const express = require('express')

const hbs = require('hbs')
const path = require('path')

const app = express()

const port = 8181


// Contenido estatico del servidor en este caso son las vistas
app.use(express.static('public'))

// El path asigna la ubicacion de los archivos que se le aplicara el hsb
app.set('views', path.join(__dirname+'/public/views'))
// Se usa la ingeneria de vistas de hbs
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


app.get('/', (req, res) =>{
    res.render( 'index3')
})

app.get('/productos', (req, res) =>{
    res.render( 'productos',{
        "nombreProducto":"Arepas",
        "Precio":"3500"
    })
})
app.get('/lista_clientes', (req, res) =>{
    res.render('listarClientes')
})
app.post('/lista_clientes', (req, res) =>{ //nombre ruta
    res.render('listarClientes') //nombre archivo a renderizar con hbs
})

app.get('/lista_ventas', (req, res) =>{
    res.render('listar_ventas')
})
app.post('/lista_ventas', (req, res) =>{
    res.render('listar_ventas')
})

app.get('*', (req, res) =>{
    res.render('404')
})

app.post('*', (req, res) =>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`Listen to port: ${port}`)
})