let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / 10;

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

let maiorNumero = 0

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] > maiorNumero) {
        maiorNumero = numbers[index2];
    }
}
console.log(maiorNumero);

let numerosImpares = 0

for (let index3 = 0; index3 <numbers.length; index3 += 1) {
    if (numbers[index3] % 2 !== 0) {
        numerosImpares += 1;
    }
}
if (numerosImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpares);
}

let menorNumero = numbers[0]

for (let index4 = 0; index4 < numbers.length; index4 += 1) {
    if (numbers[index4] < menorNumero) {
        menorNumero = numbers[index4];
    }
}
console.log(menorNumero);

let novosNumeros = []

for (let index5 = 1; index5 <= 25; index5 += 1) {
    novosNumeros.push(index5);
}
console.log(novosNumeros);

for (let index6 = 0; index6 < novosNumeros.length; index6 += 1) {
    console.log(novosNumeros[index6] / 2);
};