import {PenCil} from './PenCil.js';
import {Sprite} from '../base/Sprite.js';
export class DownPenCil extends PenCil{
    constructor(top){
        const image = Sprite.getImage('pie_down');
        super(image,top);
    }
    draw(){
        //gap 上下铅笔的间隔
        let gap = window.innerHeight/5;
        this.y = this.top+gap;
        super.draw();
    }
}