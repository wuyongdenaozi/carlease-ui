import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  user: User = {
    id: 0,
    nick: '',
    phone: '',
    email: ''
  }

  menus = [
    {
      title: '个人信息',
      router: 'info'
    },
    {
      title: '我的汽车',
      router: 'car'
    },
    {
      title: '租借记录',
      router: 'order'
    },
    {
      title: '访问后台',
      router: '/admin/login'
    },
    {
      title: '返回首页',
      router: '/font'
    },
    {
      title: '退出登录',
      router: '/exit'
    }
  ]

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      data => {
        if (data) {
          this.user = data;
        } else {
          alert('登录失效');
          this.router.navigate(['font']);
        }
      }
    );
  }

}
