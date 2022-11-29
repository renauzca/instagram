const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/user",async(req,res)=>{
    let x = console.log("funciona")
    res.send(x)
})

module.exports = router;
