import { Component } from '@angular/core';
import {ContentList} from './models/content-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'S_Brooks_MyFavouriteBands';
  bandsList: ContentList;

  constructor(){
    this.bandsList = new ContentList();
    
    this.bandsList.addContent({
      id: 0,
      name: "My Chemical Romance",
      description: "My Chemical Romance is an American rock band from Newark, New Jersey. The band's current lineup consists of lead vocalist Gerard Way, lead guitarist Ray Toro, rhythm guitarist Frank Iero, and bassist Mikey Way.",
      imgSrc: "" ,
      mostPopularSong: "Teenagers"
    });

    this.bandsList.addContent({
      id: 1,
      name: "Waterparks",
      description:"Waterparks is an American rock band formed in Houston, Texas in 2011. The group currently consists of lead vocalist and rhythm guitarist Awsten Knight, backing vocalist and lead guitarist Geoff Wigington, and backing vocalist and drummer Otto Wood.",
      imgSrc:"",
      mostPopularSong: "I Miss having S*x But At Least I Don't Wanna D*e Anymore"
    });

    this.bandsList.addContent({
      id: 2,
      name:"Marianas Trench",
      description: "Marianas Trench are a Canadian pop rock band from Vancouver, British Columbia",
      imgSrc: "",
      mostPopularSong: "Stutter"
    });

    this.bandsList.addContent({
      id: 3,
      name:"Maneskin",
      description: "Måneskin are an Italian rock band formed in Rome in 2016. The band are composed of vocalist Damiano David, bassist Victoria De Angelis, guitarist Thomas Raggi, and drummer Ethan Torchio",
      imgSrc: "",
      mostPopularSong: "The Loneliest"
    });

    this.bandsList.addContent({
      id: 4,
      name: "Fall Out Boy",
      description: "Fall Out Boy is an American rock band formed in Wilmette, Illinois, a suburb of Chicago, in 2001. The band consists of lead vocalist and guitarist Patrick Stump, bassist Pete Wentz, drummer Andy Hurley, and guitarist Joe Trohman.",
      imgSrc:"",
      mostPopularSong: "Centuries"
    });

    this.bandsList.addContent({
      id: 5,
      name:"Jonas Brothers",
      description: "The Jonas Brothers are an American pop rock band. Formed in 2005, they gained popularity from their appearances on the Disney Channel television network. They consist of three brothers: Kevin Jonas, Joe Jonas, and Nick Jonas.",
      imgSrc:"",
      mostPopularSong:"Leave Before You Love Me"
      
    })

  }
}
