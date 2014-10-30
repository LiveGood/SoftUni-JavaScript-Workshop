var Rectangle = (function() {
    function Rectangle(x, y, w, h) {
        if(x == null||y==null||w==null||h==null){
            alert("you did not pass all the required variables");

            var errorMsg = "Missing:"
            if(x==null) errorMsg += " 'x' ";
            if(y==null) errorMsg += " 'y' ";
            if(w==null) errorMsg += " 'w' ";
            if(h==null) errorMsg += " 'h' ";

            throw new Error(errorMsg);
        }

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = new Color();
    }

    /**
     * @return {boolean}
     */
    Rectangle.prototype.Contains = function(x, y) {
        return !!(x >= this.x && x <= this.x + this.width &&
            y >= this.y && y <= this.y + this.height);
    };

    /**
     * @return {boolean}
     */
    Rectangle.prototype.Intersects = function(shape) {
        var thisContainsShape =
            this.Contains(shape.x, shape.y) ||
            this.Contains(shape.x + shape.width, shape.y)||
            this.Contains(shape.x, shape.y + shape.height)||
            this.Contains(shape.x + shape.width, shape.y + shape.height);

        var shapeContainsThis =
            shape.Contains(this.x , this.y) ||
            shape.Contains(this.x + this.width, this.y)||
            shape.Contains(this.x, this.y + this.height)||
            shape.Contains(this.x + this.width, this.y + this.height);

        if(thisContainsShape){
            return true;
        }
        else if(shapeContainsThis){
            return true;
        }
        return false;
    };
    
    Rectangle.prototype.Draw = function(ctx) {
        ctx.fillStyle = this.color.ToStandard();
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    return Rectangle;
})();

var Color = (function () {
    function Color(r, g, b, a){
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.a = 1;

        if(r != null) this.r = r;
        if(g != null) this.g = g;
        if(b != null) this.b = b;
        if(a != null) this.a = a;

        /**
         * @return {string}
         */
        Color.prototype.ToStandard = function(noAlpha){
            if(noAlpha == null || !noAlpha)
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
            else
                return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }
    }
    return Color;
}());

var Vector2 = (function() {
    function Vector2(x, y) {
        this.x = 0;
        this.y = 0;

        if (x != null) this.x = x;
        if (y != null) this.y = y;
    }

    Vector2.prototype.Set = function(x, y) {
        if (x == null && y == null) {
            console.log("No x or y has been passed to Vector2's set function");
        }
        else {
            if(x!=null && y == null){
                this.x = x;
                this.y = y;
            }else{
                if(x!= null) this.x = x;
                if(y!= null) this.y = y;
            }
        }
    };

    return Vector2;
})();

var Animation = (function() {
    function Animation(width, height, row, column, limit, imgSrc, fps, columns, rows) {
        if (fps == null || fps >= 33) {
            this.fps = 1;
        }
        else {
            this.fps = 33 / fps;
        }

        this.fpsCounter = 0;
        this.width = width;
        this.height = height;
        this.rowStart = row;
        this.columnStart = column;
        this.row = row;
        this.column = column;
        this.rows = rows;
        this.columns = columns;

        if (limit == null || null == 0) {
            this.limit = 9999999;
        }
        else {
            this.limit = limit - 1;
        }

        this.limitCount = 0;
        this.image = new Image();
        this.image.src = imgSrc;
        this.position = new Vector2(0);
        this.cropPostion = new Vector2(0);
    }
    Animation.prototype.SetLimit = function(limit){
        this.limit = limit-1;
    };

    Animation.prototype.SetRow = function(num){
        this.row = num;
        this.rowStart = num;

        this.cropPostion.x = this.width * this.column;
        this.cropPostion.y = this.height * this.row;
    };

    Animation.prototype.SetColumn = function (num) {
        this.column = num;
        this.columnStart = num;

        this.cropPostion.x = this.width * this.column;
        this.cropPostion.y = this.height * this.row;
    };

    Animation.prototype.Update = function(){
        this.cropPostion.x = this.width*this.column;
        this.cropPostion.y = this.height*this.row;

        if(this.columns == null || this.columns == 0)
            this.columns = this.image.width / this.width;
        if(this.rows == null || this.rows == 0)
            this.rows = this.image.height / this.height;

    };

    Animation.prototype.Draw = function(ctx){
        if(this.fpsCounter == 0){
            if(this.limitCount < this.limit){
                this.limitCount++;
                this.column++;

                if(this.column >= this.columns){
                    this.row++;
                    this.column = 0;

                    if(this.row >= this.rows){
                        this.row = this.rowStart;
                        this.column = this.columnStart;
                        this.limitCount = 0;
                    }
                }
            }
            else{
                this.column = this.columnStart;
                this.row = this.rowStart;
                this.limitCount = 0;
            }
        }

        ctx.drawImage(this.image, this.cropPostion.x, this.cropPostion.y, this.width, this.height,
            this.position.x, this.position.y, this.width, this.height);

        this.fpsCounter++;

        if(this.fpsCounter >= this.fps){
            this.fpsCounter = 0;
        }
    };
    return Animation;
})();

var Input = (function(){
    function Input() {
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
        this.f = false;
        this.g = false;
        this.h = false;
        this.i = false;
        this.j = false;
        this.k = false;
        this.l = false;
        this.m = false;
        this.n = false;
        this.o = false;
        this.p = false;
        this.q = false;
        this.r = false;
        this.s = false;
        this.t = false;
        this.u = false;
        this.v = false;
        this.w = false;
        this.x = false;
        this.y = false;
        this.z = false;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.enter = false;
        this.space = false;
        this.mouseIsDown = false;
        this.mousePosition = new Vector2(0);
        this.offset = new Vector2(0);
        this.clamp = new Vector2(0);
    }

    return Input;
})();

var input = new Input();

document.documentElement.onmousemove = function(e){
    e = e || window.event;

    input.mousePosition.x = e.clientWidth - input.offset.x;
    input.mousePosition.y = e.clientHeight - input.offset.y;
};

document.documentElement.onmousedown = function(e){
    input.mouseIsDown = true;
};

document.documentElement.onmouseup = function(e){
    input.mouseIsDown = false;
};

document.documentElement.onkeydown = function(e){
    var keycode;
    if(window.event)
        keycode = window.event.keyCode;
    else if(e)
        keycode = e.which;

    switch (keycode)
    {
        case 13:
            input.enter = true;
            break;
        case 32:
            input.space = true;
            break;
        case 37:
            input.left = true;
            break;
        case 38:
            input.up = true;
            break;
        case 39:
            input.right = true;
            break;
        case 40:
            input.down = true;
            break;
        case 65:
            input.a = true;
            break;
        case 66:
            input.b = true;
            break;
        case 67:
            input.c = true;
            break;
        case 68:
            input.d = true;
            break;
        case 69:
            input.e = true;
            break;
        case 70:
            input.f = true;
            break;
        case 71:
            input.g = true;
            break;
        case 72:
            input.h = true;
            break;
        case 73:
            input.i = true;
            break;
        case 74:
            input.j = true;
            break;
        case 75:
            input.k = true;
            break;
        case 76:
            input.l = true;
            break;
        case 77:
            input.m = true;
            break;
        case 78:
            input.n = true;
            break;
        case 79:
            input.o = true;
            break;
        case 80:
            input.p = true;
            break;
        case 81:
            input.q = true;
            break;
        case 82:
            input.r = true;
            break;
        case 83:
            input.s = true;
            break;
        case 84:
            input.t = true;
            break;
        case 85:
            input.u = true;
            break;
        case 86:
            input.v = true;
            break;
        case 87:
            input.w = true;
            break;
        case 88:
            input.x = true;
            break;
        case 89:
            input.y = true;
            break;
        case 90:
            input.z = true;
            break;
    }
};

document.documentElement.onkeyup = function(e){
    var keycode;
    if(window.event)
        keycode = window.event.keyCode;
    else if(e)
        keycode = e.which;

    switch (keycode)
    {
        case 13:
            input.enter = false;
            break;
        case 32:
            input.space = false;
            break;
        case 37:
            input.left = false;
            break;
        case 38:
            input.up = false;
            break;
        case 39:
            input.right = false;
            break;
        case 40:
            input.down = false;
            break;
        case 65:
            input.a = false;
            break;
        case 66:
            input.b = false;
            break;
        case 67:
            input.c = false;
            break;
        case 68:
            input.d = false;
            break;
        case 69:
            input.e = false;
            break;
        case 70:
            input.f = false;
            break;
        case 71:
            input.g = false;
            break;
        case 72:
            input.h = false;
            break;
        case 73:
            input.i = false;
            break;
        case 74:
            input.j = false;
            break;
        case 75:
            input.k = false;
            break;
        case 76:
            input.l = false;
            break;
        case 77:
            input.m = false;
            break;
        case 78:
            input.n = false;
            break;
        case 79:
            input.o = false;
            break;
        case 80:
            input.p = false;
            break;
        case 81:
            input.q = false;
            break;
        case 82:
            input.r = false;
            break;
        case 83:
            input.s = false;
            break;
        case 84:
            input.t = false;
            break;
        case 85:
            input.u = false;
            break;
        case 86:
            input.v = false;
            break;
        case 87:
            input.w = false;
            break;
        case 88:
            input.x = false;
            break;
        case 89:
            input.y = false;
            break;
        case 90:
            input.z = false;
            break;
    }
};

