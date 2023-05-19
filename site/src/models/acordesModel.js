var database = require("../database/config")

function cadastrarAcorde(acorde, nomeMusica, tempo, idUsuario){
    console.log(acorde + "\n" + nomeMusica + "\n" + tempo + "\n" + idUsuario);
    var instrucao = `
        INSERT INTO musica VALUES (null, "${nomeMusica}", ${idUsuario}, "${acorde}", '${tempo}')
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrarAcorde
}


function consultarAcorde(){
    console.log("vou consultar");
    var instrucao = `
        SELECT * FROM  musica;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrarAcorde
}