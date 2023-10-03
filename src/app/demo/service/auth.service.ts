import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Token } from 'src/app/models/Token';
import { Registration } from 'src/app/models/registration';
import { environment } from 'src/environments/environment';

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
