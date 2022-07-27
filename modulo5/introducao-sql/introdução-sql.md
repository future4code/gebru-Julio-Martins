# Exercícios da Aula de Introdução ao SQL

### Exercício 1
###### a)
Tipos na tabela Actor:
FLOAT - declara que a coluna salário é de números com ponto flutuante;
VARCHAR(255) - declara que as colunas de id e name são de strings com no máximo 255 caractéres;
VARCHAR(6) - declara que a coluna de gender é de strings com no máximo 6 caracteres;
DATE - sinônimo de DATETIME, declara que a coluna de birth_date é de datas;

###### b)
SHOW TABLES mostra as tabelas presentes em um database e SHOW DATABASES mostra as bases de dados presentes no banco de dados

###### c)
DESCRIBE Actor mostra as colunas presentes na tabela Actor e seus respectivos tipos de dados aceitos e restrições, esquematizados em uma tabela.

### Exercício 2
###### a)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
~~~

###### b)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.157 sec


Como id é uma primary key, não é permitido mais de um item com o mesmo id.

###### c)
Error Code: 1136. Column count doesn't match value count at row 1	0.218 sec

É necessário que seja especificado valores para um item de acordo com as colunas especificadas. 

###### d)
Error Code: 1364. Field 'name' doesn't have a default value	0.156 sec

Como name, é um campo not null, não é posivel criar um novo item sem essa informação preenchida.


###### e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.156 sec

Campos do tipo DATE tem que ser repassados como uma string no formato "aaaa-mm-dd"

###### f)
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female"),
       ("004", "Antônio Fagundes", 400000, "1949-04-18", "male");
       ("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
~~~

### Exercício 3
###### a)
~~~SQL
SELECT * from Actor WHERE gender = "female";
~~~

###### b)
~~~SQL
SELECT salary from Actor WHERE name = "Tony Ramos";
~~~

###### c)
~~~SQL
SELECT * from Actor WHERE gender = "invalid";
~~~
É apresentado uma planilha com todas as colunas da tabela Actor, mas com campos vazios porquê não há item que possua gender como "invalid".

###### d)
~~~SQL
SELECT id, name, salary from Actor WHERE salary <= 500000;
~~~

###### e)
Error Code: 1054. Unknown column 'nome' in 'field list'	0.156 sec

Foi pedido para apresentar id e nome da tabela Actor, porém nome não é coluna que pertença à essa tabela, mas sim name.

~~~SQL
SELECT id, name from Actor WHERE id = "002";
~~~

### Exercício 4
###### a)
Selecione e mostre todos os campos e os itens da tablea Actor onde o campo name começa com o carácter A ou J e o salário seja maior que 3000000. 

###### b)
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "A%" AND salary > 300000;
~~~

###### c)
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%" AND salary > 300000;
~~~
###### d)
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%" ) AND (salary >= 350000 AND salary <= 900000);
~~~

