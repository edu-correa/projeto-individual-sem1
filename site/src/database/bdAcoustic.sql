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
	tamanho int,
	idUsuario int,
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

create table acorde (
	idAcorde INT AUTO_INCREMENT,
	nomeAcorde varchar(10),
	tempo INT,
	idMusica int,
	criador varchar(90),
	idUsuario int,
	FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
	FOREIGN KEY (idMusica) REFERENCES musica(idMusica),
	PRIMARY KEY (idAcorde)
);