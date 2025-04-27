import { Component, OnInit } from '@angular/core';
import { PwaInstallPromptService } from './service/app.pwa.service';


@Component({
  selector: 'app-pwa-install-prompt',
  templateUrl: './app.pwa.component.html',
  styleUrls: ['./app.pwa.component.scss']
})
export class AppPwaComponent implements OnInit {
  showPrompt = false;

  constructor(private pwaInstallPromptService: PwaInstallPromptService) {}

  ngOnInit(): void {
    this.showPrompt = this.pwaInstallPromptService.shouldShowPrompt();
  }

  closePrompt(): void {
    this.showPrompt = false;
  }
}
