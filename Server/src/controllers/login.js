const users = require('../utils/users')


const login = (req, res) =>{
    let {email, password} = req.query

    const validation = users.find(user => user.email === email && user.password === password)
    if(validation){
        res.status(200).json({access:true})
    }else{
        res.status(404).json({access:false})
    }
}

module.exports = login