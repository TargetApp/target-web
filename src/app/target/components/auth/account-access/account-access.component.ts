import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/target/service/auth.service';
import { LocalStorageService } from 'src/app/target/service/local-storage.service';


@Component({
  selector: 'app-account-access',
  templateUrl: './account-access.component.html',
  styleUrls: ['./account-access.component.scss'],
  providers: [MessageService]
})
export class AccountAccessComponent implements OnInit{
  phone: string = '';
  usuarioId: number = 0;
  registrationForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService,
              private localStorageService: LocalStorageService,
              private router: Router) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
    });
  }

  ngOnInit(): void {}

  signIn() {
    this.loading = true;
    console.log(this.registrationForm.value);
    // Verifica se o campo de e-mail é válido
    if(this.registrationForm.value.email) {
      if (this.registrationForm.get('email')?.valid) {
        this.authService.login(this.registrationForm.value).subscribe({
          next: (data) => {
            this.localStorageService.set('email', JSON.stringify(this.registrationForm.value.email));
            this.localStorageService.set('telephone', JSON.stringify(this.registrationForm.value.telephone));
            this.usuarioId = data.userId;
            this.messageService.add({severity:'info', summary: 'Sucesso', detail: 'Valide o token recebido para acessar!'});
            this.loading = false;
            this.router.navigate([`login/validate/${this.usuarioId}`]);
          },
          error: (error) => {
            this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar cadastro!'});
            console.log(error);
            this.loading = false;
          },
        });
      } else {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Email inválido! Verifique o email digitado!'});
        this.loading = false;
      }
    } else {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Preenchimento do email é obrigatório!'});
      this.loading = false;
    }
  }
}
