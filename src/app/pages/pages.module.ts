import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { RadialBarDashboardComponent } from '../dashboards/radial-bar-dashboard/radial-bar-dashboard.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [SharedModule, PagesRoutingModule, DashboardsModule],
})
export class PagesModule {}
