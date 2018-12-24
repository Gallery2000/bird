export class DataStroe{
    static getInstance(){
        //这样写的好处是 其他模块可以一起控制该模块的数据
        if(!DataStroe.instance){
            DataStroe.instance = new DataStroe();
        }
        return DataStroe.instance;

    }
    constructor(){
        this.map = new Map();
    }
    put(key,value){
        if(typeof value==='function'){
            value = new value();
        }
        this.map.set(key,value);
        return this;
    }
    get (key){
        return this.map.get(key);
    }
    destroy(){
        for(let value of this.map.values()){
            value = null;
        }
    }
}