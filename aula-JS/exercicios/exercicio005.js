function inverterPalavra(palavra) {
    const arrayDeLetras = palavra.split('');//split('') para transformar a string em um array de letras
    
    const arrayInvertido = arrayDeLetras.reverse();//everse() para inverter a ordem dos elementos no array
    
    const palavraInvertida = arrayInvertido.join('');//join('') para juntar os elementos do array novamente em uma string
    
    return palavraInvertida;
}

const palavraOriginal = "ESTUDO";
const resultado = inverterPalavra(palavraOriginal);

console.log(`Palavra original: ${palavraOriginal}`);
console.log(`Palavra invertida: ${resultado}`); 