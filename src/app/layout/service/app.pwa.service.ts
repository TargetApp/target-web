import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // Exemplo de serviço de cookies

@Injectable({
  providedIn: 'root'
})
export class PwaInstallPromptService {
  private showAfterDays = 90;
  private cookieName = 'pwa_install_prompt_last_visit';

  constructor(private cookieService: CookieService) {}

  shouldShowPrompt(): boolean {
    const lastVisit = this.cookieService.get(this.cookieName);
    const now = new Date();
    if (!lastVisit) {
      this.updateLastVisit(now);
      return true;
    }

    const lastVisitDate = new Date(parseInt(lastVisit));
    const daysSinceLastVisit = (now.valueOf() - lastVisitDate.valueOf()) / (1000 * 60 * 60 * 24);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

    if (daysSinceLastVisit > this.showAfterDays && isIOS) {
      this.updateLastVisit(now);
      return true;
    }

    return false;
  }

  private updateLastVisit(date: Date): void {
    const expiryDays = 180;
    this.cookieService.set(this.cookieName, date.valueOf().toString(), expiryDays, '/');
  }
}
