import {Sprite} from '../base/Sprite.js'
export class Birds extends Sprite{
    constructor(){
        const image = Sprite.getImage('birds');
        super(image,0,0,image.width,image.height,0,0,image.width,image.height);
        this.clippingX = [
            9,
            9+34+18,
            9+34+18+34+18,
        ]
        this.clippingY = [10,10,10];
        this.clippingWidth = [34,34,34];
        this.clippingHeight = [24,24,24];
        this.birdX = window.innerWidth/4;
        this.birdsX = [this.birdX,this.birdX,this.birdX];
        this.birdY = window.innerHeight/2;
        this.birdsY = [this.birdY,this.birdY,this.birdY];
        this.birdWidth = 34;
        this.birdsWidth = [this.birdWidth,this.birdWidth,this.birdWidth];
        this.birdHeight = 24;
        this.birdsHeight = [this.birdHeight,this.birdHeight,this.birdHeight];
        this.y = [this.birdY,this.birdY,this.birdY];
        this.index = 0;
        this.count = 0;
        this.time = 0;
        console.log(this.birdsHeight[0]);
    }
    draw(){
        const speed = 0.2;
        this.count = this.count+speed;
        if(this.index>=2){
            this.count = 0;
        }
        this.index = Math.floor(this.count);
        super.draw(
            this.img,
            this.clippingX[this.index],this.clippingY[this.index],
            this.clippingWidth[this.index],this.clippingHeight[this.index],
            this.birdsX[this.index],this.birdsY[this.index],
            this.birdsWidth[this.index],this.birdsHeight[this.index]
            )
    }
}