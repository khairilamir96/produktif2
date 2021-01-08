import { Component, Inject, NgZone, PLATFORM_ID, OnInit, TemplateRef } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: "app-monitor",
  templateUrl: "monitor.component.html"
})
export class MonitorComponent{
  private chart: am4charts.XYChart;
 //modal
 dismissible = true;

 defaultModal: BsModalRef;
 default = {
   keyboard: true,
   class: "modal-dialog-centered"
 };
 //end modal
 entries: number = 5;
 selected: any[] = [];
 temp = [];
 activeRow: any;
 rows: any = [
   {
     smes: "Olitek Sdn Bhd",
     category: "Complaint",
     status: "Closed",
   },
   {
     smes: "Arachem Sdn Bhd",
     category: "Compound",
     status: "In Progress",
   },
   {
     smes: "CodeSoft Technology Sdn Bhd",
     category: "Complaint",
     status: "Registered",
   },
   {
     smes: "Fuka Packaging Sdn Bhd",
     category: "Complaint",
     status: "Closed",
   },
   {
     smes: "Sanae Food Sdn Bhd",
     category: "Compound",
     status: "Closed",
   },
   {
     smes: "Flavorista (M) Sdn Bhd",
     category: "Compound",
     status: "Closed",
   }
 ];
 SelectionType = SelectionType;

 constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone,private modalService: BsModalService) {
   this.temp = this.rows.map((prop, key) => {
     return {
       ...prop,
       id: key
     };
   });
 }
 // Run the function only in the browser
 browserOnly(f: () => void) {
  if (isPlatformBrowser(this.platformId)) {
    this.zone.runOutsideAngular(() => {
      f();
    });
  }
}
 entriesChange($event) {
   this.entries = $event.target.value;
 }
 filterTable($event) {
   let val = $event.target.value;
   this.temp = this.rows.filter(function(d) {
     for (var key in d) {
       if (d[key].toLowerCase().indexOf(val) !== -1) {
         return true;
       }
     }
     return false;
   });
 }
 onSelect({ selected }) {
   this.selected.splice(0, this.selected.length);
   this.selected.push(...selected);
 }
 onActivate(event) {
   this.activeRow = event.row;
 }

 //modal
 openDefaultModal(modalDefault: TemplateRef<any>) {
   this.defaultModal = this.modalService.show(modalDefault, this.default);
 }
 ngAfterViewInit() {
  // Chart code goes in here
  this.browserOnly(() => {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
let chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [ {
  "country": "Closed",
  "litres": 30000
}, {
  "country": "In Progress",
  "litres": 50000
}, {
  "country": "Registered",
  "litres": 100000
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