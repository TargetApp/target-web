import { Component, OnInit } from '@angular/core';
import { Tecnico } from '../../models/tecnico';
import { TecnicoService } from '../../service/tecnico.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  cities: any[] = [
    {name: 'Rio de Janeiro', expanded: false },
    {name: 'São Paulo', expanded: false },
    {name: 'Minas Gerais', expanded: false },
    {name: 'Espírito Santo', expanded: false },
    {name: 'Bahia', expanded: false },
    {name: 'Pernambuco', expanded: false },
    {name: 'Ceará', expanded: false },
    {name: 'Paraná', expanded: false }
  ];

  tecnicos: Tecnico[] = [];
  tecnico: Tecnico = {} as Tecnico;

  avaliacaoDialog = false;
  rating: number = 0;
  filter: string = '';

  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.obterListaTecnicos();
  }

  returnPage() {
    window.history.back();
  }

  obterListaTecnicos() {
    this.tecnicoService.obterTecnicos(this.filter).subscribe({
      next: (tecnicos: Tecnico[]) => {
        this.tecnicos = tecnicos;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  toggleExpansion(item: Tecnico) {
    item.isExpanded = !item.isExpanded;
  }

  avaliarTecnico(tecnico: Tecnico) {
    this.tecnico = tecnico;
    this.avaliacaoDialog = true;
  }

  onSubmit() {
    console.log(this.rating);
    this.tecnico.newEvaluation = this.rating;

    this.tecnicoService.atualizarTecnico(this.tecnico, this.tecnico.id, true).subscribe({
      next: () => {
        this.obterListaTecnicos();
        this.avaliacaoDialog = false;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
