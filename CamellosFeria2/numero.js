//import {NumeroDelCamelloGanador} from "camellos.js";

let valorSpan = document.getElementById("valorActual");
let botonclick = false;

function addbotonclick(){
    
        let C1=$("#C1");
        let C2=$("#C2");
        let C3=$("#C3");
        let C4=$("#C4");
        let C5=$("#C5");
        let C6=$("#C6");
        
        let apuesta = 0;

        C1.click(function(){
            apuesta = 1;
            botonclick = true;
        });
        C2.click(function(){
            apuesta = 2;
            botonclick = true;
        });
        C3.click(function(){
            apuesta = 3;
            botonclick = true;
        });
        C4.click(function(){
            apuesta = 4;
            botonclick = true;
        });
        C5.click(function(){
            apuesta = 5;
            botonclick = true;
        });
        C6.click(function(){
            apuesta = 6;
            botonclick = true;
        });
           
        /*
        setTimeout((apuesta, NumeroDelCamelloGanador) => {
            if (apuesta == NumeroDelCamelloGanador) {
                alert("¡Ganas!");
                valorSpan.textContent = nuevoValor + 1;
            } else {
                alert("Pierdes");
            }
        },10000);
        */
       return botonclick;
}

