function converterMoeda(valorBRL, moedaDestino) {
    moedaDestino = moedaDestino.toUpperCase();
    let taxaDeCambio;
    let nomeMoeda;

    switch (moedaDestino) {
        case 'USD':
            taxaDeCambio = 0.18;
            nomeMoeda = 'Dólar Americano';
            break;
        case 'EUR':
            taxaDeCambio = 0.16;
            nomeMoeda = 'Euro';
            break;
        case 'GBP':
            taxaDeCambio = 0.14;
            nomeMoeda = 'Libra Esterlina';
            break;
        default:
            return "Moeda de destino inválida. Use USD, EUR ou GBP.";
    }

    const valorConvertido = (valorBRL * taxaDeCambio).toFixed(2);
    return `${valorBRL.toFixed(2)} BRL equivalem a ${valorConvertido} ${moedaDestino} (${nomeMoeda}).`;
}

const valorParaConverter = 100;
const conversaoDolar = converterMoeda(valorParaConverter, 'usd');
const conversaoEuro = converterMoeda(valorParaConverter, 'EUR');

console.log(`\n--- Projeto 5: Conversor de Moedas Simples ---`);
console.log(conversaoDolar);
console.log(conversaoEuro);