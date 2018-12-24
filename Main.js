import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Director} from './js/Director.js';
import {BackGround} from './js/runtime/BackGround.js';
import {DataStroe} from './js/base/DataStroe.js'
import {Land} from './js/runtime/Land.js';
import {Birds} from './js/player/Birds.js';
export class Main{
    constructor(){
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.DataStroe = DataStroe.getInstance();
        this.Director = Director.getInStance();
        //加载图片 
        const loader = ResourceLoader.create();
        loader.onLoaded(map=>this.onResourceFirstLoaded(map));
    }
    onResourceFirstLoaded(map){
        this.DataStroe.ctx = this.ctx;
        this.DataStroe.res = map;
        this.init();
    }
    init(){
        this.Director.isGameOver = false;
        this.DataStroe
            .put('pencils',[])
            .put('background',BackGround)
            .put('land',Land)
            .put('birds',Birds)
            this.Director.createPenCil();
            this.Director.run();
    }
}