// O código abaixo possui alguns erros, identifique, corrija-os e submeta o código com as correções:

// Falta tipagem de parâmetro
// Falta simbolo de função =>
const calculateFactorial = (n: number) => {
  if (n === 0) {
    return 1
  }
  // para a lógica ficar correta deve-se remover o = da condição do for i <= 0 para i < 0 
  for (let i = n -1; i < 0; i++) {
    n *=  i
  }
  return n
}