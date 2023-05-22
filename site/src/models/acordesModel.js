var database = require("../database/config")

function cadastrarAcorde(acorde, nomeMusica, tempo, idUsuario, desc, img){
    console.log(acorde + "\n" + nomeMusica + "\n" + tempo + "\n" + idUsuario);
    var instrucao = `
        INSERT INTO musica VALUES (null, "${nomeMusica}", ${idUsuario}, "${acorde}", '${tempo}', '${desc}', '${img}')
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

function consultarAcorde(){
    console.log("vou consultar");
    var instrucao = `
        SELECT * FROM  musica;
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}

function musica(idMusica){
    console.log("vou consultar");
    var instrucao = `
        SELECT * FROM  musica WHERE idMusica = ${idMusica};
    `;
    console.log(instrucao);
    return database.executar(instrucao);
}
musica
module.exports = {
    cadastrarAcorde,
    consultarAcorde,
    musica
}