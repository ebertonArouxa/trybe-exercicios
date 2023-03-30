let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log(fatorial);

let palavra = "tryber";
let contrario = '';

for (let index = 0; index < palavra.length; index += 1) {
  contrario += palavra[palavra.length - 1 - index];
}

console.log(contrario);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log(maiorPalavra);
console.log(menorPalavra);