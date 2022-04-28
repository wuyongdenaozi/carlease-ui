import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Car } from 'src/service/car.service';
import { Order, OrderService } from 'src/service/order.service';
import { UserService } from 'src/service/user.service';

export interface CarBuyModal {
  carInfo: Car;
}

@Component({
  selector: 'app-car-buy',
  templateUrl: './car-buy.component.html',
  styleUrls: ['./car-buy.component.scss']
})
export class CarBuyComponent extends SimpleModalComponent<CarBuyModal, boolean> {

  carInfo: Car = {
    id: -1,
    name: '',
    address: '',
    price: 0,
    typeName: '',
    describes: '',
    img: '',
    userId: -1,
    typeId: -1
  };

  date: number = 1;

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) {
    super();
  };

  buy() {
    this.userService.getUser().subscribe(data => {
      const order: Order = {
        userId: data.id,
        carId: this.carInfo.id,
        date: this.date,
        price: this.carInfo.price * this.date,
        flag: false
      }
      this.orderService.addOrder(order).subscribe(data => {
        if (data.status === 'SUCCESS') {
          if (data.result) {
            alert(`租赁成功!\n租金为: ${order.price} 元`);
            this.close();
          }
        }
      })
    })
  }

}
