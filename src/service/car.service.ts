import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, File, Response } from 'src/service/http.service';
import { UserService } from './user.service';

/**
 * 汽车数据
 */
export interface Car {
  id?: number;
  name: string;
  address: string;
  price: number;
  userId: number;
  userNick?: string;
  userPhone?: string;
  typeId: number;
  typeName?: string;
  flag?: boolean | string;
  number?: number;
  img: string;
  describes?: string;
  $checked?: boolean;
}

export interface CarInfo {
  name: string;
  address: string;
  price: number;
  typeId: number;
  describes?: string;
  img: any;
  flag: boolean
}

export interface UpdateCarInfo {
  id: number;
  address?: string;
  price?: number;
  describes?: string;
}

export interface DeleteCarsInfo {
  carIdList: Array<number>;
}

/**
 * 汽车服务类
 */
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private car: Car = {
    name: '',
    address: '',
    price: 0,
    typeId: -1,
    userId: -1,
    img: ''
  };

  constructor(
    private http: HttpService,
    private userService: UserService
    ) {}

  getCars() {
    return this.http.get<Array<Car>>('car');
  }

  getCarsByHot() {
    return this.http.get<Array<Car>>('car/hot');
  }

  getCarsByCount() {
    return this.http.get<Array<Car>>('car/count');
  }

  getCar(carId: string) {
    return this.http.get<Car>(`car/${carId}`);
  }

  getCarsByUser(userId: number) {
    return this.http.get<Array<Car>>(`car/user/${userId}`);
  }

  addCar(carInfo: CarInfo) {
    this.userService.getUser().subscribe(
      data => {
        if (data) {
          this.car.name = carInfo.name;
          this.car.address = carInfo.address;
          this.car.price = carInfo.price;
          this.car.typeId = carInfo.typeId;
          this.car.userId = data.id;
          this.car.describes = carInfo.describes;

          this.http.filePost(carInfo.img).subscribe(data => {
            if (data.status === 'SUCCESS') {
              const fileName = data.result.fileName;
              console.log('fileName', fileName);
              this.car.img = fileName;

              this.http.post<Car, boolean>('car', this.car).subscribe(data => {
                if (data.status === 'SUCCESS') {
                  if (data.result) {
                    alert('添加成功!');
                  }
                }
              });
            }
          });
        }
      }
    )
  }

  updateCar(updateInfo: UpdateCarInfo): Observable<Response<boolean>> {
    return this.http.put<UpdateCarInfo>('car', updateInfo);
  }

  deleteCar(id: number) {
    return this.http.delete<boolean>(`car/${id}`);
  }

  deleteCars(info: DeleteCarsInfo) {
    return this.http.post<DeleteCarsInfo, void>(`car/del`, info);
  }
}
