const calculoJuros = (principal: number, meses:number = 3, taxa: number = 10) => {
  let resultado = (principal * meses * taxa) / 100
  return resultado
}

