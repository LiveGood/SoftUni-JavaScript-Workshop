var ctx, canvasWidth, canvasHeight;

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    canvasWidth = ctx.canvas.width;
    canvasHeight = ctx.canvas.height;
}

window.addEventListener('load', function () {
    initCanvas();
});