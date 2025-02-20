//import {NumeroDelCamelloGanador} from "camellos.js";

let valorSpan = document.getElementById("valorActual");

$(function(){
    inicializarEventos();


    function inicializarEventos(){
        let C1=$("#C1");
        let C2=$("#C2");
        let C3=$("#C3");
        let C4=$("#C4");
        let C5=$("#C5");
        let C6=$("#C6");
        
        $apuesta = 0;

        C1.click( $apuesta == 1);
        C2.click( $apuesta == 2);
        C3.click( $apuesta == 3);
        C4.click( $apuesta == 4);
        C5.click( $apuesta == 5);
        C6.click( $apuesta == 6);
    }
      
    setTimeout((apuesta, NumeroDelCamelloGanador) => {
        if (apuesta === NumeroDelCamelloGanador) {
            alert("¡Ganas!");
            valorSpan.textContent = nuevoValor + 1;
        } else {
            alert("Pierdes");
        }
    },10000);
});
