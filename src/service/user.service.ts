import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService, Response } from 'src/service/http.service';

/** 用户信息 */
export interface User {
  id: number;
  nick: string;
  phone: string;
  email?: string;
  cd?: string;
}

/** 登录信息 */
export interface LoginInfo {
  username: string;
  password: string;
}

/** 注册信息 */
export interface RegisterInfo {
  username: string;
  password: string;
  nick: string;
  phone: string;
  email?: string;
  cd?: string;
}

/**
 * 用户信息服务类
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /** 保存当前登录用户信息 */
  private user = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpService) {}

  /**
   * 保存登录用户信息
   */
  setUser(user: User): void {
    this.user.next(user);
  }

  /**
   * @returns 当前登录用户信息
   */
  getUser(): Observable<User> {
    return this.user;
  }

  /**
   * 清除当前登录用户信息
   */
  clean() {
    this.user.next(undefined);
  }

  /**
   * 普通用户登录方法
   * @param data 登录信息
   * @returns 异步结果
   */
  login(data: LoginInfo): Observable<Response<User>> {
    return this.http.post<LoginInfo, User>('user/login', data);
  }

  /**
   * 获取所有用户信息方法
   * @returns 异步结果
   */
  getUsers(): Observable<Response<Array<User>>> {
    return this.http.get<Array<User>>('user');
  }

  /**
   * 普通用户注册方法
   * @param data 注册信息
   * @returns 异步结果
   */
  register(data: RegisterInfo): Observable<Response<boolean>> {
    return this.http.post<RegisterInfo, boolean>('user/register', data);
  }

  update(data: User): Observable<Response<User>> {
    return this.http.put<User>('user', data);
  }
}
