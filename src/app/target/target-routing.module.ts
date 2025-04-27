import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layout/app.layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PictureAnalysisComponent } from './pages/picture/picture-analysis/picture-analysis.component';
import { PictureResultComponent } from './pages/picture/picture-result/picture-result.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { AuthGuard } from './helpers/auth.guard';
import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
    imports: [RouterModule.forChild([
      {
        canActivate: [AuthGuard],
        path: "", component: AppLayoutComponent,
        children: [
            { path: "", component: PictureAnalysisComponent },
            { path: "dashboard", component: DashboardComponent },
            { path: "resultados/:reportId", component: PictureResultComponent},
            { path: "contato-tecnicos", component: ContactComponent},
            { path: "minhas-analises", component: AnalysisComponent},
            { path: "minhas-analises/:year/:month/:day", component: ReportsComponent},
        ]
      },
    ])],
    exports: [RouterModule]
})
export class TargetRoutingModule { }
