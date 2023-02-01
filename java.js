let estudios1 = "Manuel Belgrano"
let estudios2 = "Nacional Bartolomé Mitre"
let estudios3 = "San Miguel"
let estado = "Completo"
let estado2 = "Incompleto"
let año = "1993"
let año1 = "1998"
let año2 = "Cursando"



document.getElementById('estudios_primarios').addEventListener("click", function(){
    console.log ("hola mundo");
    document.getElementById("estudiosp").innerHTML = "Colegio: "+estudios1+"<br> Estado: "+estado+"<br> Año: "+año;
    })

document.getElementById('estudios_secundarios').addEventListener("click", function(){
    console.log ("hola mundo");
    document.getElementById("estudioss").innerHTML = "Colegio "+estudios2+"<br> Estado: "+estado+"<br> Año: "+año1;
    })

document.getElementById('estudios_universitarios').addEventListener("click", function(){
    console.log ("hola mundo");
    document.getElementById("estudiosu").innerHTML = "Colegio "+estudios3+"<br> Estado: "+estado2+"<br> Año: "+año2;
})

