import { IContent } from "./icontent";

export class ContentList {
    private _bands: IContent[];
    
    constructor(){
        this._bands = [];
    }

    get bands(): IContent[]{
        return this._bands;
    }
}
