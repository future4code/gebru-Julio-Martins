//Bem vindes :D
alert("Lula 2022 :D")

//Inicio do jogo de satanazes 

const desafio = () => {
   while (confirm("Fala newbie bora jogar 21?" + "\n" + "Se for medrose só correr!!!")) {
      let cartasUser
      let cartasDoPc
      let pontosUser
      let pontosDoPc
      let compraDeCarta
      do {
         cartasUser = []
         cartasDoPc = []
         pontosUser = 0
         pontosDoPc = 0
         for (let index = 0; index < 2; index++) {
            compraDeCarta = comprarCarta()
            cartasUser.push(compraDeCarta.texto)
            pontosUser += compraDeCarta.valor
         }
         for (let index = 0; index < 2; index++) {
            compraDeCarta = comprarCarta()
            cartasDoPc.push(compraDeCarta.texto)
            pontosDoPc += compraDeCarta.valor
         }

      } while (((cartasUser[0].valor === 11 && cartasUser[1].valor === 11) ||
         (cartasDoPc[0].valor === 11 && cartasDoPc[1].valor === 11)))

      while (pontosUser <= 19 && confirm(`Suas cartas são: ${cartasUser.join(" ")}. A carta revelada do computador é: ${cartasDoPc[0]} `
         + `\n` + "Vai comprar mais ou vai correr?")) {
         compraDeCarta = comprarCarta()
         cartasUser.push(compraDeCarta.texto)
         pontosUser += compraDeCarta.valor
      }
      if (pontosUser > 21) {
         alert(`Suas cartas são: ${cartasUser.join(" ")}. Pontuação:: ${pontosUser}`
            + `\n` + `As cartas do computador são: ${cartasDoPc.join(" ")}. Pontuação: ${pontosDoPc}`
            + "\n" + `Computador venceu seu ruim. O/`)
      } else {
         while (pontosUser > pontosDoPc) {
            compraDeCarta = comprarCarta()
            cartasDoPc.push(compraDeCarta.texto)
            pontosDoPc += compraDeCarta.valor
         }
         if (pontosDoPc > 21 || pontosUser > pontosDoPc) {
            alert(`Suas cartas são: ${cartasUser.join(" ")}. Pontuação:: ${pontosUser}` + "\n" +
               `As cartas do computador são:${cartasDoPc.join(" ")}. Pontuação: ${pontosDoPc}` + "\n" +
               "É deu sorte.. Ganhou seu newbie")
         } else
            if (pontosUser < pontosDoPc) {
               alert(`Suas cartas são: ${cartasUser.join(" ")}. Pontuação:: ${pontosUser}` + "\n" +
                  `As cartas do computador são:${cartasDoPc.join(" ")}. Pontuação: ${pontosDoPc}` + "\n" +
                  "Computador venceu a birosca toda. o/")
            }
            else {
               alert(`Suas cartas são: ${cartasUser.join(" ")}. Pontuação:: ${pontosUser}` + "\n" +
                  `As cartas do computador são:${cartasDoPc.join(" ")}. Pontuação: ${pontosDoPc}` + "\n" +
                  "Empatamos --' aff")
            }
      }

   }
}
console.log ("Fim de jogo!")
desafio()
