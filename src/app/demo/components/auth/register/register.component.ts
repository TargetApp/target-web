import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit{
  @Input() isRegisterByPhone: boolean = false;
  phone: string = '';
  usuarioId: number = 0;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService,
              private router: Router) {
    this.registerForm = this.formBuilder.group({
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
    console.log(this.registerForm.value);
    this.authService.preLogin(this.registerForm.value).subscribe(
    {
      next: (data) => {
        this.usuarioId = data;
        this.messageService.add({severity:'info', summary: 'Sucesso', detail: 'Valide o token recebido para acessar!'});
        this.router.navigate(['/login/validate', this.usuarioId]);
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar cadastro!'});
        console.log(error);
      },
    });
  }
}
