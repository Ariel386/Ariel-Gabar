let curso1 = "Licencia de Conducir"
let curso2 = "Informática Office y Front End"
let curso3 = "Inglés Básico"
let estado_carnet = "Vigente"

document.getElementById('curso1').addEventListener("click", function(){
    document.getElementById("cursoA").innerHTML = curso1+"<br>"+"Estado del Carnet: "+estado_carnet })

    document.getElementById('curso2').addEventListener("click", function(){
        document.getElementById("cursoB").innerHTML = curso2+"<br>"+"Estado: "+"En curso"})

        document.getElementById('curso3').addEventListener("click", function(){
            document.getElementById("cursoC").innerHTML = curso3+"<br>"+"Estado: "+"Finalizado"})

