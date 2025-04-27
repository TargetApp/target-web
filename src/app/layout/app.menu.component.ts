import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                  { label: 'Nova Análise', icon: 'fas fa-camera-retro', routerLink: ['/'] },
                  { label: 'Minhas Análises', icon: 'fas fa-list', routerLink: ['minhas-analises'] },
                  { label: 'Contato dos Técnicos', icon: 'far fa-address-book', routerLink: ['contato-tecnicos'] },
                  { label: 'Sair', icon: 'fas fa-sign-out-alt', routerLink: ['login'] },
                  //{ label: 'Meu Cadastro', icon: 'pi pi-fw pi-id-card', routerLink: ['/perfil'] },
                  //{ label: 'Contato dos Fornecedores', icon: 'pi pi-fw pi-id-card', routerLink: [] },
                ]
            },
        ];
    }
}
