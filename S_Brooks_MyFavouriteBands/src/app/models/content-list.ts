import { IContent } from "./icontent";

export class ContentList {
    private _bands: IContent[];
    
    constructor(){
        this._bands = [];
    }

    get bands(): IContent[]{
        return this._bands;
    }

    addContent(newBand: IContent){
        this._bands.push(newBand);
    }

    arrayLength(): number{
        return this._bands.length;
    }
}
