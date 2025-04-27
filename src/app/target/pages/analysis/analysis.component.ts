import { Component, OnInit } from '@angular/core';
import { CalendarMonthChangeEvent } from 'primeng/calendar';
import { ReportDetails } from '../../models/report-details';
import { ReportService } from '../../service/report.service';
import { ReportDate } from '../../models/report-date';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit{
  reportDetails: ReportDetails = {} as ReportDetails;

  constructor(private reportService: ReportService, private router: Router) {
  }

  ngOnInit(): void {
    this.getReportDetailsByMonth(new Date().getMonth() + 1);
  }

  isDateIncluded(date: ReportDate): boolean {
    return this.reportDetails && this.reportDetails.reportDates
      ? this.reportDetails.reportDates.some(d =>
          d.day === date.day && d.month === date.month + 1 && d.year === date.year
        )
      : false;
  }

  getReportDetailsByMonth(month: number) {
    this.reportService.getReportDetailsByMonth(month).subscribe({
      next: (data: ReportDetails) => {
        this.reportDetails = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onSelect($event: any) {
    console.log($event)
    this.router.navigate([`minhas-analises/${$event.year}/${$event.month + 1}/${$event.day}`]);
  }

  returnPage() {
    window.history.back();
  }
}
