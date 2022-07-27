# Exercício da Aula de Aprofundamento em SQL

### Exercício 1
##### a)
Deleta a coluna salary da tabela Actor.

##### b)
Modifica o nome da coluna gender.

##### c)
Modifica o tipo dos valores recebidos na coluna gender varchar(255), mantendo o nome da coluna.

##### d)
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

### Exercício 2
##### a)
~~~SQL
UPDATE Actor
SET birth_date = "1930-10-25"
WHERE id = "003";
~~~

##### b)
~~~SQL
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = LOWER(name)
WHERE name = UPPER("Juliana Paes");
~~~
##### c)
~~~SQL
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = "005";
~~~
##### d)
Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
A ação não configura como erro pois o ato de atualizar o item é realizado, porém, como nenhum item corresponde ao id informado, nenhum item é afetado. 
~~~SQL
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = 100;
~~~

### Exercício 3
##### a)
~~~SQL
DELETE FROM Actor WHERE name = 'Fernanda Montenegro';
~~~

##### b)
~~~SQL
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;
~~~

### Exercício 4
##### a)
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

##### b)
~~~SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~

##### c)
~~~SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~
##### d)
~~~SQL
SELECT SUM(salary) FROM Actor;
~~~

### Exercício 5
##### a)
A query apresentada faz a contagem de quantos atores existem ao considerar o gênero, montando uma tabela com a contagem de atores para o gênero male e para o female.

##### b)
~~~SQL
SELECT id
FROM Actor
ORDER BY name DESC;
~~~

##### c)
~~~SQL
SELECT *
FROM Actor
ORDER BY salary DESC;
~~~
##### d)
~~~SQL
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3;
~~~
##### e)
~~~SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~
