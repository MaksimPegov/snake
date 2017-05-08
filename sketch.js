var snake;
var SCL = 20;
var food;

function setup(){
    createCanvas(600,600);
    snake = new Snake()
    frameRate(10)
    // food = createVector(random(0, width-SCL), random(0, height-SCL));
    food = pickLocation()

}

function pickLocation(){
    var cols = floor(width/SCL);
    var rows = floor(height/SCL);
    var vector = createVector(floor(random(cols)),floor(random(rows)) );
    vector = vector.mult(SCL);
    return vector;
};

function draw(){
    background(51);
    snake.move(); // перемещаем змею
    snake.death();// проверка на смерть
    snake.show(); // рисуем змею
    var happi = snake.eat(food); // Пытаемся съесть еду
    if (happi){
        food = pickLocation();
    } // Если еду съели, выбираем для неё новое положение
    fill(255, 0, 100);
    rect(food.x, food.y, SCL, SCL); // Рисуем еду
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.yspead !== 1 && snake.dir(0, -1)
    } else if (keyCode === DOWN_ARROW){
        snake.yspead !== -1 && snake.dir(0, 1)
    } else if (keyCode === RIGHT_ARROW){
        snake.xspead !== -1 && snake.dir(1, 0)
    } else if (keyCode === LEFT_ARROW){
        snake.xspead !== +1 && snake.dir(-1, 0)
    }
}
