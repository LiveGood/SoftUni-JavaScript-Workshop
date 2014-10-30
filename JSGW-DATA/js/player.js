var Player = (function(){
    function Player() {
        this.rect = new Rectangle(20, 450, 50, 56);
        this.animation = new Animation(50, 56, 0, 0, 5, "images/ship.png", 10, 5, 2);

        this.moving = false;
    }

    Player.prototype.Update = function(){

        var previousPosX = this.rect.x;
        if(input.mousePosition.x < 0)
            this.rect.x = 0;
        else if(input.mousePosition.x > 500)
            this.rect.x = canvasWidth - this.rect.width;
        else
            this.rect.x = input.mousePosition.x - 25;

        if(input.mousePosition.y < 250)
            this.rect.y = 250;
        else if(input.mousePosition.y > 500)
            this.rect.y = canvasHeight - this.rect.height;
        else
            this.rect.y = input.mousePosition.y - 29;

        if (previousPosX < player.rect.x) {
            if (player.animation.column == 4 ) {
                player.animation.SetLimit(1);
                player.animation.SetColumn(4);
            }
            else {
                player.animation.SetRow(1);
                player.animation.SetLimit(5);
            }
        }else if (previousPosX > player.rect.x) {
            if(player.animation.column == 4 ) {
                player.animation.SetLimit(1);
                player.animation.SetColumn(4);
            }
            else {
                player.animation.SetRow(0);
                player.animation.SetLimit(5);
            }
        } else {
            player.animation.SetColumn(0);
            player.animation.SetLimit(1);
        }

        this.animation.position.Set(this.rect.x, this.rect.y);
        this.animation.Update();


    };


    Player.prototype.Draw = function(ctx){
        this.animation.Draw(ctx);
    };

    return Player;
})();