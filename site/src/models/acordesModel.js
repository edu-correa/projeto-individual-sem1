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
function comentar(corpo, titulo, nota, idUsuario, idMusica){
    console.log("vou comentar");
    var instrucao = `
        INSERT INTO comentario(idComentario, titulo, corpo, nota, idUsuario, idMusica) VALUES(null, '${titulo}', '${corpo}', ${nota}, ${idUsuario}, ${idMusica});
    `;
    console.log(instrucao);
    return database.executar(instrucao);

}
function consultarComentario(idMusica){
    console.log("buscando comentários")
    var instrucao = `
        SELECT * FROM comentario 
        JOIN usuario ON comentario.idUsuario = usuario.idUsuario
        WHERE idMusica = ${idMusica};
    `;
    return database.executar(instrucao);
}
function consultarMusicasUser(idUsuario){
    console.log("buscando musicas")
    var instrucao = `
        SELECT * FROM musica 
        WHERE idUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}
function consultarNota(idUsuario, idMusica){
    var instrucao = `
    SELECT (SELECT count(nota) FROM comentario JOIN musica ON comentario.idMusica = musica.idMusica WHERE musica.idUsuario = ${idUsuario} and nota = 1 and comentario.idMusica = ${idMusica}) as nota1,
    (SELECT count(nota) FROM comentario JOIN musica ON comentario.idMusica = musica.idMusica WHERE musica.idUsuario = ${idUsuario} and nota = 2 and comentario.idMusica = ${idMusica}) as nota2,
    (SELECT count(nota) FROM comentario JOIN musica ON comentario.idMusica = musica.idMusica WHERE musica.idUsuario = ${idUsuario} and nota = 3 and comentario.idMusica = ${idMusica}) as nota3,
    (SELECT count(nota) FROM comentario JOIN musica ON comentario.idMusica = musica.idMusica WHERE musica.idUsuario = ${idUsuario} and nota = 4 and comentario.idMusica = ${idMusica}) as nota4,
    (SELECT count(nota) FROM comentario JOIN musica ON comentario.idMusica = musica.idMusica WHERE musica.idUsuario = ${idUsuario} and nota = 5 and comentario.idMusica = ${idMusica}) as nota5;
    `;
    return database.executar(instrucao);
}
module.exports = {
    cadastrarAcorde,
    consultarAcorde,
    musica,
    comentar,
    consultarComentario,
    consultarMusicasUser,
    consultarNota
}