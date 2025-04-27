import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { interval, Subscription, takeWhile } from 'rxjs';
import { Registration } from 'src/app/target/models/registration';
import { Token } from 'src/app/target/models/token';
import { AuthService } from 'src/app/target/service/auth.service';
import { LocalStorageService } from 'src/app/target/service/local-storage.service';

@Component({
  selector: 'app-validate-login',
  templateUrl: './validate-login.component.html',
  styleUrls: ['./validate-login.component.scss'],
  providers: [MessageService]
})
export class ValidateLoginComponent {
    usuarioId: number = 0;
    tokenModel = {} as Token;
    loading: boolean = false;
    tokenDto: Registration = {} as Registration;
    countdown: number = 30;
    canResend: boolean = false;
    pincode: string[] = ['', '', '', '', ''];

    private countdownSubscription: Subscription = new Subscription();

    constructor(private authService: AuthService,
                private storageService: LocalStorageService,
                private router: ActivatedRoute,
                private route: Router,
                private messageService: MessageService) {
      this.router.params.subscribe(params => {
        this.tokenModel.userId = params['usuarioId'];
      });
      this.startCountdown();

      this.tokenDto.email = this.storageService.get('email') ? this.storageService.get('email').toString() : '';
      this.tokenDto.telephone = this.storageService.get('telephone') ? this.storageService.get('telephone').toString() : '';
    }

    clearInputs() {
      this.pincode = ['', '', '', '', ''];
    }

    onPasteEvent(event: ClipboardEvent): void {
      event.preventDefault();

      const text = event.clipboardData?.getData('text');
      if (text && text.length === 5) {
        const pinArray = text.split('');
        for (let i = 0; i < pinArray.length; i++) {
          this.pincode[i] = pinArray[i];
        }

        const inputElements = document.querySelectorAll('.pin-input');
        const nextInputIndex = pinArray.length < inputElements.length ? pinArray.length : 0;
        if (inputElements[nextInputIndex]) {
          (inputElements[nextInputIndex] as HTMLElement).focus();
        }
      }
    }

    onInputEntry(event: any, index: number) {
      const input = event.target;

      if (input.value.length === 1 && index < this.pincode.length - 1) {
        const nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    resendToken() {
      if (this.canResend) {
        this.startCountdown();
        this.authService.login(this.tokenDto).subscribe({
          next: () => {
            this.messageService.add({severity:'info', summary: 'Sucesso', detail: 'Token reenviado!'});
            this.storageService.remove('email');
            this.storageService.remove('telephone');
          },
          error: (error) => {
            this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar cadastro!'});
            console.log(error);
          },
        });
      }
    }

    startCountdown() {
      this.canResend = false;
      this.countdown = 30;
      this.countdownSubscription = interval(1000).pipe(
        takeWhile(() => this.countdown > 0)
      ).subscribe(() => {
        this.countdown--;
        if (this.countdown === 0) {
          this.canResend = true;
          this.countdownSubscription.unsubscribe();
        }
      });
    }

    canSubmit(): boolean {
      return this.pincode.length === 5 && this.pincode.every(pin => pin.length === 1);
    }

    validateLogin() {
      this.loading = true;
      this.tokenModel.token = this.pincode.join('').toUpperCase();

      this.authService.validateLogin(this.tokenModel).subscribe({
        next: (data) => {
          this.loading = false;
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Login realizado com sucesso!'})
          this.route.navigate(['/']);
          console.log(data);
        },
        error: (error) => {
          this.loading = false;
          this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar login! Erro: ' + error.error})
          console.log(error);
        }
      });
    }
}
