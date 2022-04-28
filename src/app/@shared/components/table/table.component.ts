import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Option {
  title: string;
  field: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: Array<any>;

  @Input() dataOptions: Array<Option>;

  @Input() useAutoNumber?: boolean = false;

  @Input() useButton?: boolean = false;

  @Input() buttonTitle?: string = '';

  @Output() selected? = new EventEmitter();

  @Output() buttonSelected? = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(item: any) {
    this.selected.emit(item);
  }

  clickButton(item: any) {
    this.buttonSelected.emit(item);
  }

}
