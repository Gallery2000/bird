import {DataStroe} from './DataStroe.js';

export class Sprite{
    /**
     *Creates an instance of Sprite.
     * @param {*} [ctx=null] 画布对象
     * @param {*} [img=null] img对象
     * @param {number} [srcX=0] 图片开始裁剪的x位置
     * @param {number} [srcY=0] 图片开始裁剪的y位置
     * @param {number} [srcW=0] 图片裁剪的宽度
     * @param {number} [srcH=0] 图片裁剪的高度
     * @param {number} [x=0] 渲染画布x轴
     * @param {number} [y=0] 渲染画布y轴
     * @param {number} [width=0] 渲染到画布的宽度
     * @param {number} [height=0] 渲染到画布的高度
     * @memberof Sprite
     */
    constructor(img=null,srcX=0,srcY=0,srcW=0,srcH=0,x=0,y=0,width=0,height=0){
        this.DataStroe = DataStroe.getInstance();
        this.ctx = this.DataStroe.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static getImage(key){
       return DataStroe.getInstance().res.get(key);
    }
    draw(img=this.img,srcX=this.srcX,srcY=this.srcY,srcW=this.srcW,srcH=this.srcH,x=this.x,y=this.y,width=this.width,height=this.height){
        this.ctx.drawImage(img,srcX,srcY,srcW,srcH,x,y,width,height);
    }
}