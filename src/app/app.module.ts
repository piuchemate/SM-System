import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudManagementComponent } from './stud-management/stud-management.component';
import { TeachManagementComponent } from './teach-management/teach-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    StudManagementComponent,
    TeachManagementComponent,
    ClassManagementComponent,
    AttendanceComponent,
    ReportsComponent,
    SettingsComponent,
    DashboardComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
