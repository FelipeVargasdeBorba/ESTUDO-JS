function calcular() {
    var velocidade = document.getElementById('velocidade').value;
    var res = document.getElementById("res");
    res.innerHTML = "<br>A velocidade informada foi de " + velocidade + " Km/h. <br>";
    if (velocidade > 60) {
        res.innerHTML += "Você foi multado por excesso de velocidade!";
    } else {
        res.innerHTML += "Você está dentro do limite de velocidade.";
    }
}