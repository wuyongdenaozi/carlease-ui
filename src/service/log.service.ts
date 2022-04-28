import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

export interface LoginLog {
  id?: number;
  username: string;
  userNick: string;
  loginDatetime: string;
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpService
  ) { }

  getLogs() {
    return this.http.get<Array<LoginLog>>('login-log');
  }
}
