import { Injectable } from '@angular/core';
import { HttpService } from 'src/service/http.service';

/**
 * 汽车类型数据
 */
export interface CarType {
  id?: number;
  name: string;
}

/**
 * 汽车类型服务类
 */
@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  constructor(private http: HttpService) {}

  getCarTypes() {
    return this.http.get<Array<CarType>>('car-type');
  }

  addCarType(name: string) {
    const carType: CarType = { name };
    return this.http.post<CarType, boolean>('car-type', carType);
  }
}
