import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

export interface Order {
  id?: number;
  userId: number;
  userName?: string;
  carId: number;
  carName?: string;
  date: number;
  price: number;
  flag?: boolean | string;
  orderDatetime?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpService
  ) {

  }

  addOrder(order: Order) {
    return this.http.post<Order, boolean>('orders', order);
  };

  getOrders() {
    return this.http.get<Array<Order>>('orders');
  };

  getOrdersByUserId(userId: number) {
    return this.http.get<Array<Order>>(`orders/user/${userId}`);
  };

  getOrdersByCarId(carId: number) {
    return this.http.get<Array<Order>>(`orders/car/${carId}`);
  }
  
}
