import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from "./dashboard.component";

import { RouterModule } from "@angular/router";
import { DashboardRoutes } from "./dashboard.routing";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    BsDropdownModule.forRoot()
  ]
})
export class DashboardModule {}
