const express = require('express')
const app = express()
const port = 2500
let cantFrutas = 0;

app.get('/server', (request, response) => {
  response.send(`El servidor está corriendo en el puerto N°: ${port}`)
})

app.post('/alimentos', (request, response) =>
    response.send(cantFrutas)
)

app.listen(port, () => {
  console.log(`Servidor en funcionamiento.`)
})