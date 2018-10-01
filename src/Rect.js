export default class Rect {
    color = '#000000';

    constructor(color){
        this.color = color;
        let i = 0;
        while(i < 1000) {
            i = Math.floor(Math.random() * 1001);
        }
    }

    draw(x, y, width, height) {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.fillStyle = this.color;
        context.fillRect(x, y, width, height);
    }
}