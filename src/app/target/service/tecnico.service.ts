import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public obterTecnicos(filter: string) : Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${this.baseURL}/TargetTecnico/tecnico${filter ? `?filter=${filter}` : ''}`)
               .pipe(take(1));
  }

  public adicionarTecnico(model: Tecnico) : Observable<Tecnico> {
    return this.http.post<Tecnico>(`${this.baseURL}/TargetTecnico/tecnico`, model)
               .pipe(take(1));
  }

  public atualizarTecnico(model: Tecnico, tecnicoId: number, isEvaluation: boolean) : Observable<Tecnico> {
    return this.http.put<Tecnico>(`${this.baseURL}/TargetTecnico/tecnico/${isEvaluation}/${tecnicoId}`, model)
               .pipe(take(1));
  }

  public deletarTecnico(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/TargetTecnico/tecnico/${id}`)
               .pipe(take(1));
  }
}

