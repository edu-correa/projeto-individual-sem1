const express = require("express");
const controllerAcordes = require("../controllers/controllerAcordes") 
var router = express.Router();

router.post("/cadastrar", function (req,res){
    controllerAcordes.cadastrar(req,res)
})

module.exports = router;