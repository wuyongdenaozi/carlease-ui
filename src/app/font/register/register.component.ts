import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterInfo, UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  /** 注册信息 */
  public registerInfo: RegisterInfo = {
    username: '',
    password: '',
    nick: '',
    phone: '',
    email: '',
    cd: ''
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * 注册方法
   */
  register() {
    this.userService.register(this.registerInfo).subscribe(
      data => {
        if (data.status === 'SUCCESS') {
          if (data.result) {
            // 注册成功
            this.router.navigate(['login']);
          } else {
            alert('注册失败!');
            this.animation();
          }
        } else {
          this.animation();
        }
      }
    )
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
