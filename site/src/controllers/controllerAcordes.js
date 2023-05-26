const { response } = require("express");
var modelAcordes = require("../models/acordesModel");

function cadastrar(req, res) {
    console.log("Entrei no controller dos acordes")

    var acorde = req.body.acordeServer;
    var nomeMusica = req.body.nomeMusicaServer;
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuario;
    var img = req.body.imgServer;
    var desc = req.body.descServer;
    console.log(`${acorde}\n ${nomeMusica} \n ${tempo} \n ${idUsuario}`)

    if (acorde != null && nomeMusica != null && tempo != null) {
        modelAcordes.cadastrarAcorde(acorde, nomeMusica, tempo, idUsuario, desc, img).then(
            async function (resultado) {
                respostas = await resultado
                if (respostas.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    }
}
function consultar(req, res) {
    console.log("Entrei no controller dos acordes")

    modelAcordes.consultarAcorde().then(
        async function (resultado) {
            respostas = await resultado
            if (respostas.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );

}
function musica(req, res) {
    console.log("Entrei no controller dos acordes")

    const idMusica = req.params.idMusica;
    
    modelAcordes.musica(idMusica).then(
        async function (resultado) {
            respostas = await resultado
            if (respostas.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );

}
function comentar(req, res) {
    console.log("Entrei no controller dos acordes")

    var corpo = req.body.corpoServer;
    var titulo = req.body.tituloServer;
    var nota  = req.body.notaServer;
    var idMusica = req.body.idMusicaServer;
    var idUsuario = req.body.idUsuarioServer;
    
    console.log(`${corpo}\n ${titulo} \n ${nota} \n ${idMusica} \n ${idUsuario}`)

    if (corpo != null && titulo != null && nota != null && idMusica != null && idUsuario != null) {
        modelAcordes.comentar(corpo, titulo, nota, idUsuario, idMusica).then(
            async function (resultado) {
                respostas = await resultado
                if (respostas.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    }
}

function consultarComentario(req, res){
    var idMusica = req.params.idMusica
    if(idMusica != null){
        modelAcordes.consultarComentario(idMusica).then(
            async (resp)=>{
                var respostas = await resp
                if (respostas.length > 0) {
                    res.status(200).json(respostas);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
    }
}


module.exports = {
    cadastrar,
    consultar,
    musica,
    comentar,
    consultarComentario
}