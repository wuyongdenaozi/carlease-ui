import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, LoginInfo } from 'src/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /** 登录信息 */
  public loginInfo: LoginInfo = {
    username: '',
    password: ''
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * 登录方法
   */
  login() {
    this.userService.login(this.loginInfo).subscribe(
      data => {
        if (data.status === 'SUCCESS') {
          // 登录成功
          this.userService.setUser(data.result);
          this.router.navigate(['']);
        } else {
          this.animation();
        }
      }
    );
  }

  /**
   * 跳转到注册页面
   */
  toRegister() {
    this.router.navigate(['font', 'register']);
  }

  /**
   * 操作失败动画效果
   */
  private animation() {
    this.renderer.addClass(this.el.nativeElement.querySelector('#box'), 'buzz');
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement.querySelector('#box'), 'buzz');
    }, 3000);
  }

}
