var ctx,
    canvasWidth,
    canvasHeight,
    requestId = 0;

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    canvasWidth = ctx.canvas.width;
    canvasHeight = ctx.canvas.height;

    /*Initializing cross-browser Animation Frame to start the animation drawing*/
    window.requestAnimationFrame =
        window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    /*Starts animation*/
    Start();
}

/*Initializing canvas on load*/
window.addEventListener('load', function (event) {
    initCanvas();
});

function Start(){
    requestId = window.requestAnimationFrame(Draw);
}

function Stop() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
    }
    requestId = 0;
}


var vector = new Vector2(2,0);
var rectangle = new Rectangle(15, 15, 20, 20);
rectangle.color = new Color(0, 0, 255, 1);

function Draw(){
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    rectangle.Draw(ctx);

    requestId = window.requestAnimationFrame(Draw);
}