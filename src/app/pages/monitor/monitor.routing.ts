import { Routes } from "@angular/router";

import { MonitorComponent } from "./monitor.component";

export const MonitorRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MonitorComponent
      }
    ]
  }
];
