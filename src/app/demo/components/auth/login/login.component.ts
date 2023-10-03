import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{
    isLoginAcess: boolean = true;
    isRegisterByPhone: boolean = false;

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit(): void {
    }

    toggleLoginAccess() {
      this.isLoginAcess = !this.isLoginAcess;
    }

    registerByPhone(mode: boolean) {
      this.isRegisterByPhone = mode;
      this.isLoginAcess = false;
    }
}
