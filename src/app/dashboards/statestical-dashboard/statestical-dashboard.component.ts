import { Component, OnInit } from '@angular/core';

class StatesticalDashboardViewModel {
    totalCount!: number;
    completedCount!: number;
    startTime!: Date;
    currentTime!: Date;

    get pendingCount(): number {
        return this.totalCount - this.completedCount;
    }

    get elapsedTimeInSeconds(): number {
        return (this.currentTime.getTime() - this.startTime.getTime()) / 1000;
    }

    get speedPerSecond(): number {
        return this.completedCount / this.elapsedTimeInSeconds;
    }

    get averageTimeTakenInSeconds(): number {
        return this.elapsedTimeInSeconds / this.completedCount;
    }

    get secondsRequiredToComplete(): number {
        return this.pendingCount * this.averageTimeTakenInSeconds;
    }

    get expectedToCompleteAt(): Date {
        const date = new Date(this.currentTime);
        date.setSeconds(date.getSeconds() + this.secondsRequiredToComplete);
        return date;
    }
}

@Component({
    selector: 'app-statestical-dashboard',
    templateUrl: './statestical-dashboard.component.html',
    styleUrls: ['./statestical-dashboard.component.scss'],
})
export class StatesticalDashboardComponent
    extends StatesticalDashboardViewModel
    implements OnInit
{
    constructor() {
        super();
    }

    ngOnInit(): void {
        this.totalCount = 15000;
        this.completedCount = 10000;
        this.startTime = new Date('2021-05-30 7:30');
        this.currentTime = new Date('2021-05-30 11:30');
        console.log(this);
    }
}
