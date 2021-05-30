import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [SharedModule, PagesRoutingModule],
})
export class PagesModule {}
