import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { BasicComponent } from "./basic.component";

import { RouterModule } from "@angular/router";
import { BasicRoutes } from "./basic.routing";

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
  ]
})
export class BasicModule {}
