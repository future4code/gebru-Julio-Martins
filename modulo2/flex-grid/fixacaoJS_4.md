```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  var total = 0;
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    for (const number of arrayDeNumeros) {
      if (number === numeroEscolhido) {
        total++;
      }
    }
    return `O número ${numeroEscolhido} aparece ${total}x`;
  } else {
    return "Número não encontrado";
  }
}
```
