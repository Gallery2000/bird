import {Resources} from './Resources.js'
export class ResourceLoader{
    constructor(){
        this.map = new Map(Resources);

        for(let [key,value] of this.map){
            const image = new Image();
            image.src = value;
            this.map.set(key,image);
        };
    }
    onLoaded(callback){  //加载每张图片
        let loadedCount = 0;
        for(let value of this.map.values()){  //map.values() 提取所有的value 变成一个数组 和map.keys()一样
            value.onload = ()=>{
                loadedCount++;
                if(loadedCount>=this.map.size){
                    callback(this.map);
                }
            }
        }
    }
    static create(){
        return new ResourceLoader();
    }
}