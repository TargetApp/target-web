import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginModule } from './demo/components/auth/login/login.module';
import { AuthModule } from './demo/components/auth/auth.module';
import { DashboardModule } from './demo/components/dashboard/dashboard.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ProductService } from './demo/service/product.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from 'primeng/toast';

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
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
