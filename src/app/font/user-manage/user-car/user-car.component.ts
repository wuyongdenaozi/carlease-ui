import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { Car, CarService } from 'src/service/car.service';
import { UserService } from 'src/service/user.service';
import { AddCarComponent } from '../add-car/add-car.component';
import { UpdateCarComponent } from '../update-car/update-car.component';

@Component({
  selector: 'app-user-car',
  templateUrl: './user-car.component.html',
  styleUrls: ['./user-car.component.scss']
})
export class UserCarComponent implements OnInit {

  cars: Array<Car> = [
    {
      name: '123',
      address: '1232414',
      price: 123,
      describes: '124124214125125125',
      userId: -1,
      typeId: -1,
      img: ''
    }
  ];

  options = [
    {
      title: '汽车名称',
      field: 'name'
    },
    {
      title: '所在地点',
      field: 'address'
    },
    {
      title: '租金',
      field: 'price'
    },
    {
      title: '描述信息',
      field: 'describes'
    }
  ]

  constructor(
    private router: Router,
    private simpleModalService: SimpleModalService,
    private userService: UserService,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.carService.getCarsByUser(data.id).subscribe(data => {
          if (data.status === 'SUCCESS') {
            this.cars = data.result;
          }
        })
      } else {
        alert('登录失效!');
        this.router.navigate(['font']);
      }
    })
  }

  add() {
    this.simpleModalService.addModal(AddCarComponent).subscribe(data => {
      if (data.flag) {
        this.carService.addCar(data);
      }
    });
  }

  select(item: Car) {
    this.simpleModalService.addModal(UpdateCarComponent, { carInfo: item }).subscribe(data => {
      console.log(data);
    })
  }

}
