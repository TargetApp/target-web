import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginModule } from './demo/components/auth/login/login.module';
import { AuthModule } from './demo/components/auth/auth.module';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    LoginModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
