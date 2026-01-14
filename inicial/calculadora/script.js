function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")

    resp.textContent = numero1 + numero2

}

function subtração(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostasub")

    resp.textContent = numero1 - numero2

}

function multiplicação(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respostamult")

    resp.textContent = numero1 * numero2

}

function divisão(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respostadiv")

    resp.textContent = numero1 / numero2

}


