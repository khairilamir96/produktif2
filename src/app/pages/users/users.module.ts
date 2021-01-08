import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from "ngx-bootstrap/modal";

import { UsersComponent } from "./users.component";

import { RouterModule } from "@angular/router";
import { UsersRoutes } from "./users.routing";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    NgxDatatableModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ModalModule.forRoot(),
  ]
})
export class UsersModule {}
