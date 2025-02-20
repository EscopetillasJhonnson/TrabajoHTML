var canvas, ctx;
    window.onload = function () {
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
                function crearCamellos(x, y, dx){
                    //Genera un objeto que se llama camello
                    let camello = {
                        x: x, //x es la posInicial x del camello
                        y: y, //y es la posFinal y del camello
                        dx: dx, //dx es la velocidad del camello, los px que se movera
                        actualFrame: 0,
                    };
                    camellos.push(camello);
                }
                //Generar los 6 camellos
                crearCamellos(0, 30, 10); // Primer camello
                crearCamellos(20, 80, 5); // Segundo camello
                crearCamellos(40, 150, 12); // Tercer camello
                crearCamellos(60, 50, 10); // Cuarto camello
                crearCamellos(80, 300, 5); // Quinto camello
                crearCamellos(0, 800, 12); // Sexto camello

                //Esta funcion se ejecuta esta imagen cada 100ms
                setInterval(function () {
                    //LIMPIAR EL CANVAS
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    //Recorremos cada camello que esta en el array con el foreach
                    camellos.forEach(camello => {
                        //Incrementamos el frame actual
                        camello.actualFrame++;
                        //En cada frame aumenta los px el camello
                        camello.x += camello.dx;
                        //Vuelve a la posicion final
                        if (camello.x > canvas.width) {
                            camello.x = 0;
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
                }, 100);
            };    
        }
    }
};
    //export function NumeroDelCamelloGanador(){
        //lo que haga victor para que funcione
    //}

