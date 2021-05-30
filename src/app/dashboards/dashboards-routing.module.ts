import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadialBarDashboardComponent } from './radial-bar-dashboard/radial-bar-dashboard.component';
import { TabularDashboardComponent } from './tabular-dashboard/tabular-dashboard.component';

const routes: Routes = [
    {
        path: 'radial-bar',
        component: RadialBarDashboardComponent,
    },
    {
        path: 'tabular',
        component: TabularDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
