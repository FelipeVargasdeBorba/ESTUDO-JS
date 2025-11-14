function clicar() {
    var local = document.getElementById("morada").value;
    var res = document.querySelector("div");

    if (local.toLowerCase() === "brasil") {
        res.innerHTML = "Voce mora no Brasil!";
    } else {
        res.innerHTML = "Voce é estrangeiro!";
    }
}