export default class Rect {
    color = '#000000';

    constructor(color){
        this.color = color;
    }

    draw(x, y, width, height) {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.fillStyle = this.color;
        context.fillRect(x, y, width, height);
    }
}