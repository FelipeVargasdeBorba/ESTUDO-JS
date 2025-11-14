function calcularMediaPonderada(n1, n2) {
    const peso1 = 4;
    const peso2 = 6;
    
    const somaDosProdutos = (n1 * peso1) + (n2 * peso2);
    const somaDosPesos = peso1 + peso2;
    
    const media = somaDosProdutos / somaDosPesos;
    
    return media.toFixed(2); 
}

const nota1 = 7.5;
const nota2 = 9.0;
const mediaFinal = calcularMediaPonderada(nota1, nota2);

console.log(`Nota 1 (Peso 4): ${nota1}`);
console.log(`Nota 2 (Peso 6): ${nota2}`);
console.log(`A média ponderada do aluno é: ${mediaFinal}`);