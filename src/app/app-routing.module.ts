import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudManagementComponent } from './stud-management/stud-management.component';
import { TeachManagementComponent } from './teach-management/teach-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'studentmanagement', component: StudManagementComponent },
  { path: 'teachermanagement', component: TeachManagementComponent },
  { path: 'classmanagement', component: ClassManagementComponent },
{path: 'attendance', component: AttendanceComponent},
{path:'reports', component:AttendanceComponent},
{path:'settings', component:SettingsComponent},
{path:'dashboard', component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 