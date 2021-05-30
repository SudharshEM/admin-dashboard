import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ApexStroke,
    ApexLegend,
    ApexResponsive,
    ChartComponent,
} from 'ng-apexcharts';

type GradiantCircleChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    stroke: ApexStroke;
};

export type CustomAngleCircleChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: string[];
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
};

@Component({
    selector: 'app-radial-bar-dashboard',
    templateUrl: './radial-bar-dashboard.component.html',
    styleUrls: ['./radial-bar-dashboard.component.scss'],
})
export class RadialBarDashboardComponent implements OnInit {
    overallCompletedPercentage: number = 100;

    @ViewChild('gradiantCircleChart') gradiantCircleChart: ChartComponent =
        new ChartComponent();
    @ViewChild('customAngleCircleChart')
    customAngleCircleChart: ChartComponent = new ChartComponent();

    public gradiantCircleChartOptions: Partial<GradiantCircleChartOptions>;
    public customAngleCircleChartOptions: Partial<CustomAngleCircleChartOptions>;

    constructor() {
        this.gradiantCircleChartOptions = {
            series: [0],
            chart: {
                height: 450,
                type: 'radialBar',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24,
                        },
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35,
                        },
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px',
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val.toString(), 10).toString();
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
            stroke: {
                lineCap: 'round',
            },
            labels: ['Percent'],
        };

        this.customAngleCircleChartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                height: 450,
                type: 'radialBar',
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 50,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                formatter: function (seriesName, opts) {
                    return (
                        seriesName +
                        ':  ' +
                        opts.w.globals.series[opts.seriesIndex]
                    );
                },
                itemMargin: {
                    horizontal: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        };
    }

    ngOnInit(): void {
        this.updateGradiantChart();
        this.updateCustomAngleCircleChart();
    }

    updateGradiantChart() {
        this.gradiantCircleChartOptions.series = [80];
    }

    updateCustomAngleCircleChart() {
        const items: { label: string; value: number }[] = [
            {
                label: 'PC1',
                value: 100,
            },
            {
                label: 'PC2',
                value: 80,
            },
            {
                label: 'PC3',
                value: 20,
            },
            {
                label: 'PC4',
                value: 5,
            },
        ];
        let labels: string[] = [];
        let series: number[] = [];
        items.map((item) => {
            labels.push(item.label);
            series.push(item.value);
        });
        this.customAngleCircleChartOptions.labels = labels;
        this.customAngleCircleChartOptions.series = series;
    }
}
