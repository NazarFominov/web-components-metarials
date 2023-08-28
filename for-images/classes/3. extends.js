class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    destroy() {}

    draw() {}
}

class Circle extends Point {
    constructor(x, y, radius) {
        super(x, y);

        this.radius = radius;
    }

    showParams() {
        console.log(this.x, this.y, this.radius)
    }

    destroy() {}

    draw() {
        super.draw();
    }
}
