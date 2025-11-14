let num = [5, 8, 2, 9, 3];
num.push(1); // Adiciona o valor 1 ao final do array
num.sort(); // Ordena o array em ordem crescente

for (let i in num) { //(let i = 0; i < num.length; i++) mesma coisa, mas so funciona para arrays
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

idx = num.indexOf(8); // Mostra a posição do valor 8 no array
console.log(`O valor 8 está na posição ${idx}`);