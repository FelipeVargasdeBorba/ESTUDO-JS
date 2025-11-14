function filtrarMaioresDeIdade(idades) {
    const maiores = idades.filter(idade => idade >= 18);//filter() cria um novo array
    return maiores;
}

const listaDeIdades = [15, 22, 17, 35, 12, 19, 45, 18];
const maioresDeIdade = filtrarMaioresDeIdade(listaDeIdades);

console.log(`Lista de todas as idades: [${listaDeIdades.join(', ')}]`);
console.log(`Maiores de idade (>= 18): [${maioresDeIdade.join(', ')}]`);