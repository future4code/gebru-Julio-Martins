enum GENRE{
	ACTION="ação",
	DRAMA="drama",
	COMEDY="comédia",
	ROMANCE="romance",
	HORROR="terror",
    FANTASY="Fantasia"
    
}

type Movie = {
    nome: string,
    ano: number,
    genero: GENRE,
    pontuação?: number
}

const returnMovieType = (name : string, releaseDate : number, genre : GENRE,
score? : number) : Movie=> {

    if (!score) {
        const infoMovie : Movie = {
            nome: name,
            ano: releaseDate,
            genero: genre
        }
        return infoMovie;
    } else{
        const infoMovie : Movie = {
            nome: name,
            ano: releaseDate,
            genero: genre,
            pontuação: score
        }
        return infoMovie;
    };
};

console.log(returnMovieType("O Estranho Mundo de Jack", 1991, GENRE.FANTASY, 100));
console.log(returnMovieType("O Estranho Mundo de Jack", 1991, GENRE.FANTASY));