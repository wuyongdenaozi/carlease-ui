import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/@shared/components/card/card.component';
import { Car, CarService } from 'src/service/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Array<Car>;

  cards: Array<Array<Card>>;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      if (data.status === 'SUCCESS') {
        if (data.result) {
          this.cars = data.result;
          this.initCards();
        }
      }
    });
  }

  private initCards() {
    this.cards = [];
    
    for (let i = 0; i < Math.ceil(this.cars.length / 5); i++) {
      this.cards[i] = [];
      for (let j = 0; j < 5; j++) {
        // 判断是否为最后一行数据
        if (i === Math.ceil(this.cars.length / 5) - 1) {
          // 当前数据为最后一行
          if (Math.ceil(this.cars.length % 5) === 0) {
            // 当前行数据刚好铺满
            this.cards[i][j] = {
              title: this.cars[i * 5 + j].name,
              address: this.cars[i * 5 + j].address,
              phone: this.cars[i * 5 + j].userPhone,
              img: this.cars[i * 5 + j].img,
              link: `/font/info/${this.cars[i * 5 + j].id}`
            }
          } else {
            // 不足一行的数据位被舍弃
            if (j < Math.ceil(this.cars.length % 5)) {
              this.cards[i][j] = {
                title: this.cars[i * 5 + j].name,
                address: this.cars[i * 5 + j].address,
                phone: this.cars[i * 5 + j].userPhone,
                img: this.cars[i * 5 + j].img,
                link: `/font/info/${this.cars[i * 5 + j].id}`
              } 
            }
          } 
        } else {
          this.cards[i][j] = {
            title: this.cars[i * 5 + j].name,
            address: this.cars[i * 5 + j].address,
            phone: this.cars[i * 5 + j].userPhone,
            img: this.cars[i * 5 + j].img,
            link: `/font/info/${this.cars[i * 5 + j].id}`
          }
        }
      }
    }
  }

}
