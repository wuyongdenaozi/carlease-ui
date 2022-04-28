import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from 'src/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orders: Array<Order>;

  dataTableOptions = [
    {
      field: 'id',
      header: '订单编号',
      fieldType: 'text',
    },
    {
      field: 'carName',
      header: '汽车名称',
      fieldType: 'text'
    },
    {
      field: 'userName',
      header: '租客昵称',
      fieldType: 'text'
    },
    {
      field: 'date',
      header: '租借天数',
      fieldType: 'text'
    },
    {
      field: 'price',
      header: '应付租金',
      fieldType: 'text'
    },
    {
      field: 'flag',
      header: '订单状态',
      fieldType: 'text'
    },
    {
      field: 'orderDatetime',
      header: '订单创建时间',
      fieldType: 'text'
    }
  ]

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.orders = data.result;
        this.initFlag();
      }
    })
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
