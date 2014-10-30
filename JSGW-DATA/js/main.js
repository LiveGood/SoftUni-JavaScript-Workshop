var ctx, canvasWidth, canvasHeight;

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    canvasWidth = ctx.canvas.width;
    canvasHeight = ctx.canvas.height;
}

/*Initializing canvas on load*/
window.addEventListener('load', function () {
    initCanvas();
});

/*Initializing cross-browser Animation Frame to start the animation drawing*/
(function(){
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    window.requestAnimationFrame = requestAnimationFrame;
})();

var requestId = 0;

function Start(){
    requestId = window.requestAnimationFrame(Draw);
}

function Stop(){
    if(requestId){
        window.cancelAnimationFrame(requestId);
    }
    requestId = 0;
}

/*Starts animation*/
Start();