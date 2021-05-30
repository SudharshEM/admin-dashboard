import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'dashboard',
        component: DefaultLayoutComponent,
        loadChildren: () =>
            import('./dashboards/dashboards.module').then(
                (m) => m.DashboardsModule
            ),
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        loadChildren: () =>
            import('./pages/pages.module').then((m) => m.PagesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
