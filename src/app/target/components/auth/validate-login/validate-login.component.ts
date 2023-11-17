import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Token } from 'src/app/target/models/token';
import { AuthService } from 'src/app/target/service/auth.service';

@Component({
  selector: 'app-validate-login',
  templateUrl: './validate-login.component.html',
  styleUrls: ['./validate-login.component.scss'],
  providers: [MessageService]
})
export class ValidateLoginComponent {
    usuarioId: number = 0;
    tokenModel = {} as Token;


    constructor(private authService: AuthService, private router: ActivatedRoute, private messageService: MessageService) {
      this.router.params.subscribe(params => {
        this.tokenModel.usuarioId = params['usuarioId'];
      });
    }

    login() {
      console.log(this.tokenModel);
      this.authService.login(this.tokenModel).subscribe(
        {
          next: (data) => {
            this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Login realizado com sucesso!'})
            console.log(data);
          },
          error: (error) => {
            this.messageService.add({severity:'error', summary: 'Erro', detail: 'Erro ao realizar login! Erro: ' + error.message})
            console.log(error);
          }
        }
      );
    }
}
