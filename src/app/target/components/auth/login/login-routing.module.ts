import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ValidateLoginComponent } from '../validate-login/validate-login.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: "", component: LoginComponent },
        { path: "validate/:usuarioId", component: ValidateLoginComponent }
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
