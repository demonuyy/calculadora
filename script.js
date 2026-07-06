let pantalla = "";
let screen = document.getElementById("screen");

let botones = document.querySelectorAll(".number");
let operadores = document.querySelectorAll(".operator");

let operators = ["+", "-", "x", "/"];

let decimal = document.querySelector(".decimal");

document.getElementById("C").onclick = limpiarPantalla;
document.getElementById("Elim").onclick = eliminarUltimo;
document.getElementById("equal").onclick = calcularResultado;

botones.forEach(function(boton) {
    boton.onclick = function(){
        pantalla += boton.textContent;
        screen.textContent = pantalla;
    }
});

operadores.forEach(function(operador) {
        operador.onclick = function(){
            let ultimoCaracter = pantalla[pantalla.length - 1];

            if(pantalla === ""){
                if(operador.textContent === "-"){
                    pantalla += operador.textContent;
                }else {
                    return;
                }      
            }else{
                if(operators.includes(ultimoCaracter)){
                    if(screen.textContent === "-"){
                        return
                    }else{
                        pantalla = pantalla.slice(0, -1);
                        pantalla += operador.textContent
                    }
                }else{
                    pantalla += operador.textContent
                }
            } 
            
            screen.textContent = pantalla;

        }
})

function limpiarPantalla(){
    pantalla = "";
    screen.textContent = pantalla
}

function eliminarUltimo() {
    pantalla = pantalla.slice(0, -1);
    screen.textContent = pantalla
}

function calcularResultado() {

    let operador = "";

    operators.forEach(function(op) {
    if (pantalla.includes(op)) {
        operador = op;
    }
    });

    let partes = pantalla.split(operador);

    let numero1 = Number(partes[0]);
    let numero2 = Number(partes[1]);

    let resultado;

    if (operador === "+") {
        resultado = numero1 + numero2;
    } else if (operador === "-") {
        resultado = numero1 - numero2;
    } else if (operador === "x") {
        resultado = numero1 * numero2;
    } else if (operador === "/") {
        resultado = numero1 / numero2;
    }

    pantalla = resultado.toString();
    screen.textContent = pantalla;
}