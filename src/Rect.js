export default class Rect {
    color = '#000000';
    x = 0;
    y = 0;
    width = 0;
    height = 0;

    constructor(color, x, y, width, height){
        this.color = color;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw() {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}