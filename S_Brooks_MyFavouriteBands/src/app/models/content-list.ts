
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

    toString(index: number): string{
        const band: IContent = this._bands[index];
        let prettyHtml = `
        <h2>${band.name}</h2>
        <img src="${band.imgSrc}">
        <p>${band.description}</p>
        <p>${band.mostPopularSong}</p>`;

        return prettyHtml;
    }
    
}

