let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

 function adicionar(){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} foi adicionado`
    lista.appendChild(item)
}

function finalizar(){
    valores.sort()
    let total = valores.length
    res.innerHTML = `Temos um total de ${total} numeros na tabela`
}