```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
var salarioFixo = 2000
var comissao = valorTotalVendas * 0.05
var vendas = qtdeCarrosVendidos * 100
var salarioTotal = salarioFixo + comissao + vendas
return salarioTotal
}
```