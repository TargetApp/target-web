import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ValidateLoginComponent } from './validate-login/validate-login.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
    ],
    declarations: [
    ]
})
export class AuthModule { }
