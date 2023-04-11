//Escreva uma função em TypeScript que receba um array de números e retorne a média aritmética. Gere um array com 10 números aleatórios e chame a função passando como parâmetro esse array.



const calcMedia = (numeros: number[]): number => {

  let soma: number = 0
  let tamanho: number = numeros.length // a propriedade length retorna o tamanho do array

  // função que percorre o array
  numeros.forEach(item => soma = soma + item)
  
  return soma / tamanho
}

// Função que gera um array de números aleatórios 
const geraArray = (tamanho: number): number[] => {

  const newArray: number[] = []
  for (let i = 0; i < tamanho ; i++) {
    // Gera número aleatório
    let aleat: number = Math.random() * 99
    // Transforma o número para inteiro
    aleat = parseInt(aleat.toString())
    // Adiciona elemento no array
    newArray.push(aleat)

  }
  return newArray
}

const arrayAleatorio = geraArray(10)

calcMedia(arrayAleatorio)