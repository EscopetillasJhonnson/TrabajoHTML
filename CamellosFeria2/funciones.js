
var canvas, ctx;
window.onload = function () {
    canvas = document.getElementById("canvas");

    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            var sprite = new Image();
            sprite.src = "images/run.png"; // Asegúrate de que la imagen esté en la ruta correcta

            sprite.onload = function () {
                let numColumns = 8; // Número correcto de columnas para el sprite sheet
                let numRows = 1;    // Número correcto de filas para el sprite sheet

                let frameWidth = sprite.width / numColumns; 
                let frameHeight = sprite.height / numRows;

                let actualFrame = 0;
                //DONDE VAMOS A MOSTRAR NUESTRO PERSONAJE
                let dx = 10, x = 0;
                let dy = 40, y = 30;

                setInterval(function () {
                    actualFrame++;
                    x += dx;
                    if (x > canvas.width) {
                        x = 0;
                    }
                    let maxFrame = numColumns * numRows - 1;
                    if (actualFrame > maxFrame) {
                        actualFrame = 0;
                    }

                    let column = actualFrame % numColumns;
                    let row = Math.floor(actualFrame / numColumns);

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(sprite, 		//Objeto
                     //La coordenada x donde empezar a recortar.
                     column * frameWidth,
                     //La coordenada y dónde empezar a recortar 	
                     row * frameHeight,
                     //El ancho de la imagen recortada	
                     frameWidth,
                     //La altura de la imagen recortada
                     frameHeight,
                     //La coordenada x donde colocar la imagen en el lienzo
                     x,
                     //La coordenada y donde colocar la imagen en el lienzo
                     y,
                     //El ancho de la imagen a usar (estirar o reducir la imagen)
                     frameWidth,
                     //El alto de la imagen a usar (estirar o reducir la imagen)
                     frameHeight);
                }, 100);
            };
        }
    }
};



/*
//Sirve para detectar y cargar eventos
window.onload = function(){
    //Guardamos en la variable canvas el canvas con el id
    canvas = document.getElementById('canvas');
    //Nos permite saber si es soportado por nuestro navegador el canvas
    if(canvas && canvas.getContext ){
        ctx = canvas.getContext("2d");
        if(ctx){
            //Definimos los colores
            //Color del cuadrado
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5;
            //x,y,w,h(posicion vector 2D, ancho y alto) y crea el cuadrado en esa posicion x,y
            ctx.fillRect(50, 50, 100, 100);
            ctx.strokeRect(50, 50, 100, 100);
            //CUADRADO2
            ctx.fillStyle = "rgba(250,250,0,0.25)";
            ctx.fillRect(200, 50, 100, 100);
            ctx.strokeRect(200, 50, 100, 100);
            //LINIA
            ctx.lineWidth=25;
            ctx.strokeStyle="yellow";
            //INICIALIZA EL TRAZO
            ctx.beginPath();
            ctx.lineCap="round";
            //Empieza en estas coordenadas
            ctx.moveTo(50,50);
            //Donde acaba la linia
            ctx.lineTo(450,50);
            //HACE EL TRAZADO
            ctx.stroke();
        }
        else{
            alert("Canvas no es soportado en este navegador");
            
        }
    }
}
    */