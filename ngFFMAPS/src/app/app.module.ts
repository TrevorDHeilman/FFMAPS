import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {PurchaseService} from './purchase.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeePortalComponent,
    HomeComponent,
    NavbarComponent,
    OwnerDashboardComponent,
    LoginComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
