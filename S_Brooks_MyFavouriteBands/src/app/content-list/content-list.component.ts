import { Component, Input } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {

@Input() contentItemInputValue?: IContent;
bandsArray: any;
  


}
