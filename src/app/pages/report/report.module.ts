import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TagInputModule } from "ngx-chips";
import { BsDropdownModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { ReportComponent } from "./report.component";
import { RouterModule } from "@angular/router";
import { ReportRoutes } from "./report.routing";

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes),
    FormsModule,
    TagInputModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class ReportModule {}
