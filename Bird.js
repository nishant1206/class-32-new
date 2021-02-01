class Bird extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("sprites/bird.png");
        this.image2 = loadImage("sprites/smoke.png");
        this.arr = [];
    }

    display() {
        super.display();
        push();
        var p = this.body.position;
        if (this.body.velocity.x > 10 && this.body.position.x > 220) {
            var arr_2 = [p.x, p.y];
            this.arr.push(arr_2);
        }
        for (var i = 0; i < this.arr.length; i = i + 2) {
            image(this.image2, this.arr[i][0], this.arr[i][1]);
        }
        pop();
    }
}