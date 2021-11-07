const express = require('express')
const app = express()
const port = 2500
app.use(express.json())

app.listen(port, () => {
  console.log(`Servidor en funcionamiento.`)
})

app.get('/server', function(request, response){
  response.send(`El servidor está corriendo en el puerto N°: ${port}`)
})

app.post('/DatosVerduleria', function(request, response){
  let valFrutas = 0
    for(let index in request.body){
        console.log(`El valor de ${index} es de ${request.body[index].Precio}`);
        if(request.body[index].Tipo == 'Fruta'){
            valFrutas = valFrutas + (request.body[index].Precio * request.body[index].Cantidad)
        }
    }
    response.send(`El valor total de las frutas es de ${valFrutas}`)
})

app.post('/Matriz', function(request, response){
  response.send(`Determinante de la matriz: ${JSON.stringify((request.body[0][0] * request.body[1][1]) - (request.body[0][1] * request.body[1][0]))}`)
})
/* Datos Verduleria:
{
    "Banana":{
        "Tipo":"Fruta",
        "Precio":"12",
        "Cantidad":"2"
    },
    "Lechuga":{
        "Tipo":"Verdura",
        "Precio":"15",
        "Cantidad":"3"
    },
    "Morrón":{
        "Tipo":"Verdura",
        "Precio":"15",
        "Cantidad":"1"
    },
    "Tomate":{
        "Tipo":"Fruta",
        "Precio":"10",
        "Cantidad":"4"
    },
    "Naranja":{
        "Tipo":"Fruta",
        "Precio":"8",
        "Cantidad":"7"
    },
    "Sandía":{
        "Tipo":"Fruta",
        "Precio":"20",
        "Cantidad":"1"
    }
}
*/
/*Matriz:
[
    [-3,2],
    [3,-4]
]
*/