const express = require('express')
let Clientes = [
    {
        "id_Cliente": 1111,
        "nombre_Cliente": "Carmen",
        "apellido_Cliente": "Moreno",
        "correo_Cliente": "sebas@gmail.com",
        "contrasena_Cliente": "Sder1235*0",
        "fechaNac_Cliente": "01/22/2020"
    },
    {
        "id_Cliente": 4444,
        "nombre_Cliente": "sebas",
        "apellido_Cliente": "casta",
        "correo_Cliente": "estrin@gmail.com",
        "contrasena_Cliente": "Sder1235*0",
        "fechaNac_Cliente": "01/04/89"
    },
]

class Server{
    
    constructor(){
        this.app=express()
        this.port= process.env.PORT
        this.routes()
    }


    //la escucha o el servidor
    listen(){
        this.app.listen(
            this.port, () =>{
                console.log('Escuchando por el puerto'+this.port)

            } 
        )
    }


routes(){
    this.app.get('/', (req, res) => {
        res.json({
            msg:Clientes
        })
    }
    )
    //NUNCA RECIBIO EL POST MAN LA REQUEST
        this.app.get('/consultarCliente',(req,res)=>{
            const{id_Cliente,nombre_Cliente}=req.query//Recibir Parametros
            let resultado = ''
            //buscar el documento
            resultado=Clientes.find(cliente=> cliente.id_Cliente === parseInt(id_Cliente))
            
        res.json({
            msg:resultado
        })
    })

    this.app.post('/crearCliente',(req,res)=>{
        const{id_Cliente,nombre_Cliente,apellido_Cliente}=req.query
        Clientes.push({
            "id_Cliente":id_Cliente,
            "nombre_Cliente":nombre_Cliente,
            "apellido_Cliente":apellido_Cliente
        })
        res.json({
            msg:Clientes
        })
    })
}
}


module.exports = {Server} //exportacion de la clase