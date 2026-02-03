// ...existing code...
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudManagementComponent } from './stud-management/stud-management.component';
import { TeachManagementComponent } from './teach-management/teach-management.component';
import { ClassManagementComponent } from './class-management/class-management.component';
// import { AttendanceComponent } from './attendance/attendance.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardTileComponent } from './card-tile/card-tile.component';
import { CommonModule } from '@angular/common';
import { MsalModule, MsalGuard } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
// import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudManagementComponent,
    TeachManagementComponent,
    ClassManagementComponent,
    // AttendanceComponent,
    ReportsComponent,
    SettingsComponent,
    CardTileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "YOUR_AZURE_AD_APP_CLIENT_ID",
          authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
          redirectUri: "http://localhost:4200/"
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: true
        }
      }),
      {
        interactionType: InteractionType.Popup,
        authRequest: {
          scopes: ["https://app.powerbi.com/dashboardEmbed?dashboardId=XXX&groupId=YYY&allowThirdPartyCookies=true"]
        }
      },
      {
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map()
      }
    )
  ],
  providers: [MsalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }