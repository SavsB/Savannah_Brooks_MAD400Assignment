import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {

  items: IContent[] = [];
  constructor(){
    this.items.push({
        id: 0,
        name: "My Chemical Romance",
        description: "My Chemical Romance is an American rock band from Newark, New Jersey. The band's current lineup consists of lead vocalist Gerard Way, lead guitarist Ray Toro, rhythm guitarist Frank Iero, and bassist Mikey Way.",
        imgSrc: "https://static.spin.com/files/field/image/100303-my-chemical-romance-.jpg" ,
        mostPopularSong: "Teenagers"
      });
  
      ({
        id: 1,
        name: "Waterparks",
        description:"Waterparks is an American rock band formed in Houston, Texas in 2011. The group currently consists of lead vocalist and rhythm guitarist Awsten Knight, backing vocalist and lead guitarist Geoff Wigington, and backing vocalist and drummer Otto Wood.",
        imgSrc:"https://guitar.com/wp-content/uploads/2021/06/Waterparks-1@1400x1050.jpg",
        mostPopularSong: "I Miss having S*x But At Least I Don't Wanna D*e Anymore"
      });
  
      ({
        id: 2,
        name:"Marianas Trench",
        description: "Marianas Trench are a Canadian pop rock band from Vancouver, British Columbia",
        imgSrc: "https://s1.ticketm.net/dam/a/9d9/ea1a88c5-0e0b-4e41-b92a-390cbb9f69d9_1066741_TABLET_LANDSCAPE_LARGE_16_9.jpg",
        mostPopularSong: "Stutter"
      });
  
      ({
        id: 3,
        name:"Maneskin",
        description: "Måneskin are an Italian rock band formed in Rome in 2016. The band are composed of vocalist Damiano David, bassist Victoria De Angelis, guitarist Thomas Raggi, and drummer Ethan Torchio",
        imgSrc: "https://cdn.theatlantic.com/thumbor/dveMRDFM3dPXQrc3SN0O1BI8nyc=/0x0:4800x2700/960x540/media/img/mt/2023/01/maneskin_Tommaso_Ottomano-1/original.jpg",
        mostPopularSong: "The Loneliest"
      });
  
      ({
        id: 4,
        name: "Fall Out Boy",
        description: "Fall Out Boy is an American rock band formed in Wilmette, Illinois, a suburb of Chicago, in 2001. The band consists of lead vocalist and guitarist Patrick Stump, bassist Pete Wentz, drummer Andy Hurley, and guitarist Joe Trohman.",
        imgSrc:"https://cms.kerrang.com/images/FallOutBoy-JonathanWeiner-2019.jpg",
        mostPopularSong: "Centuries"
      });
  
      ({
        id: 5,
        name:"Jonas Brothers",
        description: "The Jonas Brothers are an American pop rock band. Formed in 2005, they gained popularity from their appearances on the Disney Channel television network. They consist of three brothers: Kevin Jonas, Joe Jonas, and Nick Jonas.",
        imgSrc:"https://media1.popsugar-assets.com/files/thumbor/53M7UFsaW8xbZwfhowOOlBFwXFI/245x0:5616x5371/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/28/700/n/1922398/2159e30e5d66a2626d75a0.31079607_/i/Jonas-Brothers.jpg",
        mostPopularSong:"Leave Before You Love Me"
        
      })
  }
  


}
