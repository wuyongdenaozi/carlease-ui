import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from 'src/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User = {
    id: -1,
    nick: '',
    phone: '',
    email: ''
  }

  change: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      if (data) {
        this.user = data;
      } else {
        alert('登录失效');
        this.router.navigate(['font']);
      }
    })
  }

  changeInfo(flag: boolean) {
    this.change = flag;
    if (flag === false) {
      this.userService.getUser().subscribe(data => {
        console.log(data);
        if (data) {
          this.user = data;
        }
      })
    }
  }

  updateInfo() {
    if ( this.user.id === -1 || this.user.id === undefined || this.user.id === null) {
      // id值未发生变化,当前用户信息异常
      alert('用户信息异常,修改失败!');
      return;
    }
    if (this.user.nick === undefined || this.user.phone === null || this.user.nick === '') {
      // 用户昵称异常
      alert('用户昵称异常,修改失败!');
      return;
    }
    if (this.user.phone === undefined || this.user.phone === null || this.user.phone === '') {
      alert('用户电话号码异常,修改失败');
      return;
    }
    this.userService.update(this.user).subscribe(data => {
      console.log(data);
      if (data.status === 'SUCCESS') {
        alert('修改成功!');
        this.user = data.result;
        this.userService.setUser(data.result);
      } else {
        alert('修改失败!');
      }
    });
  }

}
