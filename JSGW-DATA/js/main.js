var canvas,
    ctx,
    canvasWidth,
    canvasHeight,
    requestId = 0;

function initCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    canvas.style.cursor = "none";


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


var player = new Player();

function Update(){
    player.Update();

}
function Draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Update();
    player.Draw(ctx);

    requestId = window.requestAnimationFrame(Draw);
}
