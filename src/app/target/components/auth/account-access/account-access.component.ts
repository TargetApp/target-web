import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/target/service/auth.service';


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

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService,
              private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      tipoCadastro: [''],
      tipoConta: [''],
      telefone: [''],
      endereco: ['']
    });
  }

  ngOnInit(): void {}

  signIn() {
    console.log(this.registrationForm.value);
    this.authService.preLogin(this.registrationForm.value).subscribe(
    {
      next: (data) => {
        this.usuarioId = data;
        this.messageService.add({severity:'info', summary: 'Sucesso', detail: 'Valide o token recebido para acessar!'});
        this.router.navigate(['login/validate', this.usuarioId]);
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar cadastro!'});
        console.log(error);
      },
    });
  }
}
