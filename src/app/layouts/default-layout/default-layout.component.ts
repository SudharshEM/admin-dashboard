import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
    isCollapsed = true;

    constructor() {}

    ngOnInit(): void {}

    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}
