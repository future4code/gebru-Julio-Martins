# Aula de Relação SQL

### Exercício 1
###### a)
Chave estrangeira é um tipo de restrição/característica que podem ser atribuídos a colunas no MySQL para permitir o relacionamento entre tabelas diferentes. Para isso a chave estrangeira de uma tabela faz uma referência a uma chave primária de outra tabela.

###### b)
~~~SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("a",
"Esse filme é a cópia daquele outro filme com Lindsay Lohan: Sexta Feira Muito Louca",
4.9,
"001"),
("b",
"Só assisti pq tem Fernanda Montenegro",
8.4,
"002"),
("c",
"Melhor filme que esse país já produziu",
10,
"004");
~~~

###### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`gebru-4211891-julio-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec

Ou seja, como movie_id possui a restrição de FOREIGN KEY, é necessário que o valor passado para essa coluna exista entre os id's na tabela de Movies. Caso contrário, não será possível inserir uma nova linha à tabela de Rating.

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("d",
"Não gostei",
3,
"010");
~~~

###### d)
~~~SQL
ALTER TABLE Movie DROP COLUMN rating;
~~~

###### e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`gebru-4211891-julio-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec

Ou seja, como esse id da tabela Movie está relacionado com uma FOREIGN KEY da tabela Rating, a linha não pode ser deletada. Seria, primeiro, necessário deletar todas as linhas da tabela Rating onde movie_id fossem igual ao id do filme que deja deletar na tabela Movies.

~~~SQL
DELETE FROM Movie WHERE id = "002";
~~~


### Exercício 2
###### a)
Essa tabela é composta por duas FOREIGN KEYS que relacionam-se com as id's de filmes e de atores, podendo assim estruturar uma tabela que relaciona um ator ao elenco de um filme.

###### b)
~~~SQL
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"006"
);

~~~

###### c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`gebru-4211891-julio-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.156 sec


Ou seja, foi tentado inserir na tabela MovieCast um valor para movie_id que não está presente entre os id's na tabela Movies. E como movie_id é uma referencia dos id's em Movie, não foi possível inserir a nova linha na tabela MovieCast.

~~~SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("003", "006");
~~~

###### d)

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`gebru-4211891-julio-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.516 sec


Ou seja, como esse id da tabela Actor está relacionado com uma FOREIGN KEY da tabela MovieCast, a linha não pode ser deletada pois a informação está sendo usada em outra tabela.

~~~SQL
DELETE FROM Actor WHERE id = "004";
~~~


### Exercício 3
###### a)
ON é uma espécie de condicional para indicar quais itens devem ser apresentados. Nesse caso, são apresentados apenas os filmes que foram avaliados (Movie.id = Rating.movie_id). 

###### b)
~~~SQL
SELECT m.id as movie_id, m.name as name, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
~~~
