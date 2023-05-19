var database = require("../database/config")

function cadastrarAcorde(acorde, nomeMusica, tempo, idUsuario, desc, img){
    console.log(acorde + "\n" + nomeMusica + "\n" + tempo + "\n" + idUsuario);
    var instrucao = `
        INSERT INTO musica VALUES (null, "${nomeMusica}", ${idUsuario}, "${acorde}", '${tempo}', '${desc}', '${img}')
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
    cadastrarAcorde,
    consultarAcorde
}