import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import noUiSlider from "nouislider";
import Dropzone from "dropzone";
Dropzone.autoDiscover = false;
import Quill from "quill";
import Selectr from "mobius1-selectr";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: "app-report",
  templateUrl: "report.component.html"
})
export class ReportComponent {
  //datepicker
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone)
   {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }
  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  
  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";

      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
    this.browserOnly(() => {
      /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv1", am4charts.PieChart);

// Add data
chart.data = [ {
  "country": "adabi",
  "litres": 501.9
}, {
  "country": "cap ketereh",
  "litres": 301.9
}, {
  "country": "habib",
  "litres": 201.1
}, {
  "country": "faiza",
  "litres": 165.8
}, {
  "country": "jalin",
  "litres": 139.9
}, {
  "country": "sakan",
  "litres": 128.3
}, {
  "country": "ramly",
  "litres": 99
}, {
  "country": "ayamas",
  "litres": 60
}, {
  "country": "Nagasari",
  "litres": 50
} ];

// Set inner radius
chart.innerRadius = am4core.percent(50);

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;
    });


    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
let chart = am4core.create("chartdiv2", am4charts.XYChart);
chart.paddingRight = 20;

let data =  [{
    
        "year": "2001",
        "value": 0.411
    }, {
        "year": "2002",
        "value": 0.462
    }, {
        "year": "2003",
        "value": 0.47
    }, {
        "year": "2004",
        "value": 0.445
    }, {
        "year": "2005",
        "value": 0.47
    }];

chart.data = data;
chart.dateFormatter.inputDateFormat = "yyyy";

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;
dateAxis.baseInterval = {timeUnit:"year", count:1};

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

let series = chart.series.push(new am4charts.StepLineSeries());
series.dataFields.dateX = "year";
series.dataFields.valueY = "value";
series.tooltipText = "{valueY.value}";
series.strokeWidth = 3;

chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.cursor.fullWidthLineX = true;
chart.cursor.lineX.strokeWidth = 0;
chart.cursor.lineX.fill = chart.colors.getIndex(2);
chart.cursor.lineX.fillOpacity = 0.1;

chart.scrollbarX = new am4core.Scrollbar();
    });

    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv3", am4charts.PieChart);

// Add data
chart.data = [ {
  "country": "Syed IKS Mart",
  "litres": 501.9
}, {
  "country": "ESLEGACYMY EMPIRE",
  "litres": 301.9
}, {
  "country": "OrderSiapSiap",
  "litres": 201.1
}, {
  "country": " FITRIF INOVASI ENTERPRISE",
  "litres": 165.8
}, {
  "country": "Rayyan Network Solution",
  "litres": 139.9
}, {
  "country": "HARIKAIDIAZ ENTERPRISE",
  "litres": 128.3
}, {
  "country": "KAK INA HOMEMADE",
  "litres": 99
}, {
  "country": "Lehajart",
  "litres": 60
}, {
  "country": "Captive Food",
  "litres": 50
} ];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}