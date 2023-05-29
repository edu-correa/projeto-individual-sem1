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
router.post("/comentar", (req, res) => {
    controllerAcordes.comentar(req, res);
})
router.get("/consultarComentario/:idMusica", (req, res) => {
    controllerAcordes.consultarComentario(req,res)
})
router.get("/consultarMusicasUser/:idUsuario", (req, res) => {
    controllerAcordes.consultarMusicasUser(req,res)
})
router.get("/consultarNota/:idUsuario/:idMusica", (req, res) => {
    controllerAcordes.consultarNota(req, res);
})
module.exports = router;