CREATE DATABASE acoustic;

USE acoustic;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(50),
	emailUsuario VARCHAR(50),
	senhaUsuario VARCHAR(50),
	imagemUsuario varchar(300)
);
CREATE TABLE celular(
	idCelular int primary key auto_increment,
    celular char(9),
    fkUsuario int,
    FOREIGN KEY (fkUsuario) references usuario(idUsuario)
);


create table musica (
	idMusica INT PRIMARY KEY AUTO_INCREMENT,
	nomeMusica VARCHAR(90),
	idUsuario int,
	acordes varchar(300),
	tempo varchar(300),
    descricao varchar(300),
    img varchar(300),
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);
CREATE TABLE comentario(
	idComentario int PRIMARY KEY AUTO_INCREMENT,
	titulo varchar(80),
	corpo varchar(80),
	nota decimal(3,1),
	idUsuario int,
	idMusica INT,
	FOREIGN KEY (idMusica) REFERENCES musica(idMusica),
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);


 SELECT * FROM usuario WHERE emailUsuario = 'edu@gmail.com' and senhaUsuario = 123;