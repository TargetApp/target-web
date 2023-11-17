import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    getStarted: boolean = true;
    isRegisterByPhone: boolean = false;

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit(): void {
    }

    toggleLoginAccess() {
      this.getStarted = !this.getStarted;
    }

    registerByPhone(mode: boolean) {
      this.isRegisterByPhone = mode;
      this.getStarted = false;
    }
}
