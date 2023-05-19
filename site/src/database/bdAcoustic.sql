CREATE DATABASE acoustic;

USE acoustic;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(50),
	emailUsuario VARCHAR(50),
	senhaUsuario VARCHAR(50)
);


create table musica (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	idMusica INT PRIMARY KEY AUTO_INCREMENT,
	nomeMusica VARCHAR(90),
	idUsuario int,
	acordes varchar(300),
	tempo varchar(300),
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);