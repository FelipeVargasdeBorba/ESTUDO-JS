var nota = Number.parseFloat(window.prompt('Digite sua nota: '));
var resultado = nota >= 7 ? 'Aprovado' : 'Reprovado';
document.write('Com a nota ' + nota + ', você está ' + resultado);