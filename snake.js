function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspead = 0;
    this.yspead = 1;

    this.move = function() {
        this.x += this.xspead * SCL;
        this.y += this.yspead * SCL;
        if(this.x > 600){
            this.x = 0
        }else if(this.x < 0){
            this.x = 600
        }
        if(this.y > 600){
            this.y = 0
        }else if(this.y < 0){
            this.y = 600
        }

    }

    this.dir = function(x, y){
        this.xspead = x;
        this.yspead = y;
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, SCL, SCL);
    }
}
