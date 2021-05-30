import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientModule,
        RouterModule,
        NgApexchartsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientModule,
        RouterModule,
        NgApexchartsModule,
    ],
})
export class SharedModule {}
