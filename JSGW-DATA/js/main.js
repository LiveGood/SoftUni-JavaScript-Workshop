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
window.addEventListener('load', function () {
    initCanvas();
});

function Start(){
    requestId = window.requestAnimationFrame(Draw);
}

function Stop(){
    if(requestId){
        window.cancelAnimationFrame(requestId);
    }
    requestId = 0;
}


var vector = new Vector2(2);

