import React, {Component} from 'react';
import './App.css';
import Rect from './Rect';

const WINDOW_WIDTH = 1200;
const WINDOW_HEIGHT = 600;

export default class App extends Component {
    colors = ['#000000', '#123456', '#FF66F6', '#6666FF', '#66F066'];

    constructor() {
        super();
        this.drawAllTheRectangles = this.drawAllTheRectangles.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
        this.getRandomDigit = this.getRandomDigit.bind(this);
    }

    render() {
        return (
            <div className="App">
                <canvas id='myCanvas' style={{backgroundColor: '#F0D0F0', width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}/>
                <button onClick={this.drawAllTheRectangles}>Draw</button>
            </div>
        );
    }

    drawAllTheRectangles() {
        const startTime = performance.now();


        for( let i =0; i < 100000; i++) {
            const rect = new Rect(this.getRandomColor(), this.getRandomDigit(), this.getRandomDigit(), this.getRandomDigit(), this.getRandomDigit());
            rect.draw();
        }

        const endTime = performance.now();
        console.log("Drawing took " + (endTime - startTime) + " milliseconds.");
    }

    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    getRandomDigit() {
        return Math.floor(Math.random() * 171);
    }
}
