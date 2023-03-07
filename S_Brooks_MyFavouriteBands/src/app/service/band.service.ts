import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { INVALIDBAND, BANDS} from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor() { }

  getContent(): Observable<IContent[]>{
    return of(BANDS);
  }

  getContentItem(index: number): Observable<IContent>{
    console.warn("Got to get content item")
    let bandFound: IContent | undefined;
    for (let i = 0; i < BANDS.length; i++){
      if(BANDS[i].id == index){
        bandFound = BANDS[i];
        break;
      }
    }
    if(!bandFound){
      return of(INVALIDBAND);
    }
    console.warn("Got the item", bandFound)
    return of(bandFound)
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    if (BANDS.find((band: IContent) => band.id === item.id) == undefined){
      BANDS.push(item);
    }
    return of(BANDS);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexofBandToUpdate = BANDS.findIndex((band: IContent) => {
      return band.id === item.id;
    });
    if(indexofBandToUpdate !== -1){
      BANDS[indexofBandToUpdate] = item;
    }
    return of(BANDS)
  }

  deleteContentItem(index: number): Observable<IContent> {
    let bandFound: IContent | undefined;
    for(let i = 0; i < BANDS.length; i++){
      if(BANDS[i].id === index){
        bandFound = BANDS[i];
        delete BANDS[i];
        console.log("Did the band get deleted? ", BANDS);
        break;
      }
    }
    if(!bandFound){
      return of (INVALIDBAND);
    }
    return of(bandFound);
  }
}
