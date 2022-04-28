import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { CarTypeService, CarType } from 'src/service/car-type.service';
import { TypeAddComponent } from '../type-add/type-add.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html'
})
export class TypeComponent implements OnInit {

  carTypes: Array<CarType>;

  dataTableOptions = [
    {
      field: 'id',
      header: '编号',
      fieldType: 'text',
    },
    {
      field: 'name',
      header: '类型',
      fieldType: 'text'
    }
  ]

  constructor(
    private carTypeService: CarTypeService,
    private simpleModalService: SimpleModalService
  ) { }

  ngOnInit(): void {
    this.carTypeService.getCarTypes().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.carTypes = data.result;
      }
    })
  }

  show() {
    this.simpleModalService.addModal(TypeAddComponent).subscribe(
      data => {
        if (data && data !== '') {
          this.carTypeService.addCarType(data).subscribe(
            data => {
              if (data.status === 'SUCCESS') {
                if (data.result) {
                  this.ngOnInit();
                }
              }
            }
          )
        }
      }
    )
  }

}
