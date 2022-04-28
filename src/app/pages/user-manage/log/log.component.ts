import { Component, OnInit } from '@angular/core';
import { LoginLog, LogService } from 'src/service/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit {

  logs: Array<LoginLog>;

  dataTableOptions = [
    {
      field: 'id',
      header: '日志编号',
      fieldType: 'text'
    },
    {
      field: 'username',
      header: '登录帐号',
      fieldType: 'text'
    },
    {
      field: 'userNick',
      header: '用户昵称',
      fieldType: 'text'
    },
    {
      field: 'loginDatetime',
      header: '登录时间',
      fieldType: 'text'
    }
  ]

  constructor(
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.logService.getLogs().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.logs = data.result;
      }
    })
  }

}
