import { Component, Input } from '@angular/core';

export interface Card {
  title: string;
  address: string;
  phone: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: Card; 

}
