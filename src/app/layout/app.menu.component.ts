import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Acessos',
                items: [
                  { label: 'Relatórios', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
                  { label: 'Técnicos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                  { label: 'Fornecedores', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                ]
            },
        ];
    }
}
