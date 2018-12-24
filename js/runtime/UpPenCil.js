import {PenCil} from './PenCil.js';
import {Sprite} from '../base/Sprite.js';
export class UpPenCil extends PenCil{
    constructor(top){
        const image = Sprite.getImage('pie_up');
        super(image,top);
    }
    draw(){
        this.y = this.top-this.height;
        super.draw();
    }
}