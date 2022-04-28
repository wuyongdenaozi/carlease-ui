import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/service/http.service';

export interface LoginInfo {
  username: string;
  password: string;
}

export interface User {
  type: 'user';
  id: number;
  nick: string;
  phone: string;
  email?: string;
}

export interface Admin {
  type: 'admin';
  username: string;
}

@Injectable()
export class AuthService {

  private loginInfo: LoginInfo = {
    username: '',
    password: ''
  }

  constructor(private http: HttpService) {}

  login(account: string, password: string) {
    this.loginInfo.username = account;
    this.loginInfo.password = password;
    return this.http.post<LoginInfo, boolean>('admin/login', this.loginInfo);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userinfo');
  }

  setSession(userInfo) {
    userInfo.userName = 'Admin';
    localStorage.setItem('id_token', '123456');
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
    localStorage.setItem('expires_at', '120');
  }

  isUserLoggedIn() {
    if (localStorage.getItem('userinfo')) {
      return true;
    } else {
      return false;
    }
  }
}
