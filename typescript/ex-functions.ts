function calc (x: number, y:number):string {
  return `resultado ${x + y}`
}

function log(): void {
  console.log('Sem retorno');
}

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// Arrow functions

const lengthMaterial = (materials: Array<string>) => {
  materials.forEach(element => {
    console.log(element.length);
  }); 
}
