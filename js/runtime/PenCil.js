import {Director} from '../Director.js';
import {Sprite} from '../base/Sprite.js';
export class PenCil extends Sprite{
    constructor(image,top){
        super(image,0,0,image.width,image.height,window.innerWidth,0,image.width,image.height);
        this.top = top;
    }
    draw(){
        this.x = this.x-Director.getInStance().landSpeed;
        super.draw(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.img.width,this.img.height);
    }
}