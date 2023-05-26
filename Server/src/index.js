const express = require('express')
//const { routes } = require('./routes')
const server = express()
const PORT = 3001
const routes = require('./routes/index')
const servidor = require('./app')
server.use(express.json()); 

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use('/rickandmorty', routes)

server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT)

})





























































/* const http = require('http')
//const data = require('./utils/data');
const {getCharById} = require('./controllers/getCharById')
/* const { stringify } = require('querystring');
const { write } = require('fs'); */

/* http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split('/').pop()
        getCharById(res, Number(id))
        
        const characters = data.find((character)=> character.id === Number(id))

        if(characters){
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify(characters))
        }
        else{
            res.writeHead(404, {'Content-type': 'text/plain'})
            res.end('Hubo un error, personaje no encontrado')
        } 
    } 
}).listen(3001, 'localhost') */