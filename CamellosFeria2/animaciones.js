// Guardo en una variable constante canvas de la referencia canvas del index.html con getElementById
const canvas = document.getElementById('canvas');

// Nos guardamos el contexto para saber que el juego será 2D en ctx, este nos permitirá dibujar gráficos 2D
const ctx = canvas.getContext('2d');

// MEDIDAS CANVAS
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT = canvas.height = 600; 

const camelloSpriteSheet = new Image();
camelloSpriteSheet.src="images/camelloscorrer.png";

const spriteWidth = 199; //El resultado es el ancho del spritesheet (1194px)/num de columnas(6)
const spriteHeight = 200; //El resultado es el alto(200)/1 fila

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(camelloSpriteSheet, 0, 0, spriteHeight, spriteWidth, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate();
