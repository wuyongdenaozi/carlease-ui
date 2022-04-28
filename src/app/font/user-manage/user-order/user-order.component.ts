import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from 'src/service/order.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  orders: Array<Order> = [
    {
      id: -1,
      userId: -1,
      userName: '',
      carId: -1,
      carName: '',
      date: -1,
      price: -1,
      flag: false
    }
  ];

  options = [
    {
      title: '汽车名称',
      field: 'carName'
    },
    {
      title: '租赁时间',
      field: 'date'
    },
    {
      title: '所用租金',
      field: 'price'
    },
    {
      title: '租赁状态',
      field: 'flag'
    }
  ]

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.orderService.getOrdersByUserId(data.id).subscribe(data => {
          if (data.status === 'SUCCESS') {
            this.orders = data.result;
            this.initFlag();
          }
        })
      }
    });
  }

  private initFlag() {
    this.orders.forEach(order => {
      if (order.flag === false) {
        order.flag = '租赁中';
      } else {
        order.flag = '已完成';
      }
    });
  }

}
