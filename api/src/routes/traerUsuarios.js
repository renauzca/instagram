const {User} = require("../db")

const traer = async(req,res)=>{
    let all = await findAll(User)
    res.json(all)
}

module.exports= {
    traer,
}