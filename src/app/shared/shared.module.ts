import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        HttpClientModule,
        RouterModule,
    ],
})
export class SharedModule {}
