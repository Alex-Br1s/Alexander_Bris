const express = require('express')
//const {getCharById, login, postFav, deleteFav} =  express.Router() nose si funcionara
const rutas = express.Router()
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handleFavorites')


rutas.get('/character/:id', (req, res) =>{
   getCharById(req, res);
});

rutas.get('/login', (req, res) =>{
   login(req, res);
});

rutas.post('/fav', (req, res) =>{
   postFav(req, res);
});

rutas.delete('/fav/:id', (req, res) =>{
    deleteFav(req, res);
});

module.exports = rutas