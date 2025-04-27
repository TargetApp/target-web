import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetRoutingModule } from './target/target-routing.module';
import { LoginRoutingModule } from './target/components/auth/login/login-routing.module';


const routes: Routes = [
   { path: "", loadChildren: () => TargetRoutingModule },
   { path: "login", loadChildren: () => LoginRoutingModule },

   { path: "**", redirectTo: "" },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
