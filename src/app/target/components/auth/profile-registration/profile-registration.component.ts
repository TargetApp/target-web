import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.scss']
})
export class ProfileRegistrationComponent {
    registrationForm: FormGroup = new FormGroup({});
    modal: boolean = false;
    categories: any[] = [
      {name: 'Produtor(a) / Agricultor(a)', key: 1},
      {name: 'Fornecedor(a) / Lojista', key: 2},
      {name: 'Técnico(a) agrícola', key: 3},
      {name: 'Estudante', key: 4}
    ];

    constructor(private formBuilder: FormBuilder, private router: Router) {
      this.registrationForm = this.formBuilder.group({
        nome: [''],
        email: [''],
        tipoCadastro: [''],
        tipoConta: [''],
        telefone: [''],
        endereco: [''],
        cpfCnpj: [''],
      });
    }

    startApp() {
      this.router.navigate(['/']);
    }

    nextStep() {
      this.modal = true;
    }
}
