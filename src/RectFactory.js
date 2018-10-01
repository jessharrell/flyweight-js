import Rect from './Rect';

export default class RectFactory {

    rectCollection = {}

    getRect(color) {
        let rect = this.rectCollection[color];
        if(rect === undefined) {
            rect = new Rect(color);
            this.rectCollection[color] = rect;
        }

        return rect;
    }
}