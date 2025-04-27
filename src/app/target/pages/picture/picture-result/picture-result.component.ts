import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassificationReport } from 'src/app/target/models/classification-report';
import { ReportService } from 'src/app/target/service/report.service';

@Component({
  selector: 'app-picture-result',
  templateUrl: './picture-result.component.html',
  styleUrls: ['./picture-result.component.scss']
})
export class PictureResultComponent implements OnInit{
  loading: boolean = false;
  report: ClassificationReport = {};
  reportId: number = this.route.snapshot.params['reportId'];

  constructor(private router: Router,
              private reportService: ReportService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getReportById();
  }

  returnPage() {
    window.history.back();
  }

  getReportById() {
    this.loading = true;

    this.reportService.getReportById(this.reportId).subscribe({
      next: (report: any) => {
        this.report = report;

        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getContacts() {
    this.router.navigate(['/contato-tecnicos']);
  }
}
