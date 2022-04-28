import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { CarTypeService, CarType } from 'src/service/car-type.service';
import { CarInfo } from 'src/service/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent extends SimpleModalComponent<string, CarInfo> implements OnInit {

  result: CarInfo = {
    name: '',
    address: '',
    price: 0,
    typeId: -1,
    describes: '',
    img: undefined,
    flag: false
  };

  types: Array<CarType> = [];

  formData: FormData;

  constructor(
    private carTypeService: CarTypeService,
    private el: ElementRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.carTypeService.getCarTypes().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.types = data.result;
      }
    });
  }

  add() {
    const file = this.el.nativeElement.querySelector('#file');
    this.result.img = file.files[0];
    this.result.flag = true;
    this.close();
  }

}
