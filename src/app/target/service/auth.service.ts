import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public preLogin(data: Registration) : Observable<number> {
    return this.http.post<number>(`${this.baseURL}/TargetAccount/pre-login`, data)
               .pipe(take(1));
  }

  public login(tokenDto: Token) : Observable<any> {
    return this.http.post(`${this.baseURL}/TargetAccount/login`, tokenDto)
               .pipe(take(1));
  }
}
