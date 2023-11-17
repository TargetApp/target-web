import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layout/app.layout.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
      { path: "", component: AppLayoutComponent,
      children: [
          { path: "", component: DashboardComponent },
          { path: "relatorio", component: RelatorioComponent },
      ]
  },
    ])],
    exports: [RouterModule]
})
export class TargetRoutingModule { }
