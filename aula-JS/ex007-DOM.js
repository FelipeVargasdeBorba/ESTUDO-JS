function somar() {
    var n1 = document.getElementById('txtn1').value
    var n2 = document.getElementById('txtn2').value
    var res = document.getElementById('resultado')
    var s = Number(n1) + Number(n2)
    res.innerHTML = ('A soma é: ' + s)
}