import { Routes } from "@angular/router";

import { PreComponent } from "./pre/pre.component";
import { PostComponent } from "./post/post.component";

export const AuditsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "pre",
        component: PreComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "post",
        component: PostComponent
      }
    ]
  }
];
