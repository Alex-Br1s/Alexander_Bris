let favoritos = []

const postFav = (req, res) => {
    const fav = req.body
    favoritos.push(fav)
    return res.json(favoritos)
}

let deleteFav = (req, res) => {
    let {id} = req.params
    charactersFav = favoritos.filter(index => index.id !== id)
    return res.json(charactersFav)
}

module.exports = {postFav, deleteFav}