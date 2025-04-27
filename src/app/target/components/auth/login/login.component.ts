import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/target/service/auth.service';
import { LocalStorageService } from 'src/app/target/service/local-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    getStarted: boolean = true;
    isRegisterByPhone: boolean = false;


    constructor(public layoutService: LayoutService, private authService: AuthService) {
    }

    ngOnInit(): void {
      this.authService.clearLoginCredentials();
    }

    toggleLoginAccess() {
      this.getStarted = !this.getStarted;
    }

    registerByPhone(mode: boolean) {
      this.isRegisterByPhone = mode;
      this.getStarted = false;
    }
}
