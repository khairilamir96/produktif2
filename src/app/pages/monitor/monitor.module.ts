import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { MonitorComponent } from "./monitor.component";

import { RouterModule } from "@angular/router";
import { MonitorRoutes } from "./monitor.routing";

@NgModule({
  declarations: [MonitorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MonitorRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
  ]
})
export class MonitorModule {}
