import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/service/car.service';
import { Card } from '../@shared/components/card/card.component';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss']
})
export class FontComponent implements OnInit {

  hotCards: Array<Card> = [];

  countCards: Array<Card> = [];

  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.carService.getCarsByHot().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.hotCards = new Array();
        data.result.forEach(car => {
          this.hotCards.push({
            title: car.name,
            address: car.address,
            phone: car.userPhone,
            img: car.img,
            link: `info/${car.id}`
          });
        });
      }
    });
    this.carService.getCarsByCount().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.countCards = new Array();
        data.result.forEach(car => {
          this.countCards.push({
            title: car.name,
            address: car.address,
            phone: car.userPhone,
            img: car.img,
            link: `info/${car.id}`
          });
        });
      }
    })
  }

}
