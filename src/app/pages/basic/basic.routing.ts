import { Routes } from "@angular/router";

import { BasicComponent } from "./basic.component";

export const BasicRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BasicComponent
      }
    ]
  }
];
