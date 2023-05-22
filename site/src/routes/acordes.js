const express = require("express");
const controllerAcordes = require("../controllers/controllerAcordes") 
var router = express.Router();

router.post("/cadastrar", function (req,res){
    controllerAcordes.cadastrar(req,res)
})

router.get("/consultar", function (req,res){
    controllerAcordes.consultar(req,res)
})  

router.get("/musica/:idMusica", function (req,res){
    controllerAcordes.musica(req,res)
})  

module.exports = router;