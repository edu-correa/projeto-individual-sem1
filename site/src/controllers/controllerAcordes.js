const { response } = require("express");
var modelAcordes = require("../models/acordesModel");

function cadastrar(req, res) {
    console.log("Entrei no controller dos acordes")

    var acorde = req.body.acordeServer;
    var nomeMusica = req.body.nomeMusicaServer;
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuario;
    console.log(`${acorde}\n ${nomeMusica} \n ${tempo} \n ${idUsuario}`)

    if (acorde != null && nomeMusica != null && tempo != null) {
        modelAcordes.cadastrarAcorde(acorde, nomeMusica, tempo, idUsuario).then(
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

module.exports = {
    cadastrar,
    consultar
}