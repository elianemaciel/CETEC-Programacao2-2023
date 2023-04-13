## Exercicios

- Escreva um programa em TypeScript que para uma string com o nome de um mês do ano e retorna o número correspondente a esse mês. Use switch para implementar a função (ele funciona como um else if). Dica: A string de mês será previamente definida, porém o switch deve avaliar todas as opções de mês.

[Codigo exercicio-fatorial](exercicio-fatorial.ts)

- Escreva um programa em TypeScript: Que gere um array de 20 elementos, de números aleatórios 0 a 99:  parseInt() e Math.random() *99). Para o Array gerado, retorne o maior número desse array.

[Codigo exercicio-media](exercicio-media.ts)


- O que será exibido na tela ao executar esse script? Abra um arquivo no vscode ou utilize o typescript online e coloque o código abaixo.


```
const calculo = (a: number, b: number) => {
  let resultado = (a - b) * a
  return resultado
}

console.log(calculo(2, 3))
console.log(calculo(10, 5))
console.log(calculo(6, 7))

```

- Como podemos adicionar parâmetros default (padrão) na função abaixo? Altere a função abaixo colocando como default os paramentros: 3 meses e taxa de 10%.

```
const calculoJuros = (principal: number, meses:number, taxa: number) => {
  let resultado = (principal * meses * taxa) / 100
  return resultado
}

console.log("Calculando o juros de R$ 100,00 a 5 % por 3 meses")
console.log(`R$ ${calculoJuros(100.0, 5, 3)}`)

```
- O código abaixo possui alguns erros, identifique, corrija-os e submeta o código com as correções:

```
const calculateFactorial = (n) {
  if (n === 0) {
    return 1;
  }
  for (let i = n -1; i >= 0; i--) {
    n *=  i
  }
  return n
}

const n = 5;
const factorial = calculaFactorial(n);
console.log(`O fatorial de ${n} é ${factorial}`)
```
