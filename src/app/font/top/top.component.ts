import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

export interface Nav {
  title: string;
  router: string;
  enable: boolean;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public tops: Array<Nav> = [
    { title: '用户登录', router: 'login', enable: true },
    { title: '用户注册', router: 'register', enable: true },
    { title: '后台管理', router: '/admin/login', enable: true },
    { title: '联系我们', router: '', enable: true },
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.tops[0] = {
          title: '欢迎回来: ' + data.nick, 
          router: 'user', 
          enable: true
        }
      }
    });
  }

}
