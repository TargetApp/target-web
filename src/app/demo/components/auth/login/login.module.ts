import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from '../register/register.component';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { ValidateLoginComponent } from '../validate-login/validate-login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        InputMaskModule,
        ToastModule,
    ],
    declarations: [
      LoginComponent,
      RegisterComponent,
      ValidateLoginComponent
    ]
})
export class LoginModule { }
