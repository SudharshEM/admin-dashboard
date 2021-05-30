import { NgModule } from '@angular/core';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RadialBarDashboardComponent } from './radial-bar-dashboard/radial-bar-dashboard.component';
import { TabularDashboardComponent } from './tabular-dashboard/tabular-dashboard.component';
import { StatesticalDashboardComponent } from './statestical-dashboard/statestical-dashboard.component';

@NgModule({
    declarations: [
        RadialBarDashboardComponent,
        TabularDashboardComponent,
        StatesticalDashboardComponent,
    ],
    imports: [SharedModule, DashboardsRoutingModule],
    exports: [RadialBarDashboardComponent, StatesticalDashboardComponent],
})
export class DashboardsModule {}
