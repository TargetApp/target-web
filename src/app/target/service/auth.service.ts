import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, take, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration';
import { Token } from '../models/token';
import { LocalStorageService } from './local-storage.service';
import { UsuarioLogado } from '../models/usuario-logado';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = environment.apiUrl;
  private loggedUserSubject: BehaviorSubject<UsuarioLogado>;
  public loggedInUser: Observable<any>;
  getLoggerUser: any;

  constructor(private http: HttpClient, private storageService: LocalStorageService, private router: Router) {
    this.getLoggerUser = storageService.get('loggedInUser');
        this.loggedUserSubject = new BehaviorSubject(this.getLoggerUser);

        this.loggedInUser = this.loggedUserSubject.asObservable();
  }

  public getUserInfo() : Observable<any> {
    return this.http.get(`${this.baseURL}/TargetUsuario/usuario/${this.loggedUserSubject.value.userId}`)
                .pipe(take(1));
  }

  public login(data: Registration) : Observable<any> {
    return this.http.post(`${this.baseURL}/TargetAccount/conta/pre-login`, data)
               .pipe(take(1));
  }

  public validateLogin(tokenDto: Token) : Observable<UsuarioLogado> {
    return this.http.post<UsuarioLogado>(`${this.baseURL}/TargetAccount/conta/login`, tokenDto)
              .pipe(
                map((response: UsuarioLogado) => {
                    console.log('Response:');
                    console.log(response);
                    this.storageService.set(
                        'loggedInUser',
                        JSON.stringify(response)
                    );
                    this.loggedUserSubject.next(response);
                    return response;
                }),
                catchError((err) => {
                    console.log('error caught in service');
                    console.log(err);
                    //Handle the error here

                    return throwError(err);
                })
            );
  }

  public logoutUser() {
    this.clearLoginCredentials();

    this.loggedUserSubject.subscribe((usuario) => {
      if (usuario == null || usuario == undefined) {
          this.router.navigate(['/login']);
      }
    });
  }

  public clearLoginCredentials() {
    this.storageService.remove('email');
    this.storageService.remove('telephone');
    this.storageService.remove('loggedInUser');
    this.loggedUserSubject.next({} as UsuarioLogado);
  }

  public get loggedInUserValue() {
    return this.loggedUserSubject.value;
  }
}

