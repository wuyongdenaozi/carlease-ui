import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/service/user.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent implements OnInit {

  users: Array<User>;

  dataTableOptions = [
    {
      field: 'id',
      header: '用户编号',
      fieldType: 'text'
    },
    {
      field: 'nick',
      header: '用户昵称',
      fieldType: 'text'
    },
    {
      field: 'phone',
      header: '电话号码',
      fieldType: 'text'
    },
    {
      field: 'email',
      header: '邮箱地址',
      fieldType: 'text'
    }
  ]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.users = data.result;
      }
    })
  }

}
