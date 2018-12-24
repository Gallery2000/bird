import {DataStroe} from './base/DataStroe.js';
import { UpPenCil } from './runtime/UpPenCil.js';
import { DownPenCil } from './runtime/DownPenCil.js';
export class Director{
    static getInStance(){
        if(!Director.instance){
            Director.instance = new Director(); 
        }
        return Director.instance;
    }
    constructor(){
        this.DataStroe = DataStroe.getInstance();
        this.landSpeed = 2;
    }

    createPenCil(){
        //空隙的距离是写死的 top是2个铅笔向上偏移的距离
        const minTop = window.innerHeight/8;
        const maxTop = window.innerHeight/2;
        const top = minTop+Math.random()*(maxTop-minTop);
        this.DataStroe.get('pencils').push(new UpPenCil(top));
        this.DataStroe.get('pencils').push(new DownPenCil(top));
    }

    run(){
        if(this.isGameOver===false){
            this.DataStroe.get('background').draw();
            const pencils = this.DataStroe.get('pencils');
            if(pencils[0].x+pencils[0].width<=0&&pencils.length===4){
                pencils.splice(0,2);
            }
            if(pencils[0].x<=(window.innerWidth-pencils[0].width)/2&&pencils.length===2){
                this.createPenCil();
            }
            this.DataStroe.get('pencils').forEach((item,index,array)=>{
                item.draw();
            })
            this.DataStroe.get('land').draw();
            this.DataStroe.get('birds').draw();
            let timer = requestAnimationFrame(()=>this.run());
            this.DataStroe.put('timer',timer);
        }else{
            cancelAnimationFrame(this.DataStroe.get('timer'));
            this.DataStroe.destroy();
        }

    }
}