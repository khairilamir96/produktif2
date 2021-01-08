import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { PreComponent } from "./pre/pre.component";
import { PostComponent } from "./post/post.component";

import { RouterModule } from "@angular/router";
import { AuditsRoutes } from "./audits.routing";

@NgModule({
  declarations: [PreComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuditsRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
  ]
})
export class AuditsModule {}
