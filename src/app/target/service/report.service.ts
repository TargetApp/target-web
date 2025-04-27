import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReportDetails } from '../models/report-details';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getReportById(relatorioId: number) {
    return this.http.get(`${this.baseURL}/TargetRelatorio/relatorio/${relatorioId}`)
  }

  public getReportDetailsByMonth(mes: number) {
    return this.http.get<ReportDetails>(`${this.baseURL}/TargetRelatorio/relatorio/mes/${mes}`)
  }

  public getReportsByDate(year: number, month: number, day: number) {
    return this.http.get(`${this.baseURL}/TargetRelatorio/relatorio/meus-relatorios/${year}/${month}/${day}`)
  }
}
