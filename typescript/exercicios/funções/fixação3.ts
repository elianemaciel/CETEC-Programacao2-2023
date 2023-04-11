// Como podemos adicionar parâmetros default (padrão) na função abaixo? Altere a função abaixo colocando como default os paramentros: 3 meses e taxa de 10%.



const calculoJuros = (principal: number, meses:number = 3, taxa: number = 10) => {
  let resultado = (principal * meses * taxa) / 100
  return resultado
}

