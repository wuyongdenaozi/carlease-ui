import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Car, CarService, UpdateCarInfo } from 'src/service/car.service';

export interface UpdateCarModel {
  carInfo: Car;
}

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent extends SimpleModalComponent<UpdateCarModel, boolean> implements UpdateCarModel {

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

  constructor(
    private carService: CarService
  ) {
    super();
  }

  change() {
    const updateInfo: UpdateCarInfo = {
      id: this.carInfo.id,
      address: this.carInfo.address,
      price: this.carInfo.price,
      describes: this.carInfo.describes
    }
    this.carService.updateCar(updateInfo).subscribe(data => {
      if (data.status === 'SUCCESS') {
        if (data.result) {
          alert('汽车信息修改成功!');
        } else {
          alert('汽车信息修改失败!');
        }
      }
    });
    this.close();
  }

  delete() {
    this.carService.deleteCar(this.carInfo.id).subscribe(data => {
      if (data.status === 'SUCCESS') {
        if (data.result) {
          alert('汽车信息删除成功!');
        } else {
          alert('汽车信息删除失败!');
        }
      }
    });
  }

}
