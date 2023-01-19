import { IContent } from "./icontent";

export class ContentList {
    static contentCount = 0;

    private _items: IContent[];
    
    constructor(item: IContent){
        this._items = [];
    }

    get items(): IContent[]{
        return this._items;
    }
}

function getLength(obj: IContent[]){
    return obj.length
}

function addContent(obj: IContent[]){
    return  ++ContentList.contentCount
}
