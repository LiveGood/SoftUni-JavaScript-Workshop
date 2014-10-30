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
})();



//Start of Vector2 class
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
})();  //End of Vector2 class

