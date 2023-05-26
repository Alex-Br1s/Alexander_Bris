const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

/* const getCharById = (req, res) => {
  const { id } = req.params;
  const urlId = `${URL}${id}`;
  axios
    .get(urlId)
    .then((response) => {
      const character = response.data;

      if (character) {
        const { id, status, name, species, origin, image, gender } = character;
        const result = { id, status, name, species, origin, image, gender };
        res.json(result);
      } else {
        res.status(404).send("Not fount");
      }
    })
    .catch((reject) => {
      console.log(reject);
      const error = "Surgio un error inesperado";
      res.status(500).json(error);
    });
};
 */

const getCharById = async (req, res) =>{
  const {id} = req.params
  const urlId = `${URL}${id}`;
  try {
  const response = await axios(urlId)
  const character = response.data

  if(character){
    const { id, status, name, species, origin, image, gender } = character;
    const result = { id, status, name, species, origin, image, gender };
    res.json(result);
  }else{
    res.status(404).send('Not found')
  }

  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = getCharById;

//const { response } = require('express');
/* const axios = require('axios')

const getCharById = (res, id) =>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({name, gender, origin, status, image, species}) =>{
        const character = {
            id,
            name,
            gender,
            origin,
            image,
            status,
            species
        }
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(character))
    })
    .catch((error) => res.writeHead(500, {'Content-Type': 'text/plain'})
    .end(error.message))
}

module.exports = {
    getCharById
} */
