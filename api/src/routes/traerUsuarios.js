const { User } = require("../db")

const traer = async (req, res) => {
    try {
        let all = await findAll(User)
        res.json(all)
    } catch (error) {
        console.log(error, "ocurrio un error con el llamado a la base de datos")
    }

}

module.exports = {
    traer,
}