export class Texture {
    static from(url){
        const i = new Image();
        i.crossOrigin='anonymous';
        i.src = `${url}?timestamp=${new Date().getTime()}`;

        console.log(i)
        return PIXI.Texture.from(i);
    }

}