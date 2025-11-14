var a = document.getElementById('area')

a.addEventListener('mouseout', mouse_sair)
a.addEventListener('mouseenter', mouse_sobre)
a.addEventListener('click', clicar)

function mouse_sobre() {
    a.style.backgroundColor = 'lightgreen'
}

function mouse_sair() {
    a.style.backgroundColor = 'white'
}

function clicar() {
    a.innerHTML = 'Clicou!'
    a.style.backgroundColor = 'lightblue'
}