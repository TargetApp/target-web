import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  year: number = this.activatedRoute.snapshot.params['year'];
  month: number = this.activatedRoute.snapshot.params['month'];
  day: number = this.activatedRoute.snapshot.params['day'];
  loading: boolean = false;
  reportList: any[] = [];
  messageError: string = '';

  constructor(private reportService: ReportService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.obterRelatorios();
  }

  obterRelatorios() {
    this.loading = true;
    this.reportService.getReportsByDate(this.year, this.month, this.day).subscribe({
      next: (data: any) => {
        this.reportList = data;
        this.loading = false;
      },
      error: (error) => {
        this.messageError = error.error;
        this.loading = false;
        console.log(error);
      }
    });
  }

  openReportDetails(reportId: number) {
    this.route.navigate([`resultados/${reportId}`]);
  }

  returnPage() {
    this.route.navigate(['minhas-analises']);
  }
}
