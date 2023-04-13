//Escreva um programa em TypeScript de calculo de fatorial.  Uma função que receba um número  e retorne o seu fatorial. Calcule o fatorial dos números 1 a 20.
//O fatorial de um número é igual à multiplicação desse número pelos seus antecessores maiores que zero.


const calcFactorial = (n: number) => {

  let fat = n
  for (let i = n -1; i > 0; i--) {
    fat = fat * i
  }
  return n
}