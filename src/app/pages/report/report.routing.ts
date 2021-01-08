import { Routes } from "@angular/router";

import { ReportComponent } from "./report.component";

export const ReportRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ReportComponent
      }
    ]
  }
];
