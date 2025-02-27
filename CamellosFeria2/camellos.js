//let valorSpan = document.getElementById("valorActual");

$( document ).ready(function() {
    botonclicado();
});
function botonclicado(){
    
        let C1=$("#C1");
        let C2=$("#C2");
        let C3=$("#C3");
        let C4=$("#C4");
        let C5=$("#C5");
        let C6=$("#C6");
        
        let apuesta = 0;

        C1.click(function(){
            apuesta = 1;
            
            iniciarCarrera();
        });
        C2.click(function(){
            apuesta = 2;
            
            iniciarCarrera();
        });
        C3.click(function(){
            apuesta = 3;
            
            iniciarCarrera();
        });
        C4.click(function(){
            apuesta = 4;
            
            iniciarCarrera();
        });
        C5.click(function(){
            apuesta = 5;
            
            iniciarCarrera();
        });
        C6.click(function(){
            apuesta = 6;
            
            iniciarCarrera();
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
}

//Se ejecutara si botonclick es true, es decir un boolean

function iniciarCarrera() {
        canvas = document.getElementById("canvas");
        //Este if mira si el context 2D esta disponible 
        if (canvas && canvas.getContext) {
            ctx = canvas.getContext("2d"); //Sirve para decir que queremos hacer el videojuego 2D
            if (ctx) {
                var sprite = new Image();
                sprite.src = "images/camelloscarrera.png"; // Especificamos donde esta el sprite sheet

                //Cuando la imagen se ha cargado, se ejecuta esta imagen
                sprite.onload = function () {
                    let numColumns = 6; // Número de las columnas que tiene el sprite sheet
                    let numRows = 1;    // Número de las filas que tiene el sprite sheet

                    //Calculamos el ancho y el alto de cada sprite   
                    let frameWidth = sprite.width / numColumns;
                    let frameHeight = sprite.height / numRows;
                    let camellos = []; //Array para almacenar los 6 camellos
                    function crearCamellos(x, y, dx) {
                        //Genera un objeto que se llama camello
                        let camello = {
                            x: x, //x es la posInicial x del camello
                            y: y, //y es la posFinal y del camello
                            speed: dx, //dx es la velocidad del camello, los px que se movera
                            actualFrame: 0,
                            moving: true
                        };
                        camellos.push(camello);
                    }
                    function generarNum() {
                        return Math.floor(Math.random() * 20) + 10;
                    }
                    //Generar los 6 camellos
                    crearCamellos(0, 30, generarNum()); // Primer camello
                    crearCamellos(20, 80, generarNum()); // Segundo camello
                    crearCamellos(40, 150, generarNum()); // Tercer camello
                    crearCamellos(60, 50, generarNum()); // Cuarto camello
                    crearCamellos(80, 300, generarNum()); // Quinto camello
                    crearCamellos(0, 300, generarNum()); // Sexto camello

                    let winner = null;
                    //Esta funcion se ejecuta esta imagen cada 100ms
                    let raceInterval = setInterval(function () {
                        //LIMPIAR EL CANVAS
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        let allStopped = true;

                        //Recorremos cada camello que esta en el array con el foreach
                        camellos.forEach((camello, index) => {
                            if (camello.moving) {
                                //Incrementamos el frame actual
                                camello.actualFrame++;
                                //En cada frame aumenta los px el camello
                                camello.x += camello.speed;
                            }
                            if (camello.x + frameWidth >= canvas.width) {
                                camello.x = canvas.width - frameWidth; // Asegura que no pase del borde
                                camello.moving = false; // Detiene el movimiento
                                if (winner === null) {
                                    winner = index + 1; // Guardamos el número del camello ganador (empezamos desde 1)
                                    console.log(`🏆 Camello #${winner} ha ganado la carrera! 🎉`);
                                }
                            }
                            if (camello.moving) {
                                allStopped = false;
                            }
                            //Lo que hace es que reinicia la animacion si llega al frame 6
                            let maxFrame = numColumns * numRows - 1;
                            //Si el frame actual del camello es 7 el frame actual es 0 y se reinicia la animacion
                            if (camello.actualFrame > maxFrame) {
                                camello.actualFrame = 0;
                            }


                            let column = camello.actualFrame % numColumns;
                            let row = Math.floor(camello.actualFrame / numColumns);

                            ctx.drawImage(
                                sprite,                      // El objeto de la imagen (sprite sheet)
                                column * frameWidth,          // Coordenada X del cuadro que queremos cortar del sprite sheet
                                row * frameHeight,            // Coordenada Y del cuadro que queremos cortar
                                frameWidth,                   // Ancho del cuadro que vamos a usar
                                frameHeight,                  // Alto del cuadro que vamos a usar
                                camello.x,                    // Coordenada X donde colocar la imagen en el canvas
                                camello.y,                    // Coordenada Y donde colocar la imagen en el canvas
                                frameWidth,                   // Ancho del camello que se va a dibujar en el canvas
                                frameHeight                   // Alto del camello que se va a dibujar en el canvas
                            );
                        });

                        if (allStopped) {
                            clearInterval(raceInterval);
                            console.log("🏁 Todos los camellos han llegado al final. Carrera terminada.");
                        }
                    }, 100);
                };
            }
        }
}

//export function NumeroDelCamelloGanador(){
//lo que haga victor para que funcione
//}

