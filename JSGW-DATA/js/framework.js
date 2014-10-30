
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

