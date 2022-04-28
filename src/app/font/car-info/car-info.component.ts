import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { Car, CarService } from 'src/service/car.service';
import { UserService } from 'src/service/user.service';
import { CarBuyComponent } from '../car-buy/car-buy.component';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {

  carInfo: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private userService: UserService,
    private simpleModalService: SimpleModalService
  ) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id).subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.carInfo = data.result;
        console.log(this.carInfo);
      }
    });
  }

  buy() {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.simpleModalService.addModal(CarBuyComponent, { carInfo: this.carInfo }).subscribe(data => {

        });
      } else {
        alert('登录信息失效,请登录!');
        this.router.navigate(['font', 'login']);
      }
    })
  }

}
