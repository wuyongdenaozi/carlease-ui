import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableWidthConfig } from 'ng-devui';
import { CarService, Car, DeleteCarsInfo } from 'src/service/car.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent implements OnInit {

  cars: Array<Car>;

  private deleteCars: Array<Car> = [];

  dataTableOptions = [
    {
      field: 'name',
      header: '汽车名称',
      fieldType: 'text'
    },
    {
      field: 'typeName',
      header: '汽车类型',
      fieldType: 'text'
    },
    {
      field: 'userNick',
      header: '所属人',
      fieldType: 'text'
    },
    {
      field: 'price',
      header: '租金(元/天)',
      fieldType: 'text'
    },
    {
      field: 'flag',
      header: '当前状态',
      fieldType: 'text'
    }
  ]

  tableWidthConfig: Array<TableWidthConfig> = [
    {
      field: "#",
      width: "40px"
    }
  ]

  @ViewChild("customTemplate") customTemplate: TemplateRef<any>;
  msgs: Array<Object> = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.cars = data.result;
        this.initFlag();
      }
    });
  }

  private initFlag() {
    this.cars.forEach(
      car => {
        if (car.flag === true) {
          car.flag = '已出租';
        } else {
          car.flag = '未出租';
        }
      }
    )
  }

  onCheckChange(data: any) {
    if (this.deleteCars.includes(data)) {
      this.deleteCars = this.deleteCars.filter(car => {
        return car.id !== data.id;
      });
    } else {
      this.deleteCars.push(data);
    }
    console.log(this.deleteCars);
  }

  carDown() {
    if (this.deleteCars.length === 0) {
      alert('未选中任何汽车信息');
      return;
    } else {
      const deleteCarsInfo: DeleteCarsInfo = {
        carIdList: [],
      };
      this.deleteCars.forEach(car => {
        deleteCarsInfo.carIdList.push(car.id);
      });
      this.carService.deleteCars(deleteCarsInfo).subscribe();
    }
  }

}
