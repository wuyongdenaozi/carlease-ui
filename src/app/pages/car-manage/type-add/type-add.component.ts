import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html'
})
export class TypeAddComponent extends SimpleModalComponent<string, string> {

  public type: string;

  add() {
    this.result = this.type;
    this.close();
  }
}
