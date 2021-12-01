/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindes ao jogo de BlackJack!")
if (confirm("Vamos jogar uma partida de blackjack?")) {
   const blackjack = () => {
      cartasUser1 = comprarCarta()
      cartasUser2 = comprarCarta()
      cartasDoPc1 = comprarCarta()
      cartasDoPc2 = comprarCarta()
      pontosU = cartasUser1.valor + cartasUser2.valor
      pontosP = cartasDoPc1.valor + cartasDoPc2.valor
   }
   blackjack()
   console.log(`Usuário - cartas: ${cartasUser1.texto} ${cartasUser2.texto} - pontuação ${pontosU}`)
   console.log(`PC - cartas: ${cartasDoPc1.texto} ${cartasDoPc2.texto} - pontuação ${pontosP}`)
   if (pontosU > pontosP) {
      console.log("Aee ganhou O/")
   } else if (pontosU < pontosP) {
      console.log("HAHA Perdeu seu ruim HAHA o/")
   } else if (pontosU == pontosP) {
      console.log("Xii empatamos.. bora outra?")
   }
   //O que fazer se o usuário clicar "ok"
} else {
   console.log("Não aguenta joga DAMA. #Perdedor")
}
