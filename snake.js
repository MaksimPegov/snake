function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspead = 0;
    this.yspead = 1;
    this.size = 1;
    this.tail =[];

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

    this.eat = function(food) {
        if(this.x == food.x && this.y == food.y){
            this.size += 1;
            console.log('ням!');
            return true;
            
        } else return false;

    }

    this.dir = function(x, y){
        this.xspead = x;
        this.yspead = y;
    }

    this.show = function() {debugger
        if(this.size === this.tail.length){  
            for (var i = 0; i < this.tail.length - 1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.size-1] = createVector(this.x, this.y)
        fill(255);
        // Нарисовать голову
        rect(this.x, this.y, SCL, SCL); 
        // Нарисовать хвост
        for (var i = 0; i < this.tail.length; i++) {
            var el = this.tail[i];
            rect(el.x, el.y, SCL, SCL)

            
        }
    }
}
