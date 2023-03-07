import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import {BandService} from './service/band.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  singleBand?: IContent;
  title = 'S_Brooks_MyFavouriteBands';

  constructor(private bandService: BandService){
  }
  
  ngOnInit(): void {
    this.getTheNewItem("3");
  }

  getTheNewItem(newIdNumber: string): void{
    console.warn("Getting an item: ", newIdNumber);
    this.bandService.getContentItem(Number(newIdNumber)).subscribe((band: IContent) => {
      console.warn("Got  the item: ", band)
      this.singleBand = band;
    });
  }

}
