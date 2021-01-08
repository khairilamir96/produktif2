import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "presentation",
    pathMatch: "full"
  },
  {
    path: "presentation",
    component: PresentationComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "audits",
        loadChildren: "./pages/audits/audits.module#AuditsModule"
      },
      {
        path: "monitor",
        loadChildren: "./pages/monitor/monitor.module#MonitorModule"
      },
      {
        path: "users",
        loadChildren: "./pages/users/users.module#UsersModule"
      },
      {
        path: "report",
        loadChildren: "./pages/report/report.module#ReportModule"
      },
      {
        path: "basic",
        loadChildren: "./pages/basic/basic.module#BasicModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
