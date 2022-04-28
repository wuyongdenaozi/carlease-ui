import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * 自定义 res 返回值类型 \
 * T: 封装对象类型
 */
 export interface Response<T> {
  status: string;
  result: T;
  errors: Array<any>;
}

export interface File {
  fileName: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /** 定义 baseURL */
  private baseURL = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  /**
   * 封装 post 方法
   * @param url 请求路径
   * @param data 请求体
   * @returns 自定义封装返回值类型
   */
  post<I, R>(url: string, data: I): Observable<Response<R>> {
    const path = `${this.baseURL}${url}`;
    return this.http.post<Response<R>>(path, data).pipe(
      catchError(this.handleError<R>())
    );
  }

  /**
   * 封装 get 方法
   * @param url 请求路径
   * @returns 自定义封装返回值类型
   */
  get<R>(url: string): Observable<Response<R>> {
    const path = `${this.baseURL}${url}`;
    return this.http.get<Response<R>>(path).pipe(
      catchError(this.handleError<R>())
    ); 
  }
  
  /**
   * 封装 put 方法
   * 
   * @param url 请求路径
   * @param data 请求体
   * @returns 自定义封装返回值类型
   */
  put<I>(url: string, data: I): Observable<Response<I | any>> {
    const path = `${this.baseURL}${url}`;
    return this.http.put<Response<I | any>>(path, data).pipe(
      catchError(this.handleError<I | any>())
    );
  }

  delete<R>(url: string): Observable<Response<R>> {
    const path = `${this.baseURL}${url}`;
    return this.http.delete<Response<R>>(path);
  }

  filePost(data): Observable<Response<File>> {
    const path = `${this.baseURL}upload`;
    let formData = new FormData();
    formData.append('file', data);
    return this.http.post<Response<File>>(path, formData)
  }

  private handleError<R>() {
    return (error: any) => {
      const e: Response<R> = error.error;

      if (e.status === 'VALID_ERROR') {
        console.warn('数据输入异常: ', e.errors);
      } else if (e.status === 'USER_ERROR') {
        console.warn('用户数据异常: ', e.errors);
      } else {
        console.error('未知异常: ', error);
      }
      
      return of(e);
    }
  }

}
