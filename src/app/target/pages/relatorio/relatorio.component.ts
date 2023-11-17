import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {
    constructor() {}

    get isMobile() {
      //@ts-ignore
      return window.navigator.userAgentData.mobile || window.innerWidth < 600;
    }
}
