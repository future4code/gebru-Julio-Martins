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

let player = []
let pc = []
let carta1 = true
let carta2 = false
const game = blackjack => {
   if (confirm("Fala newbie, bora jogar blackjack?" + "\n" + "Quer iniciar uma nova rodada?")) {
      while (!cards) {
         player.push(comprarCarta())
         player.push(comprarCarta())
         pc.push(comprarCarta())
         pc.push(comprarCarta())
      }
   } if ((player[0].valor == 11 && [1].valor == 11) ||
      (pc[0].valor === 11 && pc[1].valor == 11)) {
   } else {
   }
}
game()
